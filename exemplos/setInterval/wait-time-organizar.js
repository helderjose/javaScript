/*
 Obs: Conta o progresso do intervalo de tempo informado.
 Indicado para usar quando quiser exibir a porcentagem
 do tempo esperado sem requisição ajax. Para ajax tem um
 exemplo na pasta de async-await
 Ex:
 timeToWait = 5000, conta a porcentagem do tempo de 5 segundos
 inde um em um por cento.
*/
 console.time();

const TIME_TO_WAIT = 2000;
const ONE_PERCENT = TIME_TO_WAIT / 100;
let progressPercentage = 0;

// para imprimir o 0% quando o timeToWait for muito grande.
updateInformation();

let myInterval = setInterval(() => {
  updateInformation();

  if(progressPercentage > 100) {
    clearInterval(myInterval);
    console.timeEnd();
  }

}, ONE_PERCENT);

function updateInformation() {
  console.log(progressPercentage + "%");
  progressPercentage++;
}





/*
  Palavras chaves:
  progress bar, barra de progresso.
  mostrar porcentagem, exibir porcentagem.
  mostrar progresso, exibir progresso.
*/