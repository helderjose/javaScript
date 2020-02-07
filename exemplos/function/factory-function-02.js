// dê preferẽncia para o padrão IIFE. Evite usar esse.

var criarPessoa = function(nome, idade) {
  var _teste = "teste"; //"private"

  // o que setá no return é public
  return {
    _nome: nome,
    _idade: idade
  };
};

console.log(criarPessoa("Pedro", 20)); //{ _nome: 'Pedro', _idade: 20 }
console.log(criarPessoa("Maria", 30)); //{ _nome: 'Maria', _idade: 30 }
console.log('-----------------------------')

var jonas =  criarPessoa("Jonas", 30);
console.log(jonas.nome); //undefined
console.log(jonas._nome); //Jonas
console.log(jonas._teste); //undefined