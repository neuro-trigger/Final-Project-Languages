# Turing Machine Simulator

Turing Machine Simulator is a web application that simulates standard deterministic Turing machines. The machine is described with a small DSL (Domain-Specific Language) called TMD and then parsed and executed.

## Overview

- Frontend: React (Create React App) + MUI. Users paste TMD code and view a simple tape visualization.
- Backend: Node.js. Uses ANTLR4 to parse the TMD grammar and a `TuringMachine` runtime to step through execution.
- DSL: The TMD grammar is defined with ANTLR in `backend/grammar/tmd.g4`.

## Key ideas

- **TMD DSL (Turing Machine Descriptor)**: A minimal language to describe a deterministic Turing machine: machine metadata, alphabets, and `Behaviour` rules.
- **Parsing with ANTLR4**: `backend/src/main.js` demonstrates how the TMD source is tokenized and parsed using the generated lexer/parser/visitor.
- **Runtime engine**: `backend/src/TuringMachine.js` implements the simulator with tape, head position, history for stepping backward, and termination when entering an accept state.
- **Web API (WIP)**: `backend/src/server.js` exposes a sample `POST /api/longText` endpoint as a placeholder for sending TMD code or inputs.

## Project structure

```
Final-Project-Languages/
  backend/
    grammar/
      tmd.g4                # ANTLR grammar for the TMD DSL
    input/
      test.txt              # Example input (if used)
    src/
      main.js               # Example: parse TMD, build machine, run a sample execution
      server.js             # Express server (WIP) with a sample endpoint
      TuringMachine.js      # Turing machine runtime
      tmd*.js               # Generated ANTLR artifacts (lexer/parser/visitor)
  frontend/
    src/
      App.js                # App shell
      CodeField.js          # Text area to paste TMD code, toggles the view
      TuringMachineRender.js# Simple tape visualization demo
      Machine.css           # Styles for the visualization
```

## End-to-end flow (current)

1. User enters TMD code in the frontend (`CodeField`).
2. UI toggles to a visualization component (`TuringMachineRender`) when loading; a placeholder API call is wired when toggling back.
3. On the backend, TMD code can be parsed with ANTLR into an internal structure, then loaded into `TuringMachine` for execution.
4. The runtime iterates with `nextStep()` until an accept state is reached; `prevStep()` supports stepping backward from history.

Notes:
- The sample endpoint in `server.js` (`POST /api/longText`) currently just echoes a message. Wire this endpoint to call the parsing/execution path from `main.js` as needed.
- The frontend fetch example uses `localhost:3000`; remember to include the `http://` scheme when invoking it from the browser code and avoid port conflicts with CRA dev server (CRA uses 3000 by default).

## Backend components

- `TuringMachine` (`backend/src/TuringMachine.js`)
  - State: current state, head position, tape array, execution history
  - Key methods:
    - `verifyInput(inputString)` — ensure all symbols are in input alphabet
    - `loadInput(inputString)` — initialize the tape and the first instruction
    - `nextStep()` — write symbol, move head, change state, update next instruction; stops on accept
    - `prevStep()` — pop from history to step backward
- Parsing pipeline (`backend/src/main.js`)
  - Uses ANTLR4 runtime:
    - `tmdLexer` → `tmdParser` → `tmdVisitor`
  - Builds sets and maps for alphabets, states, and `behaviour` mapping to feed the runtime
- Grammar (`backend/grammar/tmd.g4`)
  - Top-level: `description` requires `Machine`, `NAset`, `Aset`, `Init`, `INalphabet`, `Malphabet`, `Behaviour`
  - Movement tokens: `LEFT`, `RIGHT`, `STAY`

## Frontend components

- `App.js`: Layout and header, mounts `CodeField`.
- `CodeField.js`: Multiline text entry for TMD, toggles to the visualizer and back; includes a sample `fetch` to the backend.
- `TuringMachineRender.js`: Simple tape UI with left/right controls (demo data at the moment).

## Running locally

Prerequisites: Node.js 18+.

- Backend
  - Install dependencies:
    - `cd backend/src && npm install`
    - If you plan to run the sample Express server: `npm install express`
  - Run the parser + sample execution: `node main.js`
  - Run the server (WIP): `node server.js`
- Frontend
  - Install dependencies: `cd frontend && npm install`
  - Start dev server: `npm start` (opens on `http://localhost:3000`)

## API (WIP)

