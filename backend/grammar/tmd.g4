// Turing
// Machine
// Descriptor
grammar tmd;

description : machine
              naset
              aset
              init
              inalphabet
              malphabet
              behaviour
              ;

machine: 'Machine' ID ';' ;
naset : 'NAset' '=' '{' ID? (COMMA ID)* '}' ';' ;
aset : 'Aset' '=' '{' ID (COMMA ID)* '}' ';' ;
init : 'Init' '=' ID ';' ;
inalphabet : 'INalphabet' '=' '{' SYMBOL (COMMA SYMBOL)* '}' ';' ;
malphabet : 'Malphabet' '=' '{' SYMBOL? (COMMA SYMBOL)* '}' ';' ;

behaviour : 'Behaviour' '=' '{' behaviour_rule? (COMMA behaviour_rule)* '}' ';' ;
behaviour_rule : curr_state ':' next_state ;
curr_state : '(' ID COMMA SYMBOL ')' ;
next_state : '(' ID COMMA SYMBOL COMMA movement ')' ;

movement : LEFT | RIGHT | STAY ;


// Lexical Rules
COMMENTS: '\'' .*? '\n' -> skip ;
WS : [ \t\r\n]+ -> skip ;

COMMA : ',' ;

// Movements of the PU.
LEFT: 'LEFT' ;
RIGHT: 'RIGHT' ;
STAY: 'STAY' ;

ID : [a-zA-Z\u00C0-\u017F][a-zA-Z0-9_\u00C0-\u017F]* ; // For the machine and the states.
SYMBOL : '"'( '\\' . | ~('\\'|'"') )'"' ; // For the symbols used.