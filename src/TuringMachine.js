export default class TuringMachine {
    constructor(initState, behavior, inAlphabet, mAlphabet, aSet, nSet) {
        this.state = initState;
        this.position = -1; // Position on the tape.
        this.tape = []; 
        this.history = []; // Stack (or array simulating a stack).
        this.symbols = symbols; // Stored as a set of symbols.
        this.aSet = aSet; // Set of acceptation states.
        this.nSet = nSet; // Set of not-acceptation states.
        this.behavior = behavior; // Stored as a map of maps state->symbol->instruction.
        this.nextInstruction = {nextState: "", writeSymbol : "", displacement: 0};
        this.terminated = false;
    }

    nextStep() {
        // First stores the contrary instruction in the history.
        let prevInstruction = {nextState: this.state, writeSymbol: this.tape[this.position], displacement: -this.nextInstruction.displacement}; 
        this.history.push(prevInstruction);

        // Writes the symbol on the tape.
        this.tape[this.position] = this.nextInstruction.writeSymbol;

        // Makes the displacement and updates the tape if necessary (if out of bounds).
        this.position += this.nextInstruction.displacement;
        if(this.position == -1) {
            this.tape.unshift("");
            ++this.position;    
        }
        else if(this.position == this.tape.length) {
            this.tape.push("");
        }
        // Changes of state.
        this.state = this.nextInstruction.nextState;

        if(this.aSet.has(this.state)) {
            this.terminated = true;
            return;
        }

        // Updates the next instruction to execute.
        this.nextInstruction = this.behavior.get(this.state).get(this.tape[this.position]);
    }

    prevStep() {
        let prevInstruction = history.pop();

        // Here makes the displacement at first and then writes.
        this.position += this.prevInstruction.displacement;
        this.state = this.prevInstruction.nextState;
        this.tape[this.position] = this.prevInstruction.writeSymbol;
    }

    loadMachine(newInitState, newBehavior) {
        this.state = newInitState;
        this.behavior = newBehavior;
        this.position = -1;
        this.history = [];
    }

    loadInput(inputString) {
        this.tape = inputString.split("");
        this.position = 0;
        this.history = [];
        this.nextInstruction = behavior.get(this.state).get(this.tape[0]);    
    }

}