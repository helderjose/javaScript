https://www.w3schools.com/jsref/jsref_filter.asp

var ages = [32, 33, 16, 40];
var filtered;

function checkAdult(age) {
    return age >= 18;
}

filtered =  ages.filter(checkAdult);

console.log(ages);
console.log(filtered)


// colocar no arquivo de exemplos de foreach, fazer teste de mesa para entender, e usar como exercído de qual será a saída
var a1 = ["a", "b"]
var a2 = ["A", "B"]

a1.forEach(el => {
    var test = false;
    var a1Item = el;

    a2.forEach(function(el){
        // console.log(el, test);
        // test = true;
        // console.log(a2)
        if(a1Item === el){
            test = true;
        }
    });
    if(!test) {
        a2.push(a1Item)
    }
})

console.log(a2)




// var a1 = ["a", "b"]
// var a2 = ["A", "B"]

// a1.forEach(el1 => {
//     var test = false;
//     // var el1 = el;

//     a2.forEach(function(el){
//         // console.log(el, test);
//         // test = true;
//         // console.log(a2)
//         if(el1 === el){
//             test = true;
//         }
//     });
//     if(!test) {
//         a2.push(el1)
//     }
// })

// console.log(a2)