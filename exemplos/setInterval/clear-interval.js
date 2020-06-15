let isFinish = false;

setTimeout(() => {
  isFinish = true;
}, 2000);

let myInterval = setInterval(() => {
  console.log("Hello.");

  if(isFinish) {
    clearInterval(myInterval)
  }

}, 500);

/*
Saída:
Hello.
Hello.
Hello.
Hello.
*/