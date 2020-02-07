/*
https://www.w3schools.com/jsref/met_win_setinterval.asp

The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
Tip: 1000 ms = 1 second.
Tip: To execute a function only once, after a specified number of milliseconds, use the setTimeout() method.

syntax: setInterval(function, milliseconds, param1, param2, ...)
*/

setInterval(
    function() {
        console.log('Hello interval.');
    }
, 2000);