/*
 Obs: Conta o progresso do intervalo de tempo informado.
 Ex:
 timeToWait = 5000, conta a porcentagem do tempo de 5 segundos.
*/

let timeToWait = 15000;
let onePercent = timeToWait / 100;
let progressPercentage = 0;

// para imprimir quando o timeToWait for muito grande.
console.log(progressPercentage + "%");
progressPercentage++;

let myInterval = setInterval(() => {

  console.log(progressPercentage + "%");
  progressPercentage++;

  if(progressPercentage > 100) {
    clearInterval(myInterval)
  }
}, onePercent);



/*
  Palavras chaves:
  progress bar, barra de progresso.
  mostrar porcentagem, exibir porcentagem.
  mostrar progresso, exibir progresso.
*/