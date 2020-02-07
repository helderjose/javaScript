/* Remove os espaços no começo e do fim da String */
function trim(str){
    return str.replace(/^\s+|\s+$/g,"");
}

/* 
 * Retorna o array com os índices em ordem aleatória
 */
function arrayShuffle(array){
    for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
}