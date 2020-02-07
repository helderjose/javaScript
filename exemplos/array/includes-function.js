//https://www.w3schools.com/jsref/jsref_includes_array.asp

listaSalvar = ["PLANO_1"];
planoParaSalvar = "PLANO_1"

if(!listaSalvar.includes(planoParaSalvar)) {
    listaSalvar.push(planoParaSalvar)
}

console.log(listaSalvar)