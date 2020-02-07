var myVar;

function myFunction() {
  myVar = setTimeout(function(){ console.log("Hello") }, 2000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

myFunction();

//nada vai acontecer, porque essa função dá um clearTimeout no setTimeout.
myStopFunction(); // só imprime se comentar essa linha