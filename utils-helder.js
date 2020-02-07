/*
Nova linha usando document.write().
*/
function newLine(repeat = 1){
    if(repeat > 1){
        ++repeat;
    }
    while(repeat > 0){
        document.write("<br/>");
        --repeat;
    }
}


// Always returns a random number between min (included) and max (excluded):
function getRndInteger1(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Always returns a random number between min and max (both included):
function getRndInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



