let itemsPerPage = 2;
let currentPage = 2; // usar: 1, 2, e 3

let total = ['maria', 'joao', 'fulano', 'ciclano', 'beltrano'];
let paginado = total.slice((currentPage - 1) * itemsPerPage, (currentPage * itemsPerPage));



for(let index = 0; index < paginado.length; index++) {
    console.log(paginado[index], total[(itemsPerPage * (currentPage - 1)) + index]);
}


// (itemsPerPage * (currentPage - 1)) + $index