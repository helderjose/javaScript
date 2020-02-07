/*
In this example, we also output the parameters that were passed to
the alertFunc() function (does not work in IE9 and earlier).
*/

var myVar;
var demo = '';
var demo2 = '';

function myStartFunction() {
  myVar = setTimeout(alertFunc, 1000, "First parameter", "Second parameter");
}

function alertFunc(param1, param2) {
  demo += "Hello ";
  console.log('demo:', demo);

  demo2 = "Parameters passed to alertFunc(): \n" + param1 + "\n" + param2;
  console.log('demo2:', demo2);
}

myStartFunction();