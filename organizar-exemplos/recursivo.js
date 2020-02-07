var fruits = ["Banana", "Orange", "Apple"];

function testSave(fruitsAux) {
    console.log(fruitsAux);
    var fruitsToSave = fruitsAux;

    if(fruitsToSave.length === 0) {
        return;
    }

    

    fruits.shift();
    testSave(fruits);
}

function start(){
    testSave(fruits);
}

start();