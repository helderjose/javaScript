// com parâmetros


//função construtora. O que tem this é public
var Pessoa = function(nome, idade, cor) {
  this.nome = nome; // public
  this.idade = idade; //public
   _cor = cor; //private

   // public
   this.getCor = function(){
       return _cor;
   }
};


console.log(new Pessoa("Pedro", 20, 'vermelho')); //{ nome: "Pedro", idade: 20, getCor: [Function] }
console.log(new Pessoa("Maria", 30, 'amarelo')); //{ nome: "Maria", idade: 30, getCor: [Function] }
console.log(new Pessoa("Maria", 30, 'azul')); //{ nome: "Maria", idade: 30, getCor: [Function] }

var jonas = new Pessoa("Jonas", 40, 'preto');
console.log(jonas.nome);//jonas
console.log(jonas.cor);//undefined
console.log(jonas.getCor);//[Function]
console.log(jonas.getCor());//preto

