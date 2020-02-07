/*
Usando um objeto para simular uma criação de escopo.
Evite usar dessa forma porque javascript não tem modificadores de acesso, então,
a variável pode ser acessada diretamente.
*/

var counter = {
  value: 0,
  add: function() {
    return ++this.value;
  }
};

var itens = {
  value: [],
  add: function(item) {
    this.value.push(item);
    return this.value;
  }
};

console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3
console.log(counter.add()); // 4
console.log('-----------------------')

console.log(itens.add("A")); // [ 'A' ]
console.log(itens.add("B")); // [ 'A', 'B' ]
console.log(itens.add("C")); // [ 'A', 'B', 'C' ]
