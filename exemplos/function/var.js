/*
Exemplo 1: function padrão.
- No primeiro console.log apenas passa a function soma como parâmetro para a function console.log.
- No segundo console.log, chama a function normalmente.

Exemplo 2: function declarada como variável.
- No primeiro console log, apenas passa a function como parâmetro para o console.log.
- No segundo console.log executa a função normalmente.
*/


// exemplo 1
function soma(a, b) {
    console.log("function sem var.");
    return a + b;
}

console.log(soma); // [Function: soma]
console.log(soma(2, 3)); // function sem var.  ->  // 5
// ----------------------------------------------


// exemplo 2
var soma = function (a, b) {
    console.log("function var;");
    return a + b;
}

console.log(soma); // [Function: soma]
console.log(soma(3, 3)); // function var.  ->   // 6
// -------------------------------------------------