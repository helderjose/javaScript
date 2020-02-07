
// parâmetros a mais são ignorados, mas posso acessá-los
var getIdade = function(extra) {
  console.log("arguments:", arguments);
  return this.idade + extra;
};

var pessoa = {
  nome: "Maria",
  idade: 20,
  getIdade: getIdade
};


/*
arguments: { '0': 2 }
22
*/
console.log(pessoa.getIdade(2));

/*
arguments: { '0': 2, '1': 1, '2': 3 }
22
*/
console.log(getIdade.call(pessoa, 2, 1, 3));

/*
arguments: { '0': 2, '1': 1, '2': 3 }
22
*/
console.log(getIdade.apply(pessoa, [2, 1, 3]));
