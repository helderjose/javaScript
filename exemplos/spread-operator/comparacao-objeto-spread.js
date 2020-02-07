const obj = {
    prop1: 1,
    prop2: 2
}

/*
Aqui é o mesmo que dar um new Object.
*/
const obj2 = { ...obj }

console.log(obj2 === obj)   // false

/*
executar o exemplo
node /dados/programacao-2/javaScript/javaScript/exemplos/spread-operator/spread-01.js
*/