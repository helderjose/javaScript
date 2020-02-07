/*
https://www.w3schools.com/jsref/jsref_forEach.asp
*/

var pessoas = ["maria", "joaoo", "jonas"];

pessoas.forEach(print)

/*
element -> cada elemento do array.
index -> index do array que estah sendo aplicado o foreach.
arr -> o array que estah sendo aplicado o foreac.
*/
function print(element, index, arr) {
    console.log("index: ", index, "element: ", element, "arr: ", arr);
}
