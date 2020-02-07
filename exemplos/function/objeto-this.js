
/*
var pessoa = {
    nome: "Maria",
    idade: 20,
    getIdade: function(){
        return this.idade;
    }
};

console.log(pessoa);
console.log(pessoa.getIdade());
*/

var getIdade = function () {
    // console.log("this:", this)
    return this.idade; //o this muda dependendo do contexto que a funciont é chamada.
}

var pessoa = {
    nome: "Maria",
    idade: 20,
    getIdade: getIdade
};

console.log(pessoa); // { nome: 'Maria', idade: 20, getIdade: [Function: getIdade] }

// chamada de escopo global.
/* nessa chamada o this é o objeto node.js, caso execute o arquivo com node.js
 ou o objeto Window, caso execute pelo navegador. */
console.log(getIdade()); // undefined

//chamada do escopo pessoa.
//// nessa chamada o this é o objeto pessoa.
console.log(pessoa.getIdade()); //20




