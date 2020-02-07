var taxasAdministrativas = [{
    "codTaxaAdministrativa": 481,
    "codEmp": 88130,
    "codLoja": 570839723,
    "codOperadora": 1,
    "codProduto": 1,
    "nmeLoja": "000000000027652",
    "nmeOperadora": "AMEX",
    "nmeProduto": "AMEX",
    "codUsuario": 2835,
    "nro_plano1": "0,02",
    "nro_plano2": null,
    "nro_plano3": null,
    "nro_plano4": null,
    "nro_plano5": null,
    "nro_plano6": null,
    "nro_plano7": null,
    "nro_plano8": null,
    "nro_plano9": null,
    "nro_plano10": null,
    "nro_plano11": null,
    "nro_plano12": null,
    "listaSalvar": [
      "PLANO_1",
      "PLANO_2",
      "PLANO_3"
    ],
    "mapaId": {
      "PLANO_1": 481
    }
  }]

  
// troca virgula por ponto 0,02 vira 0.02
function salvar(taxasAdministrativas) {
    taxasAdministrativas.forEach(taxaAdm => {
        //planoSalvar eh cada item do array listaSalvar
        taxaAdm.listaSalvar.forEach(planoSalvar => {
            var nro_plano = "nro_plano";

            nro_plano = nro_plano + planoSalvar.toUpperCase().replace("plano_".toUpperCase(), ""); //nro_plano = nro_plano1
            // console.log(planoSalvar, nro_plano)


            if(taxaAdm[nro_plano]) {
                taxaAdm[nro_plano] = taxaAdm[nro_plano].replace(",", ".");
            }
        });
    });
}

salvar(taxasAdministrativas);
// console.log(taxasAdministrativas)


// function salvar(taxasAdministrativas) {
//     taxasAdministrativas.forEach(taxaAdm => {
//         //planoSalvar eh cada item do array listaSalvar
//         taxaAdm.listaSalvar.forEach(planoSalvar => {
//             var planoSalvarAux = planoSalvar;
//             planoSalvarAux = planoSalvarAux.toUpperCase().replace("plano_".toUpperCase(), "");
//             planoSalvarAux = ("nro_plano" + planoSalvarAux).toUpperCase();
//             Object.keys(taxaAdm).forEach(element => {
//                 if(element.toUpperCase() === planoSalvarAux) {
//                     console.log(element, taxaAdm[element], planoSalvar);
                    
//                     // console.log(taxaAdm.element)
//                     // if(taxaAdm[element]) {
                        
//                     // }
//                     // console.log(taxaAdm[element])
//                     // taxaAdm[element] = taxaAdm[element].replace(",", ".");
//                 }
//             });
//         });
//     });
//     // console.log(taxasAdministrativas)
// }

// salvar(taxasAdministrativas);