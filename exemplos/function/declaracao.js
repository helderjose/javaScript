/* esse bloco funciona, chamando antes de declarar */
// console.log(soma(3, 2));

// function soma(a, b){
// return a + b;
// }



/* esse bloco dá erro, chamando antes da declaração*/
console.log(soma(3, 2));

var soma = function(a, b){
return a + b;
}