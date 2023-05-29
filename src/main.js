import antlr4 from 'antlr4';
import tmdLexer from './tmdLexer.js';
import tmdParser from './tmdParser.js';
import tmdVisitor from './tmdVisitor.js';

console.log("Hola Mundo");

let inputCode = 'Machine prueba ; NAset = {} ; Aset = {q0} ; Init = q0 ; INalphabet = {"0", "1"} ; Malphabet = {} ;Behaviour = {(q0, "0") : (q0, "1", LEFT), (q0, "1") : (q0, "0", STAY)} ;';
let chars = new antlr4.InputStream(inputCode);
let lexer = new tmdLexer(chars);
let tokens = new antlr4.CommonTokenStream(lexer);
let parser = new tmdParser(tokens);
let codeAnalyzer = new tmdVisitor();

parser.buildParseTrees = true;

let parseTree = parser.description();

console.log(parseTree.toStringTree(parser.ruleNames));
