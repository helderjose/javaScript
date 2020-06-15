/*
  Definition and Usage:
  The setInterval() method calls a function or evaluates an
  expression at specified intervals (in milliseconds).
  The setInterval() method will continue calling the function
  until clearInterval() is called, or the window is closed.
  The ID value returned by setInterval() is used as the parameter for
  the clearInterval() method.
  Tip: 1000 ms = 1 second.
  Tip: To execute a function only once, after a specified number
  of milliseconds, use the setTimeout() method.

  Syntax:
  setInterval(function, milliseconds, param1, param2, ...)

  Parameter Values:
  Parameter 	            Description
  function 	              Required. The function that will be executed
  milliseconds 	          Required. The intervals (in milliseconds) on how often to execute the code. If the value is less than 10, the value 10 is used
  param1, param2, ... 	  Optional. Additional parameters to pass to the function (Not supported in IE9 and earlier)

  Technical Details:
  Return Value: 	A Number, representing the ID value of the timer that is set. Use this value with the clearInterval() method to cancel the timer
*/

setInterval(() => {
  console.log("Hello interval.")
}, 1000);