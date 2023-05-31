import antlr4 from 'antlr4';
import tmdLexer from './tmdLexer.js';
import tmdParser from './tmdParser.js';
import tmdVisitor from './tmdVisitor.js';
import TuringMachine from './TuringMachine.js';

console.log("Hola Mundo");

let inputCode = 'Machine prueba ; NAset = {q0} ; Aset = {} ; Init = q0 ; INalphabet = {"0", "1"} ; Malphabet = {} ;Behaviour = {(q0, "0") : (q0, "1", LEFT), (q0, "1") : (q0, "0", STAY)} ;';
let chars = new antlr4.InputStream(inputCode);
let lexer = new tmdLexer(chars);
let tokens = new antlr4.CommonTokenStream(lexer);
let parser = new tmdParser(tokens);
let codeAnalyzer = new tmdVisitor();

parser.buildParseTrees = true;

let parseTree = parser.description();
codeAnalyzer.visit(parseTree);

/* TEST FOR THE VISITOR */
let naset = "{";
for(const x of codeAnalyzer.nSet) {
    naset += x + ", ";
}
naset += "}";

let aset = "{";
for(const x of codeAnalyzer.aSet) {
    aset += x + ", ";
}
aset += "}";

let inis = codeAnalyzer.initState;

let inalphabet = "{";
for(const x of codeAnalyzer.inAlphabet) {
    inalphabet += x + ", ";
}
inalphabet += "}";

let malphabet = "{";
for(const x of codeAnalyzer.mAlphabet) {
    malphabet += x + ", ";
}
malphabet += "}";

let behavior = "{";
for(const [st, mapa] of codeAnalyzer.behavior.entries()) {
    for(const [sy, ins] of codeAnalyzer.behavior.get(st).entries()) {
        behavior += "(" + st + ", " + sy + ") : ";
        behavior += "(" + ins.nextState + ", " + ins.writeSymbol + ", " + ins.displacement + ")\n";         
    }
}
behavior += "}";

console.log(naset);
console.log(aset);
console.log(inis);
console.log(inalphabet);
console.log(malphabet);
console.log(behavior);
/* END TEST */

//console.log(parseTree.toStringTree(parser.ruleNames));
