var currentNumber = 0;
var counter;
var timer_is_on = 0;

function timedCount() {
  console.log(currentNumber);
  
  currentNumber++;
  counter = setTimeout(timedCount, 1000);

  
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(counter);
  timer_is_on = 0;
}

startCount();
// stopCount();