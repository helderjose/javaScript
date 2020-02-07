//retorna true ou false
function isValidEmail(mail) {

    var re = RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    return re.test(mail);
    /*if (er.test(mail) == true) {
        return true
    } else {
        return false
    }*/
}
/*
Recebe uma data no formato dd/mm/aaaa
Retorna true se a data existir.
Retorna false se a data nao existir.
*/
function validarData(dataValidar){

    var dataCerta;
    var dataValidarAux;
    var diaDigitado = 0;
    var mesDigitado = 0;
    var anoDigitado;

    anoDigitado = dataValidar.split("/")[2];
    mesDigitado = dataValidar.split("/")[1] - 1; //tira 1 porque os meses comeca em zero.
    diaDigitado = dataValidar.split("/")[0];

    //verifica soh o mes e o ano, o dia eh verificado comparando dataCerta com a dataDigitada
    if( (mesDigitado > 11) || (mesDigitado < 0) || isNaN(parseInt(anoDigitado))){
        return false;
    }

    dataCerta = new Date(anoDigitado, mesDigitado);
    dataValidarAux = new Date(anoDigitado, mesDigitado, diaDigitado);

    if( (dataValidarAux.getFullYear() !== dataCerta.getFullYear()) || dataValidarAux.getMonth() !== dataCerta.getMonth() ){
        return false;
    }

    return true;
}


