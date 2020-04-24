

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  let result = ages.some(checkAdult);
  console.log(result)
}

myFunction();// true
