const obj = {
    prop1: 1,
    prop2: 2
}

/*
Em javascript, objeto é passado por referência, então obje2 não recebe um objeto novo,
ele aponta para o mesmo objeto que o obj aponta.
*/
const obj2 = obj

console.log(obj2 === obj)   // true

/*
executar o exemplo
node /dados/programacao-2/javaScript/javaScript/exemplos/spread-operator/spread-01.js
*/