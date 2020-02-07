let carros = ["Ka", "Corsa", "Palio", "Gol"];


/*
Transforma o array em upper case.
*/
Array.prototype.upper = function() {
    for(i = 0; i < this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}

carros.upper();
console.log(carros);