# Turing Machine Simulator

Turing Machine Simulator is a web application that simulates standard deterministic Turing's machines.  

For it is necessary to code (or describe) the Turing's machine using a simple and direct DMS (Domain-Specific Language) so the application can identify the machine and simulate it correctly.

## TMD (Turing's Machine Descriptor)

This is the DMS used to code the Turing's machines. Here is a guide to do this correctly:

### General Structure

The description of a Turing's machine requires 7 elements:

> 1. Machine's name.
> 2. Not acceptance states.
> 3. Acceptance states.
> 4. Initial state.
> 5. Input alphabet.
> 6. Machine's alphabet.
> 7. Behavior (Machine's delta function).

These elements must be in the given order.

The syntax of TMD is pretty simple as you will see. As a preliminar recommendation, **Every instruction must end with a ";"**.

To simplify the explanation of the syntax, we will show especial words and symbols in bold, for example: **Machine**. For words and symbols provided by the user we will show them in italic surrounded by "<>", for example: <*Your name*>. **Consider also the spaces as they are showed**.

<br>

### 1. Machine's name

Here you state the Machine's name.

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

Consider that **a state cannot be of both acceptance and not acceptance and there must be at least one acceptance state**.

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

<br>

By default, the symbol ***"space"*** is used to represent empty tiles in the input. **Thus don't use this symbol**. 

<br>

### 6. Machine's alphabet

Here you state **the alphabet containing auxiliar symbols for the machine to use during simulation**. The syntax is similar to the previous one:

> **Malphabet = {** **"**<*symbol*>**"** **} ;** 

Or

> **Malphabet = {** **"**<*symbol*>**"**, **"**<*symbol*>**"**, ... **} ;**:w
> 

<br>

### 7. Behavior

Here you state the **behavior of the machine, i.e, what the machine should do in each possible case**. As the simulated machine is of the standard model, it is enough to give a partial function for the machine. **This means that essentially an empty behavior is accepted**. We separate the syntax structure a little bit to make it clearer:

**Behavior** **= { (** <*behavior rule*> **) } ;**

A ***behavior rule*** consits of two parts:

> **(** <*possibility*> **:** <*instruction*> **)**

***possibility*** is one possible pair (state, symbol) that can be encountered. It must be written as follows:

> **(** <*state name*> **,** **"**<*symbol*>**"** **)**

***instruction*** is the action that the machine will execute when it encounters ***possibility***. It's syntax:

> **(** <*next state*> **,** **"**<*symbol to write*>**"**, <*displacement*> **)**

Consider that ***symbol*** and ***symbol to write*** can be the special symbol ***"space"***.

***displacement*** indicates where the machine should go after processing that ***possibility***. The user must provide **only one** of the following words:

1. **LEFT**
2. **RIGHT**
3. **STAY**

Of course, the user can provide more rules in the same way used before:

> **Behavior** **= { (** <*behavior rule*>, <*behavior rule*>, ... **) } ;** 

<br>

For the behavior to be well defined it is required that:

1. **The states exist and were previously specified**.
2. **The symbols exist and were previously specified**.
3. **There is one and only one pair** (***possibility***, ***instruction***) **or none for each** ***possibility***.
   
<br>
