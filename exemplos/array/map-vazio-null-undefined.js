// var persons = [
//     { firstname: "Malcom", lastname: "Reynolds" },
//     { firstname: "Kaylee", lastname: "Frye" },
//     { firstname: "Jayne", lastname: "Cobb" }
// ];

// var persons = []; // retorna array vazio.
// var persons; // Erro: Cannot read property 'map' of undefined
// var persons = null; // Erro: Cannot read property 'map' of null


function getFullName(item) {
    var fullname = [item.firstname, item.lastname].join(" ");
    return fullname;
}

var arrayFullName = persons.map(getFullName);
console.log(arrayFullName);