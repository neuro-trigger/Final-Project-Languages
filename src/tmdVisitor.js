// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by tmdParser.

export default class tmdVisitor extends antlr4.tree.ParseTreeVisitor {
	constructor() {
		super();

		this.initState = null;
		this.aSet = new Set();
		this.nSet = new Set();
		this.inAlphabet = new Set();
		this.maAlphabet = new Set();
		this.behavior = new Map();
	}

	// Visit a parse tree produced by tmdParser#description.
	visitDescription(ctx) {
		this.visitChildren(ctx);
	}


	// Does nothing.
	visitMachine(ctx) {
	}


	// Stores the no-acceptance states.
	visitNaset(ctx) {
		let i = 0;
		while(ctx.ID(i) != null) {
			this.nSet.add(ctx.ID(i).getText());
		}
	}


	// Stores the acceptance states.
	visitAset(ctx) {
		let i = 0;
		while(ctx.ID(i) != null) {
			this.aSet.add(ctx.ID(i).getText());
		}
	}


	// Stores the initial state.
	visitInit(ctx) {
		let state = ctx.ID().getText();
		/* The state was not previously included in the machine's definition. */
		if(!this.aSet.has(state) && !this.nSet.has(state)) {
			console.log("Wrong defined behavior (State does not exist): The state " + currState + " is not in the definition.");
			return;
		}
		this.initState = state; 
	}


	// Stores the input alphabet.
	visitInalphabet(ctx) {
		let i = 0;
		while(ctx.SYMBOL(i) != null) {
			this.inAlphabet.add(ctx.SYMBOL(i).getText().charAt(1));
		}
	}


	// Stores the machine alphabet.
	visitMalphabet(ctx) {
		let i = 0;
		while(ctx.SYMBOL(i) != null) {
			this.maAlphabet.add(ctx.SYMBOL(i).getText().charAt(1));
		}
	}


	// Processes each behavior rule (instruction).
	visitBehaviour(ctx) {
	  return this.visitChildren(ctx);
	}


	// Processes the behavior rule and stores it.
	visitBehaviour_rule(ctx) {
		let currState = ctx.curr_state().ID().getText();
		/* The state was not previously included in the machine's definition. */
		if(!this.aSet.has(currState) && !this.nSet.has(currState)) {
			console.log("Wrong defined behavior (State does not exist): The state " + currState + " is not in the definition.");
			return;
		}

		/* The symbol was not previously included in the machine's definition. */
		let currSymbol = ctx.curr_state().SYMBOL().getText().charAt(1);
		if(!this.inAlphabet.has(currSymbol) && !this.maAlphabet.has(currSymbol)) {
			console.log("Wrong defined behavior (Invalid symbol): The symbol " + currSymbol + "is not in the definition.");
			return;
		}

		if(this.behavior.has(currState)) {
			if(this.behavior.get(currState).has(currSymbol)) {
				/* There are various possibilities for one pair (state, symbol) 
					thus making the machine undeterministic, which is not allowed. */
				console.log("Wrong defined behavior (Undeterministic model): There are more than 1 instructions mapped to (" 
				+ currState + ", " + currSymbol + ").");

				return;
			}
		}
		else {
			this.behavior.set(currState, new Map());
		}

		let ns = ctx.next_state().ID().getText();
		let ws = ctx.next_state().SYMBOL().getText().charAt(1);
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

		let instruction = {nextState: ns, writeSymbol : ws, displacement: mo};
		this.behavior.get(currState).set(currSymbol, instruction);
	}
}