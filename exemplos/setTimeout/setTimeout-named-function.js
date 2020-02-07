// You can also refer to "named" function

var myVar;

function myFunction() {
    myVar = setTimeout(printConsole, 2000);
}

function printConsole() {
    console.log('Hello');
}

myFunction();

/*
Esse é o valor de myVar, depois que é executado:

Timeout{
  _called:true,
  _idleTimeout:2000,
  _idlePrev:null,
  _idleNext:null,
  _idleStart:77,
  _onTimeout:[
    Function:printConsole
  ],
  _timerArgs:undefined,
  _repeat:null,
  _destroyed:false,
  [
    Symbol(asyncId)
  ]:6,
  [
    Symbol(triggerAsyncId)
  ]:1
}
*/