- `POST /api/longText`
  - Body: `{ "text": "<your TMD code or long text>" }`
  - Response: `{ message: string }`
  - Intended usage: send TMD code, parse with ANTLR, build a machine and return analysis or the first step/transitions. Hook up `main.js` logic here.

---

## TMD (Turing Machine Descriptor)

This is the DSL used to describe Turing machines. Here is a guide:

### General Structure

The description of a Turing machine requires 7 elements:

> 1. Machine's name.
> 2. Not acceptance states.
> 3. Acceptance states.
> 4. Initial state.
> 5. Input alphabet.
> 6. Machine's alphabet.
> 7. Behaviour (Machine's delta function).

These elements must be in the given order.

The syntax of TMD is simple. Recommendation: every instruction must end with a `;`.

To simplify the explanation of the syntax, we will show special words and symbols in bold, for example: **Machine**. For words and symbols provided by the user we will show them in italic surrounded by "<>", for example: <*Your name*>. Consider spaces as shown.

<br>

### 1. Machine's name

Here you state the machine's name.

> **Machine** <*name*> **;**

<br>

### 2. Not acceptance states

Here you state the **set of not acceptance states**. The basic syntax is:

> **NAset = {** <*state name*> **} ;** 

For more states, separate the state names with commas:

> **NAset = {** <*state name*>, <*state name*>, ... **} ;**

Consider that **this set might be empty**.

<br>

### 3. Acceptance states

Here you state the **set of acceptance states**. The syntax is very similar to the previous one:

> **Aset = {** <*state name*> **} ;** 

Or

> **Aset = {** <*state name*>, <*state name*>, ... **} ;**

Consider that **a state cannot be both acceptance and not acceptance and there must be at least one acceptance state**.

<br>

### 4. Initial state

Here you state the machine's initial state.

> **Init** **=** <*state name*> **;**

Of course, **the state must exist and be specified previously**.

<br>

### 5. Input alphabet

Here you state **the alphabet (the set of symbols) that the machine is expected to read**. The syntax is similar to the one for the states, the only difference is that here are symbols, **thus only individual characters must be given and not strings, which must be written surrounded by double quotes**.

> **INalphabet = {** **"**<*symbol*>**"** **} ;** 

Or

> **INalphabet = {** **"**<*symbol*>**"**, **"**<*symbol*>**"**, ... **} ;**

By default, the symbol ***"space"*** is used to represent empty tiles in the input. **Thus don't use this symbol**. 

<br>

### 6. Machine's alphabet

Here you state **the alphabet containing auxiliary symbols for the machine to use during simulation**. The syntax is similar to the previous one:

> **Malphabet = {** **"**<*symbol*>**"** **} ;** 

Or

> **Malphabet = {** **"**<*symbol*>**"**, **"**<*symbol*>**"**, ... **} ;**

<br>

### 7. Behaviour

Here you state the **behaviour of the machine, i.e., what the machine should do in each possible case**. As the simulated machine is of the standard model, it is enough to give a partial function for the machine. **This means that essentially an empty behaviour is accepted**. We separate the syntax structure a little bit to make it clearer:

**Behaviour** **= { (** <*behaviour rule*> **) } ;**

A ***behaviour rule*** consists of two parts:

> **(** <*possibility*> **:** <*instruction*> **)**

***possibility*** is one possible pair (state, symbol) that can be encountered. It must be written as follows:

> **(** <*state name*> **,** **"**<*symbol*>**"** **)**

***instruction*** is the action that the machine will execute when it encounters ***possibility***. Its syntax:

> **(** <*next state*> **,** **"**<*symbol to write*>**"**, <*displacement*> **)**

Consider that ***symbol*** and ***symbol to write*** can be the special symbol ***"space"***.

***displacement*** indicates where the machine should go after processing that ***possibility***. The user must provide **only one** of the following words:

1. **LEFT**
2. **RIGHT**
3. **STAY**

Of course, the user can provide more rules in the same way used before:

> **Behaviour** **= { (** <*behaviour rule*>, <*behaviour rule*>, ... **) } ;** 

<br>

For the behaviour to be well defined it is required that:

1. **The states exist and were previously specified**.
2. **The symbols exist and were previously specified**.
3. **There is one and only one pair** (***possibility***, ***instruction***) **or none for each** ***possibility***.

<br>

## Example

```
Machine demo;
NAset = {q0} ;
Aset = {q1} ;
Init = q0 ;
INalphabet = {"0", "1"} ;
Malphabet = {} ;
Behaviour = { (q0, "0") : (q1, "1", RIGHT) } ;
```
