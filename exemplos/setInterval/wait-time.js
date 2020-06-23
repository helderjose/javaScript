/*
 Obs: Esse não imprime o mesmo valor duas vezes, então,
 dá para perceber um certo padrão de repetição.
*/

let timeToWait = 15000;
let feedbackSpeedy = 500;
let counter = 0;
let currentFeedback = 0;
let lastFeedback = -1;

let myInterval = setInterval(() => {

  if(counter > timeToWait) {
    counter = timeToWait;
    clearInterval(myInterval)
  }

  currentFeedback = Math.round((counter / timeToWait) * 100);

  if (currentFeedback !== lastFeedback) {
    console.log(currentFeedback + "%");
    lastFeedback = currentFeedback;
  }

  counter += feedbackSpeedy

}, feedbackSpeedy);



/*
  Palavras chaves:
  progress bar, barra de progresso.
  mostrar porcentagem, exibir porcentagem.
  mostrar progresso, exibir progresso.
*/