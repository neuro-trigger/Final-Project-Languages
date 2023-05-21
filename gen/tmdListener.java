// Generated from D:/USER/Desktop/Documentos u/Septimo Semestre/Lenguajes/Final Project Languages/grammar\tmd.g4 by ANTLR 4.12.0
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link tmdParser}.
 */
public interface tmdListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link tmdParser#machine}.
	 * @param ctx the parse tree
	 */
	void enterMachine(tmdParser.MachineContext ctx);
	/**
	 * Exit a parse tree produced by {@link tmdParser#machine}.
	 * @param ctx the parse tree
	 */
	void exitMachine(tmdParser.MachineContext ctx);
}