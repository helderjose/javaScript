/*
Os códigos não funcionam, só está na extensão .js para ficar colorido e
enxergar melhor.
*/

/*
se descomentar a linha 1 e comentar a linha 2, cria o mesmo objeto, se alterar um altera todos.cuidado.
Isso aconteceu trabalhando com AngularJs, quando eu alterava o valor de uma taxa, alterava de todas.
*/
function preencheTaxasNulas() {
    resultadoFiltrado.forEach(produto => {
    // var taxaAdmNova = newTaxaAdmVazia();//linha 1
    var taxaAdmNova;

    for(i = 0; i < produto.taxas.length; i++) {
        taxaAdmNova = newTaxaAdmVazia(); //linha 2
        if(!produto.taxas[i]) {
        taxaAdmNova.codEmp = produto.codEmp;
        taxaAdmNova.codLoja = produto.codLoja;
        taxaAdmNova.codOperadora = produto.codOperadora;
        taxaAdmNova.codProduto = produto.codProduto;
        taxaAdmNova.nmeLoja = produto.nmeLoja;
        taxaAdmNova.nmeOperadora = produto.nmeOperadora;
        taxaAdmNova.nmeProduto = produto.nmeProduto;
        taxaAdmNova.codUsuario = produto.codUsuario;
        produto.taxas[i] = taxaAdmNova;
        }
    }
    });
}