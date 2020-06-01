// teste 1
// var ages; // tere undefined. Erro: Cannot read property 'filter' of undefined

// teste 2
// var ages = [32, 33, 16, 40];
ages = [];  // teste com array vazio. Retorna array vazio.
// ages = null; // teste null. Erro: Cannot read property 'filter' of null

var filtered;

function checkAdult(age) {
    return age >= 18;
}

filtered =  ages.filter(checkAdult);

console.log("ages:", ages);
console.log("filtered:", filtered);