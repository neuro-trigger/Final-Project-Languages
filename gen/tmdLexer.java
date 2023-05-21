// Generated from D:/USER/Desktop/Documentos u/Septimo Semestre/Lenguajes/Final Project Languages/grammar\tmd.g4 by ANTLR 4.12.0
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class tmdLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.12.0", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, ID=3, SYMBOL=4, LEFT=5, RIGHT=6, STAY=7, COMMENTS=8, WS=9;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "ID", "SYMBOL", "LEFT", "RIGHT", "STAY", "COMMENTS", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Machine'", "';'", null, null, "'<-'", "'->'", "'_'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "ID", "SYMBOL", "LEFT", "RIGHT", "STAY", "COMMENTS", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public tmdLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "tmd.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\tC\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0005\u0002 \b\u0002\n\u0002\f\u0002#\t"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003(\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0005\u00074\b\u0007\n\u0007"+
		"\f\u00077\t\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0004\b>\b\b\u000b\b\f\b?\u0001\b\u0001\b\u00015\u0000\t\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0001\u0000\u0004\u0003\u0000AZaz\u00c0\u017f\u0005\u00000"+
		"9AZ__az\u00c0\u017f\u0002\u0000\"\"\\\\\u0003\u0000\t\n\r\r  F\u0000\u0001"+
		"\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001"+
		"\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000"+
		"\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000"+
		"\u0000\u0000\u0001\u0013\u0001\u0000\u0000\u0000\u0003\u001b\u0001\u0000"+
		"\u0000\u0000\u0005\u001d\u0001\u0000\u0000\u0000\u0007\'\u0001\u0000\u0000"+
		"\u0000\t)\u0001\u0000\u0000\u0000\u000b,\u0001\u0000\u0000\u0000\r/\u0001"+
		"\u0000\u0000\u0000\u000f1\u0001\u0000\u0000\u0000\u0011=\u0001\u0000\u0000"+
		"\u0000\u0013\u0014\u0005M\u0000\u0000\u0014\u0015\u0005a\u0000\u0000\u0015"+
		"\u0016\u0005c\u0000\u0000\u0016\u0017\u0005h\u0000\u0000\u0017\u0018\u0005"+
		"i\u0000\u0000\u0018\u0019\u0005n\u0000\u0000\u0019\u001a\u0005e\u0000"+
		"\u0000\u001a\u0002\u0001\u0000\u0000\u0000\u001b\u001c\u0005;\u0000\u0000"+
		"\u001c\u0004\u0001\u0000\u0000\u0000\u001d!\u0007\u0000\u0000\u0000\u001e"+
		" \u0007\u0001\u0000\u0000\u001f\u001e\u0001\u0000\u0000\u0000 #\u0001"+
		"\u0000\u0000\u0000!\u001f\u0001\u0000\u0000\u0000!\"\u0001\u0000\u0000"+
		"\u0000\"\u0006\u0001\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000$%\u0005"+
		"\\\u0000\u0000%(\t\u0000\u0000\u0000&(\b\u0002\u0000\u0000\'$\u0001\u0000"+
		"\u0000\u0000\'&\u0001\u0000\u0000\u0000(\b\u0001\u0000\u0000\u0000)*\u0005"+
		"<\u0000\u0000*+\u0005-\u0000\u0000+\n\u0001\u0000\u0000\u0000,-\u0005"+
		"-\u0000\u0000-.\u0005>\u0000\u0000.\f\u0001\u0000\u0000\u0000/0\u0005"+
		"_\u0000\u00000\u000e\u0001\u0000\u0000\u000015\u0005\'\u0000\u000024\t"+
		"\u0000\u0000\u000032\u0001\u0000\u0000\u000047\u0001\u0000\u0000\u0000"+
		"56\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000068\u0001\u0000\u0000"+
		"\u000075\u0001\u0000\u0000\u000089\u0005\n\u0000\u00009:\u0001\u0000\u0000"+
		"\u0000:;\u0006\u0007\u0000\u0000;\u0010\u0001\u0000\u0000\u0000<>\u0007"+
		"\u0003\u0000\u0000=<\u0001\u0000\u0000\u0000>?\u0001\u0000\u0000\u0000"+
		"?=\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@A\u0001\u0000\u0000"+
		"\u0000AB\u0006\b\u0000\u0000B\u0012\u0001\u0000\u0000\u0000\u0005\u0000"+
		"!\'5?\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}