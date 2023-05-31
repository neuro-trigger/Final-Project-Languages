// jshint ignore: start
import antlr4 from 'antlr4';

/* This class processes the code input and stores all the important 
	information about the Turing's machine and is required to load 
	(construct) the machine. Each time a new machine wants to be 
	loaded, it is necessary to instantiate a new tmdVisitor object
	and execute the analysis from the first context description(). */
export default class tmdVisitor extends antlr4.tree.ParseTreeVisitor {
	constructor() {
		super();

		this.initState = null;
		this.aSet = new Set();
		this.nSet = new Set();
		this.inAlphabet = new Set();
		this.mAlphabet = new Set();
		this.behavior = new Map();
		this.error = false; // If there's an error then it cannot be accepted.
	}

	// Visit a parse tree produced by tmdParser#description.
	visitDescription(ctx) {
		console.log("DESCRIPTION");
		this.visitChildren(ctx);
	}


	// Does nothing.
	visitMachine(ctx) {
	}


	// Stores the no-acceptance states.
	visitNaset(ctx) {
		console.log("NASET");
		let i = 0;
		while(ctx.ID(i) != null) {
			this.nSet.add(ctx.ID(i).getText());
			++i;
		}
	}


	// Stores the acceptance states.
	visitAset(ctx) {
		console.log("ASET");
		/* There must be at least one acceptance state. */
		if(ctx.ID(0).getText() == "<missing undefined>") {
			console.log("Wrong defined Aset (No acceptance state): There's no acceptance state defined.");
			this.error = true;
			return;
		}

		let i = 0;
		while(ctx.ID(i) != null) {
			/* The state was previously defined as an no-acceptance state. */
			if(this.nSet.has(ctx.ID(i).getText())) {
				console.log("Wrong defined Aset (Ambiguous state): The state " + ctx.ID(i).getText() + " is already defined as a no-acceptance state.");
				this.error = true;
			}
			else {
				this.aSet.add(ctx.ID(i).getText());
			}
			++i;
		}
	}


	// Stores the initial state.
	visitInit(ctx) {
		console.log("INIT");
		let state = ctx.ID().getText();
		/* The state was not previously included in the machine's definition. */
		if(!this.aSet.has(state) && !this.nSet.has(state)) {
			console.log("Wrong defined Init (Initial state does not exist): The state " + state + " is not in the definition.");
			this.error = true;
		}
		else {
			this.initState = state; 
		}
	}


	// Stores the input alphabet.
	visitInalphabet(ctx) {
		console.log("INALPHABET");
		let i = 0;
		while(ctx.SYMBOL(i) != null) {
			this.inAlphabet.add(ctx.SYMBOL(i).getText().charAt(1));
			++i;
		}
	}


	// Stores the machine alphabet.
	visitMalphabet(ctx) {
		console.log("MALPHABET");
		let i = 0;
		while(ctx.SYMBOL(i) != null) {
			this.mAlphabet.add(ctx.SYMBOL(i).getText().charAt(1));
			++i;
		}
	}


	// Processes each behavior rule (instruction).
	visitBehaviour(ctx) {
		console.log("BEHAVIOR");
	  return this.visitChildren(ctx);
	}


	// Processes the behavior rule and stores it.
	visitBehaviour_rule(ctx) {
		console.log("BEHAVIOR_RULE");
		let currState = ctx.curr_state().ID().getText();
		/* The state was not previously included in the machine's definition. */
		this.checkValidState(currState);

		let currSymbol = ctx.curr_state().SYMBOL().getText().charAt(1);
		/* The symbol was not previously included in the machine's definition. */
		this.checkValidSymbol(currSymbol);	

		if(this.behavior.has(currState)) {
			if(this.behavior.get(currState).has(currSymbol)) {
				/* There are various possibilities for one pair (state, symbol) 
					thus making the machine undeterministic, which is not allowed. */
				console.log("Wrong defined behavior (Undeterministic model): There are more than 1 instructions mapped to (" 
				+ currState + ", " + currSymbol + ").");
				this.error = true;
			}
		}
		else {
			this.behavior.set(currState, new Map());
		}

		let ns = ctx.next_state().ID().getText();
		this.checkValidState(ns);
		let ws = ctx.next_state().SYMBOL().getText().charAt(1);
		this.checkValidSymbol(ws);
		let mo = ctx.next_state().movement().getText();

		switch(mo) {
			case "LEFT":
				mo = -1;
				break;
					
			case "RIGHT":
				mo = 1;
				break;

			default:
				mo = 0;
		}

		if(!this.error) {
			let instruction = {nextState: ns, writeSymbol : ws, displacement: mo};
			this.behavior.get(currState).set(currSymbol, instruction);
		}
	}

	checkValidState(state) {
		if(!this.aSet.has(state) && !this.nSet.has(state)) {
			console.log("Wrong defined behavior (State does not exist): The state " + state + " is not in the definition.");
			this.error = true;
		}
	}

	checkValidSymbol(symbol) {
		if(!this.inAlphabet.has(symbol) && !this.mAlphabet.has(symbol)) {
			console.log("Wrong defined behavior (Invalid symbol): The symbol \"" + symbol + "\" is not in the definition.");
			this.error = true;
		}
	}
}