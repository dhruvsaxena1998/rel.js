// Generated from ./REL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RELListener from './RELListener.js';
import RELVisitor from './RELVisitor.js';

const serializedATN = [4,1,55,282,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,55,8,1,10,1,
12,1,58,9,1,1,1,1,1,1,1,1,1,3,1,64,8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,72,8,
2,10,2,12,2,75,9,2,1,3,1,3,1,3,1,3,1,3,1,3,5,3,83,8,3,10,3,12,3,86,9,3,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,103,8,4,10,
4,12,4,106,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,5,5,141,8,5,10,5,12,5,144,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,
155,8,6,10,6,12,6,158,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,5,7,172,8,7,10,7,12,7,175,9,7,1,8,1,8,1,8,1,8,1,8,3,8,182,8,8,1,9,1,9,
1,9,1,9,1,9,1,9,5,9,190,8,9,10,9,12,9,193,9,9,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,208,8,10,10,10,12,10,211,9,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,220,8,10,1,11,1,11,1,12,1,12,1,12,
1,13,1,13,1,13,5,13,230,8,13,10,13,12,13,233,9,13,1,14,1,14,1,14,1,14,1,
14,3,14,240,8,14,1,15,1,15,1,16,1,16,1,16,1,16,5,16,248,8,16,10,16,12,16,
251,9,16,3,16,253,8,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,5,17,262,8,17,
10,17,12,17,265,9,17,3,17,267,8,17,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,
20,1,20,1,20,1,20,3,20,280,8,20,1,20,0,7,4,6,8,10,12,14,18,21,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,2,1,0,2,8,1,0,9,10,304,
0,42,1,0,0,0,2,63,1,0,0,0,4,65,1,0,0,0,6,76,1,0,0,0,8,87,1,0,0,0,10,107,
1,0,0,0,12,145,1,0,0,0,14,159,1,0,0,0,16,181,1,0,0,0,18,183,1,0,0,0,20,219,
1,0,0,0,22,221,1,0,0,0,24,223,1,0,0,0,26,226,1,0,0,0,28,239,1,0,0,0,30,241,
1,0,0,0,32,243,1,0,0,0,34,256,1,0,0,0,36,270,1,0,0,0,38,272,1,0,0,0,40,279,
1,0,0,0,42,43,3,2,1,0,43,44,5,0,0,1,44,1,1,0,0,0,45,46,5,13,0,0,46,47,3,
4,2,0,47,48,5,14,0,0,48,56,3,2,1,0,49,50,5,16,0,0,50,51,3,4,2,0,51,52,5,
14,0,0,52,53,3,2,1,0,53,55,1,0,0,0,54,49,1,0,0,0,55,58,1,0,0,0,56,54,1,0,
0,0,56,57,1,0,0,0,57,59,1,0,0,0,58,56,1,0,0,0,59,60,5,15,0,0,60,61,3,2,1,
0,61,64,1,0,0,0,62,64,3,4,2,0,63,45,1,0,0,0,63,62,1,0,0,0,64,3,1,0,0,0,65,
66,6,2,-1,0,66,67,3,6,3,0,67,73,1,0,0,0,68,69,10,2,0,0,69,70,5,17,0,0,70,
72,3,6,3,0,71,68,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,5,
1,0,0,0,75,73,1,0,0,0,76,77,6,3,-1,0,77,78,3,8,4,0,78,84,1,0,0,0,79,80,10,
2,0,0,80,81,5,18,0,0,81,83,3,8,4,0,82,79,1,0,0,0,83,86,1,0,0,0,84,82,1,0,
0,0,84,85,1,0,0,0,85,7,1,0,0,0,86,84,1,0,0,0,87,88,6,4,-1,0,88,89,3,10,5,
0,89,104,1,0,0,0,90,91,10,5,0,0,91,92,5,19,0,0,92,103,3,10,5,0,93,94,10,
4,0,0,94,95,5,21,0,0,95,103,3,10,5,0,96,97,10,3,0,0,97,98,5,20,0,0,98,103,
3,10,5,0,99,100,10,2,0,0,100,101,5,22,0,0,101,103,3,10,5,0,102,90,1,0,0,
0,102,93,1,0,0,0,102,96,1,0,0,0,102,99,1,0,0,0,103,106,1,0,0,0,104,102,1,
0,0,0,104,105,1,0,0,0,105,9,1,0,0,0,106,104,1,0,0,0,107,108,6,5,-1,0,108,
109,3,12,6,0,109,142,1,0,0,0,110,111,10,10,0,0,111,112,5,23,0,0,112,141,
3,12,6,0,113,114,10,9,0,0,114,115,5,24,0,0,115,141,3,12,6,0,116,117,10,8,
0,0,117,118,5,25,0,0,118,141,3,12,6,0,119,120,10,7,0,0,120,121,5,26,0,0,
121,141,3,12,6,0,122,123,10,6,0,0,123,124,5,27,0,0,124,125,3,12,6,0,125,
126,5,18,0,0,126,127,3,12,6,0,127,141,1,0,0,0,128,129,10,5,0,0,129,130,5,
28,0,0,130,141,3,12,6,0,131,132,10,4,0,0,132,133,5,29,0,0,133,141,3,12,6,
0,134,135,10,3,0,0,135,136,5,30,0,0,136,141,3,12,6,0,137,138,10,2,0,0,138,
139,5,31,0,0,139,141,3,12,6,0,140,110,1,0,0,0,140,113,1,0,0,0,140,116,1,
0,0,0,140,119,1,0,0,0,140,122,1,0,0,0,140,128,1,0,0,0,140,131,1,0,0,0,140,
134,1,0,0,0,140,137,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,
0,0,143,11,1,0,0,0,144,142,1,0,0,0,145,146,6,6,-1,0,146,147,3,14,7,0,147,
156,1,0,0,0,148,149,10,3,0,0,149,150,5,34,0,0,150,155,3,14,7,0,151,152,10,
2,0,0,152,153,5,35,0,0,153,155,3,14,7,0,154,148,1,0,0,0,154,151,1,0,0,0,
155,158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,13,1,0,0,0,158,156,1,
0,0,0,159,160,6,7,-1,0,160,161,3,16,8,0,161,173,1,0,0,0,162,163,10,4,0,0,
163,164,5,36,0,0,164,172,3,16,8,0,165,166,10,3,0,0,166,167,5,37,0,0,167,
172,3,16,8,0,168,169,10,2,0,0,169,170,5,38,0,0,170,172,3,16,8,0,171,162,
1,0,0,0,171,165,1,0,0,0,171,168,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,
173,174,1,0,0,0,174,15,1,0,0,0,175,173,1,0,0,0,176,177,5,32,0,0,177,182,
3,16,8,0,178,179,5,33,0,0,179,182,3,16,8,0,180,182,3,18,9,0,181,176,1,0,
0,0,181,178,1,0,0,0,181,180,1,0,0,0,182,17,1,0,0,0,183,184,6,9,-1,0,184,
185,3,20,10,0,185,191,1,0,0,0,186,187,10,2,0,0,187,188,5,40,0,0,188,190,
5,51,0,0,189,186,1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,
192,19,1,0,0,0,193,191,1,0,0,0,194,220,3,24,12,0,195,220,3,22,11,0,196,220,
3,28,14,0,197,220,3,34,17,0,198,199,5,13,0,0,199,200,3,4,2,0,200,201,5,14,
0,0,201,209,3,2,1,0,202,203,5,16,0,0,203,204,3,4,2,0,204,205,5,14,0,0,205,
206,3,2,1,0,206,208,1,0,0,0,207,202,1,0,0,0,208,211,1,0,0,0,209,207,1,0,
0,0,209,210,1,0,0,0,210,212,1,0,0,0,211,209,1,0,0,0,212,213,5,15,0,0,213,
214,3,2,1,0,214,220,1,0,0,0,215,216,5,42,0,0,216,217,3,2,1,0,217,218,5,43,
0,0,218,220,1,0,0,0,219,194,1,0,0,0,219,195,1,0,0,0,219,196,1,0,0,0,219,
197,1,0,0,0,219,198,1,0,0,0,219,215,1,0,0,0,220,21,1,0,0,0,221,222,5,51,
0,0,222,23,1,0,0,0,223,224,5,1,0,0,224,225,3,26,13,0,225,25,1,0,0,0,226,
231,5,51,0,0,227,228,5,40,0,0,228,230,5,51,0,0,229,227,1,0,0,0,230,233,1,
0,0,0,231,229,1,0,0,0,231,232,1,0,0,0,232,27,1,0,0,0,233,231,1,0,0,0,234,
240,5,48,0,0,235,240,5,49,0,0,236,240,5,50,0,0,237,240,3,32,16,0,238,240,
3,30,15,0,239,234,1,0,0,0,239,235,1,0,0,0,239,236,1,0,0,0,239,237,1,0,0,
0,239,238,1,0,0,0,240,29,1,0,0,0,241,242,5,52,0,0,242,31,1,0,0,0,243,252,
5,44,0,0,244,249,3,2,1,0,245,246,5,39,0,0,246,248,3,2,1,0,247,245,1,0,0,
0,248,251,1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,253,1,0,0,0,251,249,
1,0,0,0,252,244,1,0,0,0,252,253,1,0,0,0,253,254,1,0,0,0,254,255,5,45,0,0,
255,33,1,0,0,0,256,257,3,40,20,0,257,266,5,42,0,0,258,263,3,2,1,0,259,260,
5,39,0,0,260,262,3,2,1,0,261,259,1,0,0,0,262,265,1,0,0,0,263,261,1,0,0,0,
263,264,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,266,258,1,0,0,0,266,267,
1,0,0,0,267,268,1,0,0,0,268,269,5,43,0,0,269,35,1,0,0,0,270,271,7,0,0,0,
271,37,1,0,0,0,272,273,7,1,0,0,273,39,1,0,0,0,274,280,5,11,0,0,275,280,5,
12,0,0,276,280,3,38,19,0,277,280,3,36,18,0,278,280,5,51,0,0,279,274,1,0,
0,0,279,275,1,0,0,0,279,276,1,0,0,0,279,277,1,0,0,0,279,278,1,0,0,0,280,
41,1,0,0,0,23,56,63,73,84,102,104,140,142,154,156,171,173,181,191,209,219,
231,239,249,252,263,266,279];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RELParser extends antlr4.Parser {

    static grammarFileName = "REL.g4";
    static literalNames = [ null, "'@'", "'merge'", "'some'", "'all'", "'none'", 
                            "'map'", "'filter'", "'reduce'", "'cat'", "'substr'", 
                            "'max'", "'min'", "'if'", "'then'", "'else'", 
                            "'elseif'", "'or'", "'and'", null, null, null, 
                            null, null, null, null, null, "'between'", null, 
                            "'not in'", "'starts with'", "'ends with'", 
                            null, "'!!'", null, null, null, null, null, 
                            "','", "'.'", "';'", "'('", "')'", "'['", "']'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "IF", "THEN", 
                             "ELSE", "ELSEIF", "OR", "AND", "EQ", "NEQ", 
                             "SEQ", "SNEQ", "GT", "GTE", "LT", "LTE", "BETWEEN", 
                             "IN", "NOT_IN", "STARTS_WITH", "ENDS_WITH", 
                             "NOT", "DOUBLE_NOT", "PLUS", "MINUS", "MULTIPLY", 
                             "DIVIDE", "MODULO", "COMMA", "DOT", "SEMICOLON", 
                             "LPAREN", "RPAREN", "LBRACKET", "RBRACKET", 
                             "LBRACE", "RBRACE", "NUMBER", "STRING", "BOOLEAN", 
                             "IDENTIFIER", "PLACEHOLDER", "WS", "LINE_COMMENT", 
                             "BLOCK_COMMENT" ];
    static ruleNames = [ "expression", "conditionalExpression", "logicalOrExpression", 
                         "logicalAndExpression", "equalityExpression", "relationalExpression", 
                         "additiveExpression", "multiplicativeExpression", 
                         "unaryExpression", "postfixExpression", "primaryExpression", 
                         "bareIdentifier", "variable", "variableName", "literal", 
                         "placeholder", "array", "functionCall", "arrayMethods", 
                         "stringMethods", "functionName" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RELParser.ruleNames;
        this.literalNames = RELParser.literalNames;
        this.symbolicNames = RELParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.logicalOrExpression_sempred(localctx, predIndex);
    	case 3:
    	    		return this.logicalAndExpression_sempred(localctx, predIndex);
    	case 4:
    	    		return this.equalityExpression_sempred(localctx, predIndex);
    	case 5:
    	    		return this.relationalExpression_sempred(localctx, predIndex);
    	case 6:
    	    		return this.additiveExpression_sempred(localctx, predIndex);
    	case 7:
    	    		return this.multiplicativeExpression_sempred(localctx, predIndex);
    	case 9:
    	    		return this.postfixExpression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    logicalOrExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    logicalAndExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    equalityExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 4);
    		case 4:
    			return this.precpred(this._ctx, 3);
    		case 5:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    relationalExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 6:
    			return this.precpred(this._ctx, 10);
    		case 7:
    			return this.precpred(this._ctx, 9);
    		case 8:
    			return this.precpred(this._ctx, 8);
    		case 9:
    			return this.precpred(this._ctx, 7);
    		case 10:
    			return this.precpred(this._ctx, 6);
    		case 11:
    			return this.precpred(this._ctx, 5);
    		case 12:
    			return this.precpred(this._ctx, 4);
    		case 13:
    			return this.precpred(this._ctx, 3);
    		case 14:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    additiveExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 15:
    			return this.precpred(this._ctx, 3);
    		case 16:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    multiplicativeExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 17:
    			return this.precpred(this._ctx, 4);
    		case 18:
    			return this.precpred(this._ctx, 3);
    		case 19:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    postfixExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 20:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RELParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.conditionalExpression();
	        this.state = 43;
	        this.match(RELParser.EOF);
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



	conditionalExpression() {
	    let localctx = new ConditionalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RELParser.RULE_conditionalExpression);
	    var _la = 0;
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IfThenElseContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.match(RELParser.IF);
	            this.state = 46;
	            this.logicalOrExpression(0);
	            this.state = 47;
	            this.match(RELParser.THEN);
	            this.state = 48;
	            this.conditionalExpression();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===16) {
	                this.state = 49;
	                this.match(RELParser.ELSEIF);
	                this.state = 50;
	                this.logicalOrExpression(0);
	                this.state = 51;
	                this.match(RELParser.THEN);
	                this.state = 52;
	                this.conditionalExpression();
	                this.state = 58;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 59;
	            this.match(RELParser.ELSE);
	            this.state = 60;
	            this.conditionalExpression();
	            break;

	        case 2:
	            localctx = new LogicalOrContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.logicalOrExpression(0);
	            break;

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


	logicalOrExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LogicalOrExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, RELParser.RULE_logicalOrExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new LogicalAndContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 66;
	        this.logicalAndExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new OrExpressionContext(this, new LogicalOrExpressionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_logicalOrExpression);
	                this.state = 68;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 69;
	                this.match(RELParser.OR);
	                this.state = 70;
	                this.logicalAndExpression(0); 
	            }
	            this.state = 75;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	logicalAndExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LogicalAndExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, RELParser.RULE_logicalAndExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new EqualityContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 77;
	        this.equalityExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 84;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AndExpressionContext(this, new LogicalAndExpressionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_logicalAndExpression);
	                this.state = 79;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 80;
	                this.match(RELParser.AND);
	                this.state = 81;
	                this.equalityExpression(0); 
	            }
	            this.state = 86;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	equalityExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new EqualityExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, RELParser.RULE_equalityExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new RelationalContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 88;
	        this.relationalExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 104;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 102;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new EqualExpressionContext(this, new EqualityExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_equalityExpression);
	                    this.state = 90;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 91;
	                    this.match(RELParser.EQ);
	                    this.state = 92;
	                    this.relationalExpression(0);
	                    break;

	                case 2:
	                    localctx = new StrictEqualExpressionContext(this, new EqualityExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_equalityExpression);
	                    this.state = 93;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 94;
	                    this.match(RELParser.SEQ);
	                    this.state = 95;
	                    this.relationalExpression(0);
	                    break;

	                case 3:
	                    localctx = new NotEqualExpressionContext(this, new EqualityExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_equalityExpression);
	                    this.state = 96;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 97;
	                    this.match(RELParser.NEQ);
	                    this.state = 98;
	                    this.relationalExpression(0);
	                    break;

	                case 4:
	                    localctx = new StrictNotEqualExpressionContext(this, new EqualityExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_equalityExpression);
	                    this.state = 99;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 100;
	                    this.match(RELParser.SNEQ);
	                    this.state = 101;
	                    this.relationalExpression(0);
	                    break;

	                } 
	            }
	            this.state = 106;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	relationalExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new RelationalExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, RELParser.RULE_relationalExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new AdditiveContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 108;
	        this.additiveExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 142;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 140;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new GreaterThanExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_relationalExpression);
	                    this.state = 110;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 111;
	                    this.match(RELParser.GT);
	                    this.state = 112;
	                    this.additiveExpression(0);
	                    break;

	                case 2:
	                    localctx = new GreaterThanOrEqualExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_relationalExpression);
	                    this.state = 113;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 114;
	                    this.match(RELParser.GTE);
	                    this.state = 115;
	                    this.additiveExpression(0);
	                    break;

	                case 3:
	                    localctx = new LessThanExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_relationalExpression);
	                    this.state = 116;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 117;
	                    this.match(RELParser.LT);
	                    this.state = 118;
	                    this.additiveExpression(0);
	                    break;

	                case 4:
	                    localctx = new LessThanOrEqualExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_relationalExpression);
	                    this.state = 119;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 120;
	                    this.match(RELParser.LTE);
	                    this.state = 121;
	                    this.additiveExpression(0);
	                    break;

	                case 5:
	                    localctx = new BetweenExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_relationalExpression);
	                    this.state = 122;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 123;
	                    this.match(RELParser.BETWEEN);
	                    this.state = 124;
	                    this.additiveExpression(0);
	                    this.state = 125;
	                    this.match(RELParser.AND);
	                    this.state = 126;
	                    this.additiveExpression(0);
	                    break;

	                case 6:
	                    localctx = new InExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_relationalExpression);
	                    this.state = 128;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 129;
	                    this.match(RELParser.IN);
	                    this.state = 130;
	                    this.additiveExpression(0);
	                    break;

	                case 7:
	                    localctx = new NotInExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_relationalExpression);
	                    this.state = 131;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 132;
	                    this.match(RELParser.NOT_IN);
	                    this.state = 133;
	                    this.additiveExpression(0);
	                    break;

	                case 8:
	                    localctx = new StartsWithExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_relationalExpression);
	                    this.state = 134;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 135;
	                    this.match(RELParser.STARTS_WITH);
	                    this.state = 136;
	                    this.additiveExpression(0);
	                    break;

	                case 9:
	                    localctx = new EndsWithExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_relationalExpression);
	                    this.state = 137;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 138;
	                    this.match(RELParser.ENDS_WITH);
	                    this.state = 139;
	                    this.additiveExpression(0);
	                    break;

	                } 
	            }
	            this.state = 144;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	additiveExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AdditiveExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, RELParser.RULE_additiveExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new MultiplicativeContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 146;
	        this.multiplicativeExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 156;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 154;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AddExpressionContext(this, new AdditiveExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_additiveExpression);
	                    this.state = 148;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 149;
	                    this.match(RELParser.PLUS);
	                    this.state = 150;
	                    this.multiplicativeExpression(0);
	                    break;

	                case 2:
	                    localctx = new SubtractExpressionContext(this, new AdditiveExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_additiveExpression);
	                    this.state = 151;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 152;
	                    this.match(RELParser.MINUS);
	                    this.state = 153;
	                    this.multiplicativeExpression(0);
	                    break;

	                } 
	            }
	            this.state = 158;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	multiplicativeExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, RELParser.RULE_multiplicativeExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new UnaryContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 160;
	        this.unaryExpression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 173;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 171;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplyExpressionContext(this, new MultiplicativeExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_multiplicativeExpression);
	                    this.state = 162;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 163;
	                    this.match(RELParser.MULTIPLY);
	                    this.state = 164;
	                    this.unaryExpression();
	                    break;

	                case 2:
	                    localctx = new DivideExpressionContext(this, new MultiplicativeExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_multiplicativeExpression);
	                    this.state = 165;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 166;
	                    this.match(RELParser.DIVIDE);
	                    this.state = 167;
	                    this.unaryExpression();
	                    break;

	                case 3:
	                    localctx = new ModuloExpressionContext(this, new MultiplicativeExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_multiplicativeExpression);
	                    this.state = 168;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 169;
	                    this.match(RELParser.MODULO);
	                    this.state = 170;
	                    this.unaryExpression();
	                    break;

	                } 
	            }
	            this.state = 175;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	unaryExpression() {
	    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RELParser.RULE_unaryExpression);
	    try {
	        this.state = 181;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            localctx = new NotExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            this.match(RELParser.NOT);
	            this.state = 177;
	            this.unaryExpression();
	            break;
	        case 33:
	            localctx = new DoubleNotExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.match(RELParser.DOUBLE_NOT);
	            this.state = 179;
	            this.unaryExpression();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 42:
	        case 44:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	            localctx = new PostfixContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 180;
	            this.postfixExpression(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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


	postfixExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new PostfixExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, RELParser.RULE_postfixExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new PrimaryContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 184;
	        this.primaryExpression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 191;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new PropertyAccessContext(this, new PostfixExpressionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, RELParser.RULE_postfixExpression);
	                this.state = 186;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 187;
	                this.match(RELParser.DOT);
	                this.state = 188;
	                this.match(RELParser.IDENTIFIER); 
	            }
	            this.state = 193;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RELParser.RULE_primaryExpression);
	    var _la = 0;
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new VariableExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            this.variable();
	            break;

	        case 2:
	            localctx = new BareIdentifierExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 195;
	            this.bareIdentifier();
	            break;

	        case 3:
	            localctx = new LiteralExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 196;
	            this.literal();
	            break;

	        case 4:
	            localctx = new FunctionCallExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 197;
	            this.functionCall();
	            break;

	        case 5:
	            localctx = new IfExpressionPrimaryContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 198;
	            this.match(RELParser.IF);
	            this.state = 199;
	            this.logicalOrExpression(0);
	            this.state = 200;
	            this.match(RELParser.THEN);
	            this.state = 201;
	            this.conditionalExpression();
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===16) {
	                this.state = 202;
	                this.match(RELParser.ELSEIF);
	                this.state = 203;
	                this.logicalOrExpression(0);
	                this.state = 204;
	                this.match(RELParser.THEN);
	                this.state = 205;
	                this.conditionalExpression();
	                this.state = 211;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 212;
	            this.match(RELParser.ELSE);
	            this.state = 213;
	            this.conditionalExpression();
	            break;

	        case 6:
	            localctx = new ParenthesizedExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 215;
	            this.match(RELParser.LPAREN);
	            this.state = 216;
	            this.conditionalExpression();
	            this.state = 217;
	            this.match(RELParser.RPAREN);
	            break;

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



	bareIdentifier() {
	    let localctx = new BareIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, RELParser.RULE_bareIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(RELParser.IDENTIFIER);
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, RELParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(RELParser.T__0);
	        this.state = 224;
	        this.variableName();
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



	variableName() {
	    let localctx = new VariableNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, RELParser.RULE_variableName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(RELParser.IDENTIFIER);
	        this.state = 231;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 227;
	                this.match(RELParser.DOT);
	                this.state = 228;
	                this.match(RELParser.IDENTIFIER); 
	            }
	            this.state = 233;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, RELParser.RULE_literal);
	    try {
	        this.state = 239;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            localctx = new NumberLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 234;
	            this.match(RELParser.NUMBER);
	            break;
	        case 49:
	            localctx = new StringLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 235;
	            this.match(RELParser.STRING);
	            break;
	        case 50:
	            localctx = new BooleanLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 236;
	            this.match(RELParser.BOOLEAN);
	            break;
	        case 44:
	            localctx = new ArrayLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 237;
	            this.array();
	            break;
	        case 52:
	            localctx = new PlaceholderLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 238;
	            this.placeholder();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	placeholder() {
	    let localctx = new PlaceholderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, RELParser.RULE_placeholder);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(RELParser.PLACEHOLDER);
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, RELParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(RELParser.LBRACKET);
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 16382) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2036739) !== 0)) {
	            this.state = 244;
	            this.conditionalExpression();
	            this.state = 249;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39) {
	                this.state = 245;
	                this.match(RELParser.COMMA);
	                this.state = 246;
	                this.conditionalExpression();
	                this.state = 251;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 254;
	        this.match(RELParser.RBRACKET);
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



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, RELParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.functionName();
	        this.state = 257;
	        this.match(RELParser.LPAREN);
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 16382) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2036739) !== 0)) {
	            this.state = 258;
	            this.conditionalExpression();
	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39) {
	                this.state = 259;
	                this.match(RELParser.COMMA);
	                this.state = 260;
	                this.conditionalExpression();
	                this.state = 265;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 268;
	        this.match(RELParser.RPAREN);
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



	arrayMethods() {
	    let localctx = new ArrayMethodsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, RELParser.RULE_arrayMethods);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 508) !== 0))) {
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



	stringMethods() {
	    let localctx = new StringMethodsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, RELParser.RULE_stringMethods);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===10)) {
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



	functionName() {
	    let localctx = new FunctionNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, RELParser.RULE_functionName);
	    try {
	        this.state = 279;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 274;
	            this.match(RELParser.T__10);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 275;
	            this.match(RELParser.T__11);
	            break;
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 276;
	            this.stringMethods();
	            break;
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 277;
	            this.arrayMethods();
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 278;
	            this.match(RELParser.IDENTIFIER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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

RELParser.EOF = antlr4.Token.EOF;
RELParser.T__0 = 1;
RELParser.T__1 = 2;
RELParser.T__2 = 3;
RELParser.T__3 = 4;
RELParser.T__4 = 5;
RELParser.T__5 = 6;
RELParser.T__6 = 7;
RELParser.T__7 = 8;
RELParser.T__8 = 9;
RELParser.T__9 = 10;
RELParser.T__10 = 11;
RELParser.T__11 = 12;
RELParser.IF = 13;
RELParser.THEN = 14;
RELParser.ELSE = 15;
RELParser.ELSEIF = 16;
RELParser.OR = 17;
RELParser.AND = 18;
RELParser.EQ = 19;
RELParser.NEQ = 20;
RELParser.SEQ = 21;
RELParser.SNEQ = 22;
RELParser.GT = 23;
RELParser.GTE = 24;
RELParser.LT = 25;
RELParser.LTE = 26;
RELParser.BETWEEN = 27;
RELParser.IN = 28;
RELParser.NOT_IN = 29;
RELParser.STARTS_WITH = 30;
RELParser.ENDS_WITH = 31;
RELParser.NOT = 32;
RELParser.DOUBLE_NOT = 33;
RELParser.PLUS = 34;
RELParser.MINUS = 35;
RELParser.MULTIPLY = 36;
RELParser.DIVIDE = 37;
RELParser.MODULO = 38;
RELParser.COMMA = 39;
RELParser.DOT = 40;
RELParser.SEMICOLON = 41;
RELParser.LPAREN = 42;
RELParser.RPAREN = 43;
RELParser.LBRACKET = 44;
RELParser.RBRACKET = 45;
RELParser.LBRACE = 46;
RELParser.RBRACE = 47;
RELParser.NUMBER = 48;
RELParser.STRING = 49;
RELParser.BOOLEAN = 50;
RELParser.IDENTIFIER = 51;
RELParser.PLACEHOLDER = 52;
RELParser.WS = 53;
RELParser.LINE_COMMENT = 54;
RELParser.BLOCK_COMMENT = 55;

RELParser.RULE_expression = 0;
RELParser.RULE_conditionalExpression = 1;
RELParser.RULE_logicalOrExpression = 2;
RELParser.RULE_logicalAndExpression = 3;
RELParser.RULE_equalityExpression = 4;
RELParser.RULE_relationalExpression = 5;
RELParser.RULE_additiveExpression = 6;
RELParser.RULE_multiplicativeExpression = 7;
RELParser.RULE_unaryExpression = 8;
RELParser.RULE_postfixExpression = 9;
RELParser.RULE_primaryExpression = 10;
RELParser.RULE_bareIdentifier = 11;
RELParser.RULE_variable = 12;
RELParser.RULE_variableName = 13;
RELParser.RULE_literal = 14;
RELParser.RULE_placeholder = 15;
RELParser.RULE_array = 16;
RELParser.RULE_functionCall = 17;
RELParser.RULE_arrayMethods = 18;
RELParser.RULE_stringMethods = 19;
RELParser.RULE_functionName = 20;

class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_expression;
    }

	conditionalExpression() {
	    return this.getTypedRuleContext(ConditionalExpressionContext,0);
	};

	EOF() {
	    return this.getToken(RELParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_conditionalExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IfThenElseContext extends ConditionalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(RELParser.IF, 0);
	};

	logicalOrExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalOrExpressionContext);
	    } else {
	        return this.getTypedRuleContext(LogicalOrExpressionContext,i);
	    }
	};

	THEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RELParser.THEN);
	    } else {
	        return this.getToken(RELParser.THEN, i);
	    }
	};


	conditionalExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalExpressionContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(RELParser.ELSE, 0);
	};

	ELSEIF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RELParser.ELSEIF);
	    } else {
	        return this.getToken(RELParser.ELSEIF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterIfThenElse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitIfThenElse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitIfThenElse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.IfThenElseContext = IfThenElseContext;

class LogicalOrContext extends ConditionalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	logicalOrExpression() {
	    return this.getTypedRuleContext(LogicalOrExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterLogicalOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitLogicalOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitLogicalOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.LogicalOrContext = LogicalOrContext;

class LogicalOrExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_logicalOrExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LogicalAndContext extends LogicalOrExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	logicalAndExpression() {
	    return this.getTypedRuleContext(LogicalAndExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterLogicalAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitLogicalAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitLogicalAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.LogicalAndContext = LogicalAndContext;

class OrExpressionContext extends LogicalOrExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	logicalOrExpression() {
	    return this.getTypedRuleContext(LogicalOrExpressionContext,0);
	};

	OR() {
	    return this.getToken(RELParser.OR, 0);
	};

	logicalAndExpression() {
	    return this.getTypedRuleContext(LogicalAndExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitOrExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.OrExpressionContext = OrExpressionContext;

class LogicalAndExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_logicalAndExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AndExpressionContext extends LogicalAndExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	logicalAndExpression() {
	    return this.getTypedRuleContext(LogicalAndExpressionContext,0);
	};

	AND() {
	    return this.getToken(RELParser.AND, 0);
	};

	equalityExpression() {
	    return this.getTypedRuleContext(EqualityExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitAndExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.AndExpressionContext = AndExpressionContext;

class EqualityContext extends LogicalAndExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	equalityExpression() {
	    return this.getTypedRuleContext(EqualityExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterEquality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitEquality(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitEquality(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.EqualityContext = EqualityContext;

class EqualityExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_equalityExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StrictNotEqualExpressionContext extends EqualityExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	equalityExpression() {
	    return this.getTypedRuleContext(EqualityExpressionContext,0);
	};

	SNEQ() {
	    return this.getToken(RELParser.SNEQ, 0);
	};

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterStrictNotEqualExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitStrictNotEqualExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitStrictNotEqualExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.StrictNotEqualExpressionContext = StrictNotEqualExpressionContext;

class RelationalContext extends EqualityExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterRelational(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitRelational(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitRelational(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.RelationalContext = RelationalContext;

class EqualExpressionContext extends EqualityExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	equalityExpression() {
	    return this.getTypedRuleContext(EqualityExpressionContext,0);
	};

	EQ() {
	    return this.getToken(RELParser.EQ, 0);
	};

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterEqualExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitEqualExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitEqualExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.EqualExpressionContext = EqualExpressionContext;

class StrictEqualExpressionContext extends EqualityExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	equalityExpression() {
	    return this.getTypedRuleContext(EqualityExpressionContext,0);
	};

	SEQ() {
	    return this.getToken(RELParser.SEQ, 0);
	};

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterStrictEqualExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitStrictEqualExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitStrictEqualExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.StrictEqualExpressionContext = StrictEqualExpressionContext;

class NotEqualExpressionContext extends EqualityExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	equalityExpression() {
	    return this.getTypedRuleContext(EqualityExpressionContext,0);
	};

	NEQ() {
	    return this.getToken(RELParser.NEQ, 0);
	};

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterNotEqualExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitNotEqualExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitNotEqualExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.NotEqualExpressionContext = NotEqualExpressionContext;

class RelationalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_relationalExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AdditiveContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterAdditive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitAdditive(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitAdditive(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.AdditiveContext = AdditiveContext;

class BetweenExpressionContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	BETWEEN() {
	    return this.getToken(RELParser.BETWEEN, 0);
	};

	additiveExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExpressionContext,i);
	    }
	};

	AND() {
	    return this.getToken(RELParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterBetweenExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitBetweenExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitBetweenExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.BetweenExpressionContext = BetweenExpressionContext;

class InExpressionContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	IN() {
	    return this.getToken(RELParser.IN, 0);
	};

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterInExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitInExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitInExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.InExpressionContext = InExpressionContext;

class GreaterThanExpressionContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	GT() {
	    return this.getToken(RELParser.GT, 0);
	};

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterGreaterThanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitGreaterThanExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitGreaterThanExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.GreaterThanExpressionContext = GreaterThanExpressionContext;

class EndsWithExpressionContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	ENDS_WITH() {
	    return this.getToken(RELParser.ENDS_WITH, 0);
	};

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterEndsWithExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitEndsWithExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitEndsWithExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.EndsWithExpressionContext = EndsWithExpressionContext;

class StartsWithExpressionContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	STARTS_WITH() {
	    return this.getToken(RELParser.STARTS_WITH, 0);
	};

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterStartsWithExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitStartsWithExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitStartsWithExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.StartsWithExpressionContext = StartsWithExpressionContext;

class GreaterThanOrEqualExpressionContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	GTE() {
	    return this.getToken(RELParser.GTE, 0);
	};

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterGreaterThanOrEqualExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitGreaterThanOrEqualExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitGreaterThanOrEqualExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.GreaterThanOrEqualExpressionContext = GreaterThanOrEqualExpressionContext;

class LessThanOrEqualExpressionContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	LTE() {
	    return this.getToken(RELParser.LTE, 0);
	};

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterLessThanOrEqualExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitLessThanOrEqualExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitLessThanOrEqualExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.LessThanOrEqualExpressionContext = LessThanOrEqualExpressionContext;

class NotInExpressionContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	NOT_IN() {
	    return this.getToken(RELParser.NOT_IN, 0);
	};

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterNotInExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitNotInExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitNotInExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.NotInExpressionContext = NotInExpressionContext;

class LessThanExpressionContext extends RelationalExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	LT() {
	    return this.getToken(RELParser.LT, 0);
	};

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterLessThanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitLessThanExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitLessThanExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.LessThanExpressionContext = LessThanExpressionContext;

class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_additiveExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SubtractExpressionContext extends AdditiveExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	MINUS() {
	    return this.getToken(RELParser.MINUS, 0);
	};

	multiplicativeExpression() {
	    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterSubtractExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitSubtractExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitSubtractExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.SubtractExpressionContext = SubtractExpressionContext;

class MultiplicativeContext extends AdditiveExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	multiplicativeExpression() {
	    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterMultiplicative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitMultiplicative(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitMultiplicative(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.MultiplicativeContext = MultiplicativeContext;

class AddExpressionContext extends AdditiveExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	PLUS() {
	    return this.getToken(RELParser.PLUS, 0);
	};

	multiplicativeExpression() {
	    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterAddExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitAddExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitAddExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.AddExpressionContext = AddExpressionContext;

class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_multiplicativeExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DivideExpressionContext extends MultiplicativeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	multiplicativeExpression() {
	    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
	};

	DIVIDE() {
	    return this.getToken(RELParser.DIVIDE, 0);
	};

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterDivideExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitDivideExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitDivideExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.DivideExpressionContext = DivideExpressionContext;

class MultiplyExpressionContext extends MultiplicativeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	multiplicativeExpression() {
	    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
	};

	MULTIPLY() {
	    return this.getToken(RELParser.MULTIPLY, 0);
	};

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterMultiplyExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitMultiplyExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitMultiplyExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.MultiplyExpressionContext = MultiplyExpressionContext;

class UnaryContext extends MultiplicativeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitUnary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitUnary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.UnaryContext = UnaryContext;

class ModuloExpressionContext extends MultiplicativeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	multiplicativeExpression() {
	    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
	};

	MODULO() {
	    return this.getToken(RELParser.MODULO, 0);
	};

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterModuloExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitModuloExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitModuloExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.ModuloExpressionContext = ModuloExpressionContext;

class UnaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_unaryExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PostfixContext extends UnaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	postfixExpression() {
	    return this.getTypedRuleContext(PostfixExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterPostfix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitPostfix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitPostfix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.PostfixContext = PostfixContext;

class DoubleNotExpressionContext extends UnaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DOUBLE_NOT() {
	    return this.getToken(RELParser.DOUBLE_NOT, 0);
	};

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterDoubleNotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitDoubleNotExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitDoubleNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.DoubleNotExpressionContext = DoubleNotExpressionContext;

class NotExpressionContext extends UnaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(RELParser.NOT, 0);
	};

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterNotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitNotExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.NotExpressionContext = NotExpressionContext;

class PostfixExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_postfixExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrimaryContext extends PostfixExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.PrimaryContext = PrimaryContext;

class PropertyAccessContext extends PostfixExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	postfixExpression() {
	    return this.getTypedRuleContext(PostfixExpressionContext,0);
	};

	DOT() {
	    return this.getToken(RELParser.DOT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(RELParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterPropertyAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitPropertyAccess(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitPropertyAccess(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.PropertyAccessContext = PropertyAccessContext;

class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_primaryExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParenthesizedExpressionContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(RELParser.LPAREN, 0);
	};

	conditionalExpression() {
	    return this.getTypedRuleContext(ConditionalExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(RELParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterParenthesizedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitParenthesizedExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitParenthesizedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

class IfExpressionPrimaryContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(RELParser.IF, 0);
	};

	logicalOrExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalOrExpressionContext);
	    } else {
	        return this.getTypedRuleContext(LogicalOrExpressionContext,i);
	    }
	};

	THEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RELParser.THEN);
	    } else {
	        return this.getToken(RELParser.THEN, i);
	    }
	};


	conditionalExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalExpressionContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(RELParser.ELSE, 0);
	};

	ELSEIF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RELParser.ELSEIF);
	    } else {
	        return this.getToken(RELParser.ELSEIF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterIfExpressionPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitIfExpressionPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitIfExpressionPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.IfExpressionPrimaryContext = IfExpressionPrimaryContext;

class BareIdentifierExpressionContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	bareIdentifier() {
	    return this.getTypedRuleContext(BareIdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterBareIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitBareIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitBareIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.BareIdentifierExpressionContext = BareIdentifierExpressionContext;

class LiteralExpressionContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterLiteralExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitLiteralExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitLiteralExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.LiteralExpressionContext = LiteralExpressionContext;

class VariableExpressionContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterVariableExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitVariableExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitVariableExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.VariableExpressionContext = VariableExpressionContext;

class FunctionCallExpressionContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterFunctionCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitFunctionCallExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitFunctionCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.FunctionCallExpressionContext = FunctionCallExpressionContext;

class BareIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_bareIdentifier;
    }

	IDENTIFIER() {
	    return this.getToken(RELParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterBareIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitBareIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitBareIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_variable;
    }

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_variableName;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RELParser.IDENTIFIER);
	    } else {
	        return this.getToken(RELParser.IDENTIFIER, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RELParser.DOT);
	    } else {
	        return this.getToken(RELParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitVariableName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitVariableName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_literal;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StringLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(RELParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterStringLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitStringLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitStringLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.StringLiteralContext = StringLiteralContext;

class BooleanLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOLEAN() {
	    return this.getToken(RELParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterBooleanLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitBooleanLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitBooleanLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.BooleanLiteralContext = BooleanLiteralContext;

class PlaceholderLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	placeholder() {
	    return this.getTypedRuleContext(PlaceholderContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterPlaceholderLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitPlaceholderLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitPlaceholderLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.PlaceholderLiteralContext = PlaceholderLiteralContext;

class ArrayLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterArrayLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitArrayLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitArrayLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.ArrayLiteralContext = ArrayLiteralContext;

class NumberLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(RELParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterNumberLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitNumberLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitNumberLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RELParser.NumberLiteralContext = NumberLiteralContext;

class PlaceholderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_placeholder;
    }

	PLACEHOLDER() {
	    return this.getToken(RELParser.PLACEHOLDER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterPlaceholder(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitPlaceholder(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitPlaceholder(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_array;
    }

	LBRACKET() {
	    return this.getToken(RELParser.LBRACKET, 0);
	};

	RBRACKET() {
	    return this.getToken(RELParser.RBRACKET, 0);
	};

	conditionalExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RELParser.COMMA);
	    } else {
	        return this.getToken(RELParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_functionCall;
    }

	functionName() {
	    return this.getTypedRuleContext(FunctionNameContext,0);
	};

	LPAREN() {
	    return this.getToken(RELParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(RELParser.RPAREN, 0);
	};

	conditionalExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RELParser.COMMA);
	    } else {
	        return this.getToken(RELParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayMethodsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_arrayMethods;
    }


	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterArrayMethods(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitArrayMethods(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitArrayMethods(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringMethodsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_stringMethods;
    }


	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterStringMethods(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitStringMethods(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitStringMethods(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RELParser.RULE_functionName;
    }

	stringMethods() {
	    return this.getTypedRuleContext(StringMethodsContext,0);
	};

	arrayMethods() {
	    return this.getTypedRuleContext(ArrayMethodsContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(RELParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.enterFunctionName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RELListener ) {
	        listener.exitFunctionName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RELVisitor ) {
	        return visitor.visitFunctionName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RELParser.ExpressionContext = ExpressionContext; 
RELParser.ConditionalExpressionContext = ConditionalExpressionContext; 
RELParser.LogicalOrExpressionContext = LogicalOrExpressionContext; 
RELParser.LogicalAndExpressionContext = LogicalAndExpressionContext; 
RELParser.EqualityExpressionContext = EqualityExpressionContext; 
RELParser.RelationalExpressionContext = RelationalExpressionContext; 
RELParser.AdditiveExpressionContext = AdditiveExpressionContext; 
RELParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
RELParser.UnaryExpressionContext = UnaryExpressionContext; 
RELParser.PostfixExpressionContext = PostfixExpressionContext; 
RELParser.PrimaryExpressionContext = PrimaryExpressionContext; 
RELParser.BareIdentifierContext = BareIdentifierContext; 
RELParser.VariableContext = VariableContext; 
RELParser.VariableNameContext = VariableNameContext; 
RELParser.LiteralContext = LiteralContext; 
RELParser.PlaceholderContext = PlaceholderContext; 
RELParser.ArrayContext = ArrayContext; 
RELParser.FunctionCallContext = FunctionCallContext; 
RELParser.ArrayMethodsContext = ArrayMethodsContext; 
RELParser.StringMethodsContext = StringMethodsContext; 
RELParser.FunctionNameContext = FunctionNameContext; 
