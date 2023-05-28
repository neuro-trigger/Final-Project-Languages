// jshint ignore: start
import antlr4 from 'antlr4';
import tmdListener from './tmdListener.js';
import tmdVisitor from './tmdVisitor.js';

const serializedATN = [4,1,22,138,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,
0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,41,8,2,1,2,1,2,
5,2,45,8,2,10,2,12,2,48,9,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,5,3,59,8,
3,10,3,12,3,62,9,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,
5,5,5,78,8,5,10,5,12,5,81,9,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,90,8,6,1,6,
1,6,5,6,94,8,6,10,6,12,6,97,9,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,106,8,7,
1,7,1,7,5,7,110,8,7,10,7,12,7,113,9,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,
9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,1,0,18,20,133,0,24,1,0,0,0,2,32,
1,0,0,0,4,36,1,0,0,0,6,52,1,0,0,0,8,66,1,0,0,0,10,71,1,0,0,0,12,85,1,0,0,
0,14,101,1,0,0,0,16,117,1,0,0,0,18,121,1,0,0,0,20,127,1,0,0,0,22,135,1,0,
0,0,24,25,3,2,1,0,25,26,3,4,2,0,26,27,3,6,3,0,27,28,3,8,4,0,28,29,3,10,5,
0,29,30,3,12,6,0,30,31,3,14,7,0,31,1,1,0,0,0,32,33,5,1,0,0,33,34,5,21,0,
0,34,35,5,2,0,0,35,3,1,0,0,0,36,37,5,3,0,0,37,38,5,4,0,0,38,40,5,5,0,0,39,
41,5,21,0,0,40,39,1,0,0,0,40,41,1,0,0,0,41,46,1,0,0,0,42,43,5,17,0,0,43,
45,5,21,0,0,44,42,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,49,
1,0,0,0,48,46,1,0,0,0,49,50,5,6,0,0,50,51,5,2,0,0,51,5,1,0,0,0,52,53,5,7,
0,0,53,54,5,4,0,0,54,55,5,5,0,0,55,60,5,21,0,0,56,57,5,17,0,0,57,59,5,21,
0,0,58,56,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,
0,62,60,1,0,0,0,63,64,5,6,0,0,64,65,5,2,0,0,65,7,1,0,0,0,66,67,5,8,0,0,67,
68,5,4,0,0,68,69,5,21,0,0,69,70,5,2,0,0,70,9,1,0,0,0,71,72,5,9,0,0,72,73,
5,4,0,0,73,74,5,5,0,0,74,79,5,22,0,0,75,76,5,17,0,0,76,78,5,22,0,0,77,75,
1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,
0,0,0,82,83,5,6,0,0,83,84,5,2,0,0,84,11,1,0,0,0,85,86,5,10,0,0,86,87,5,4,
0,0,87,89,5,5,0,0,88,90,5,22,0,0,89,88,1,0,0,0,89,90,1,0,0,0,90,95,1,0,0,
0,91,92,5,17,0,0,92,94,5,22,0,0,93,91,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,
0,95,96,1,0,0,0,96,98,1,0,0,0,97,95,1,0,0,0,98,99,5,6,0,0,99,100,5,2,0,0,
100,13,1,0,0,0,101,102,5,11,0,0,102,103,5,4,0,0,103,105,5,5,0,0,104,106,
3,16,8,0,105,104,1,0,0,0,105,106,1,0,0,0,106,111,1,0,0,0,107,108,5,17,0,
0,108,110,3,16,8,0,109,107,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,
1,0,0,0,112,114,1,0,0,0,113,111,1,0,0,0,114,115,5,6,0,0,115,116,5,2,0,0,
116,15,1,0,0,0,117,118,3,18,9,0,118,119,5,12,0,0,119,120,3,20,10,0,120,17,
1,0,0,0,121,122,5,13,0,0,122,123,5,21,0,0,123,124,5,17,0,0,124,125,5,22,
0,0,125,126,5,14,0,0,126,19,1,0,0,0,127,128,5,13,0,0,128,129,5,21,0,0,129,
130,5,17,0,0,130,131,5,22,0,0,131,132,5,17,0,0,132,133,3,22,11,0,133,134,
5,14,0,0,134,21,1,0,0,0,135,136,7,0,0,0,136,23,1,0,0,0,8,40,46,60,79,89,
95,105,111];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tmdParser extends antlr4.Parser {

    static grammarFileName = "tmd.g4";
    static literalNames = [ null, "'Machine'", "';'", "'NAset'", "'='", 
                            "'{'", "'}'", "'Aset'", "'Init'", "'INalphabet'", 
                            "'Malphabet'", "'Behaviour'", "':'", "'('", 
                            "')'", null, null, "','", "'LEFT'", "'RIGHT'", 
                            "'STAY'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "COMMENTS", 
                             "WS", "COMMA", "LEFT", "RIGHT", "STAY", "ID", 
                             "SYMBOL" ];
    static ruleNames = [ "description", "machine", "naset", "aset", "init", 
                         "inalphabet", "malphabet", "behaviour", "behaviour_rule", 
                         "curr_state", "next_state", "movement" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tmdParser.ruleNames;
        this.literalNames = tmdParser.literalNames;
        this.symbolicNames = tmdParser.symbolicNames;
    }



	description() {
	    let localctx = new DescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tmdParser.RULE_description);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.machine();
	        this.state = 25;
	        this.naset();
	        this.state = 26;
	        this.aset();
	        this.state = 27;
	        this.init();
	        this.state = 28;
	        this.inalphabet();
	        this.state = 29;
	        this.malphabet();
	        this.state = 30;
	        this.behaviour();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	machine() {
	    let localctx = new MachineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tmdParser.RULE_machine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(tmdParser.T__0);
	        this.state = 33;
	        this.match(tmdParser.ID);
	        this.state = 34;
	        this.match(tmdParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	naset() {
	    let localctx = new NasetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tmdParser.RULE_naset);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(tmdParser.T__2);
	        this.state = 37;
	        this.match(tmdParser.T__3);
	        this.state = 38;
	        this.match(tmdParser.T__4);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 39;
	            this.match(tmdParser.ID);
	        }

	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 42;
	            this.match(tmdParser.COMMA);
	            this.state = 43;
	            this.match(tmdParser.ID);
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
	        this.match(tmdParser.T__5);
	        this.state = 50;
	        this.match(tmdParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aset() {
	    let localctx = new AsetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tmdParser.RULE_aset);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(tmdParser.T__6);
	        this.state = 53;
	        this.match(tmdParser.T__3);
	        this.state = 54;
	        this.match(tmdParser.T__4);
	        this.state = 55;
	        this.match(tmdParser.ID);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 56;
	            this.match(tmdParser.COMMA);
	            this.state = 57;
	            this.match(tmdParser.ID);
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 63;
	        this.match(tmdParser.T__5);
	        this.state = 64;
	        this.match(tmdParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, tmdParser.RULE_init);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(tmdParser.T__7);
	        this.state = 67;
	        this.match(tmdParser.T__3);
	        this.state = 68;
	        this.match(tmdParser.ID);
	        this.state = 69;
	        this.match(tmdParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inalphabet() {
	    let localctx = new InalphabetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tmdParser.RULE_inalphabet);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(tmdParser.T__8);
	        this.state = 72;
	        this.match(tmdParser.T__3);
	        this.state = 73;
	        this.match(tmdParser.T__4);
	        this.state = 74;
	        this.match(tmdParser.SYMBOL);
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 75;
	            this.match(tmdParser.COMMA);
	            this.state = 76;
	            this.match(tmdParser.SYMBOL);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 82;
	        this.match(tmdParser.T__5);
	        this.state = 83;
	        this.match(tmdParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	malphabet() {
	    let localctx = new MalphabetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, tmdParser.RULE_malphabet);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(tmdParser.T__9);
	        this.state = 86;
	        this.match(tmdParser.T__3);
	        this.state = 87;
	        this.match(tmdParser.T__4);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 88;
	            this.match(tmdParser.SYMBOL);
	        }

	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 91;
	            this.match(tmdParser.COMMA);
	            this.state = 92;
	            this.match(tmdParser.SYMBOL);
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 98;
	        this.match(tmdParser.T__5);
	        this.state = 99;
	        this.match(tmdParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	behaviour() {
	    let localctx = new BehaviourContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, tmdParser.RULE_behaviour);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(tmdParser.T__10);
	        this.state = 102;
	        this.match(tmdParser.T__3);
	        this.state = 103;
	        this.match(tmdParser.T__4);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 104;
	            this.behaviour_rule();
	        }

	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 107;
	            this.match(tmdParser.COMMA);
	            this.state = 108;
	            this.behaviour_rule();
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 114;
	        this.match(tmdParser.T__5);
	        this.state = 115;
	        this.match(tmdParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	behaviour_rule() {
	    let localctx = new Behaviour_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, tmdParser.RULE_behaviour_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.curr_state();
	        this.state = 118;
	        this.match(tmdParser.T__11);
	        this.state = 119;
	        this.next_state();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	curr_state() {
	    let localctx = new Curr_stateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, tmdParser.RULE_curr_state);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(tmdParser.T__12);
	        this.state = 122;
	        this.match(tmdParser.ID);
	        this.state = 123;
	        this.match(tmdParser.COMMA);
	        this.state = 124;
	        this.match(tmdParser.SYMBOL);
	        this.state = 125;
	        this.match(tmdParser.T__13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	next_state() {
	    let localctx = new Next_stateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, tmdParser.RULE_next_state);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(tmdParser.T__12);
	        this.state = 128;
	        this.match(tmdParser.ID);
	        this.state = 129;
	        this.match(tmdParser.COMMA);
	        this.state = 130;
	        this.match(tmdParser.SYMBOL);
	        this.state = 131;
	        this.match(tmdParser.COMMA);
	        this.state = 132;
	        this.movement();
	        this.state = 133;
	        this.match(tmdParser.T__13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	movement() {
	    let localctx = new MovementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, tmdParser.RULE_movement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1835008) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

tmdParser.EOF = antlr4.Token.EOF;
tmdParser.T__0 = 1;
tmdParser.T__1 = 2;
tmdParser.T__2 = 3;
tmdParser.T__3 = 4;
tmdParser.T__4 = 5;
tmdParser.T__5 = 6;
tmdParser.T__6 = 7;
tmdParser.T__7 = 8;
tmdParser.T__8 = 9;
tmdParser.T__9 = 10;
tmdParser.T__10 = 11;
tmdParser.T__11 = 12;
tmdParser.T__12 = 13;
tmdParser.T__13 = 14;
tmdParser.COMMENTS = 15;
tmdParser.WS = 16;
tmdParser.COMMA = 17;
tmdParser.LEFT = 18;
tmdParser.RIGHT = 19;
tmdParser.STAY = 20;
tmdParser.ID = 21;
tmdParser.SYMBOL = 22;

tmdParser.RULE_description = 0;
tmdParser.RULE_machine = 1;
tmdParser.RULE_naset = 2;
tmdParser.RULE_aset = 3;
tmdParser.RULE_init = 4;
tmdParser.RULE_inalphabet = 5;
tmdParser.RULE_malphabet = 6;
tmdParser.RULE_behaviour = 7;
tmdParser.RULE_behaviour_rule = 8;
tmdParser.RULE_curr_state = 9;
tmdParser.RULE_next_state = 10;
tmdParser.RULE_movement = 11;

class DescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_description;
    }

	machine() {
	    return this.getTypedRuleContext(MachineContext,0);
	};

	naset() {
	    return this.getTypedRuleContext(NasetContext,0);
	};

	aset() {
	    return this.getTypedRuleContext(AsetContext,0);
	};

	init() {
	    return this.getTypedRuleContext(InitContext,0);
	};

	inalphabet() {
	    return this.getTypedRuleContext(InalphabetContext,0);
	};

	malphabet() {
	    return this.getTypedRuleContext(MalphabetContext,0);
	};

	behaviour() {
	    return this.getTypedRuleContext(BehaviourContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitDescription(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitDescription(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MachineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_machine;
    }

	ID() {
	    return this.getToken(tmdParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterMachine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitMachine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitMachine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NasetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_naset;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tmdParser.ID);
	    } else {
	        return this.getToken(tmdParser.ID, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tmdParser.COMMA);
	    } else {
	        return this.getToken(tmdParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterNaset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitNaset(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitNaset(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_aset;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tmdParser.ID);
	    } else {
	        return this.getToken(tmdParser.ID, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tmdParser.COMMA);
	    } else {
	        return this.getToken(tmdParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterAset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitAset(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitAset(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_init;
    }

	ID() {
	    return this.getToken(tmdParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitInit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InalphabetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_inalphabet;
    }

	SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tmdParser.SYMBOL);
	    } else {
	        return this.getToken(tmdParser.SYMBOL, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tmdParser.COMMA);
	    } else {
	        return this.getToken(tmdParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterInalphabet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitInalphabet(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitInalphabet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MalphabetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_malphabet;
    }

	SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tmdParser.SYMBOL);
	    } else {
	        return this.getToken(tmdParser.SYMBOL, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tmdParser.COMMA);
	    } else {
	        return this.getToken(tmdParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterMalphabet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitMalphabet(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitMalphabet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BehaviourContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_behaviour;
    }

	behaviour_rule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Behaviour_ruleContext);
	    } else {
	        return this.getTypedRuleContext(Behaviour_ruleContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tmdParser.COMMA);
	    } else {
	        return this.getToken(tmdParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterBehaviour(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitBehaviour(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitBehaviour(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Behaviour_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_behaviour_rule;
    }

	curr_state() {
	    return this.getTypedRuleContext(Curr_stateContext,0);
	};

	next_state() {
	    return this.getTypedRuleContext(Next_stateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterBehaviour_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitBehaviour_rule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitBehaviour_rule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Curr_stateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_curr_state;
    }

	ID() {
	    return this.getToken(tmdParser.ID, 0);
	};

	COMMA() {
	    return this.getToken(tmdParser.COMMA, 0);
	};

	SYMBOL() {
	    return this.getToken(tmdParser.SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterCurr_state(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitCurr_state(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitCurr_state(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Next_stateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_next_state;
    }

	ID() {
	    return this.getToken(tmdParser.ID, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tmdParser.COMMA);
	    } else {
	        return this.getToken(tmdParser.COMMA, i);
	    }
	};


	SYMBOL() {
	    return this.getToken(tmdParser.SYMBOL, 0);
	};

	movement() {
	    return this.getTypedRuleContext(MovementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterNext_state(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitNext_state(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitNext_state(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MovementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tmdParser.RULE_movement;
    }

	LEFT() {
	    return this.getToken(tmdParser.LEFT, 0);
	};

	RIGHT() {
	    return this.getToken(tmdParser.RIGHT, 0);
	};

	STAY() {
	    return this.getToken(tmdParser.STAY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.enterMovement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tmdListener ) {
	        listener.exitMovement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tmdVisitor ) {
	        return visitor.visitMovement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




tmdParser.DescriptionContext = DescriptionContext; 
tmdParser.MachineContext = MachineContext; 
tmdParser.NasetContext = NasetContext; 
tmdParser.AsetContext = AsetContext; 
tmdParser.InitContext = InitContext; 
tmdParser.InalphabetContext = InalphabetContext; 
tmdParser.MalphabetContext = MalphabetContext; 
tmdParser.BehaviourContext = BehaviourContext; 
tmdParser.Behaviour_ruleContext = Behaviour_ruleContext; 
tmdParser.Curr_stateContext = Curr_stateContext; 
tmdParser.Next_stateContext = Next_stateContext; 
tmdParser.MovementContext = MovementContext; 
