// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by tmdParser.

export default class tmdVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by tmdParser#description.
	visitDescription(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#machine.
	visitMachine(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#naset.
	visitNaset(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#aset.
	visitAset(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#init.
	visitInit(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#inalphabet.
	visitInalphabet(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#malphabet.
	visitMalphabet(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#behaviour.
	visitBehaviour(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#behaviour_rule.
	visitBehaviour_rule(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#curr_state.
	visitCurr_state(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#next_state.
	visitNext_state(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tmdParser#movement.
	visitMovement(ctx) {
	  return this.visitChildren(ctx);
	}



}