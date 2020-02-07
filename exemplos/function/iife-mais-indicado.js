
/*
Usando IIFE
Immediately-Invoked Function Expression.
O jquery e o angular usa essa, por isso não preciso dar um "new Jquery ou new Angular"
*/
var counter = (function () {
    var _value = 0;
    // o que eu retorno é public
    return {
        add: function () {
            return ++_value;
        },
        reset: function () {
            _value = 0;
        }
    };
})();


//Evolução do IIFE. Melhor usar essa
var counter2 = (function () {
    var _value = 0;
    var _add = function () {
        return ++_value;
    };
    var _reset = function () {
        _value = 0;
    };
    // o que eu retorno é public
    return {
        add: _add,
        reset: _reset
    };
})();

console.log(counter.value); // undefined
console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3
counter.reset();
console.log("chamei reset");
console.log(counter.add()); // 1
console.log('----------------------------------------------------')

console.log(counter2.value); // undefined
console.log(counter2.add()); // 1
console.log(counter2.add()); // 2
console.log(counter2.add()); // 3
counter2.reset();
console.log("chamei reset");
console.log(counter2.add()); // 1