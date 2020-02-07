
function newLine() {
    console.log('');
}

var produto = { nome: 'Sapato', preco: 150 };

var formulaImpostoA = function (preco) { return preco * 0.1; };
var formulaImpostoB = function (preco) { return preco * 0.2; };

var calcularPreco = function (produto, formulaImposto) {
    produto.precoComImposto = produto.preco + formulaImposto(produto.preco);
}

console.log(produto); // { nome: 'Sapato', preco: 150 }
newLine();

calcularPreco(produto, formulaImpostoA);
console.log(produto); // { nome: 'Sapato', preco: 150, precoComImposto: 165 }
newLine();

calcularPreco(produto, formulaImpostoB);
console.log(produto); // { nome: 'Sapato', preco: 150, precoComImposto: 180 }
newLine();
