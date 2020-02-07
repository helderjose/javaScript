
var helloWorld = function () {
    return function () {
        return "Hello World!";
    }
};

console.log(helloWorld); // [Function: helloWorld]
console.log(helloWorld()); // [Function]
console.log(helloWorld()()); // Hello World!



