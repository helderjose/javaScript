/*
Simula um enum.
Obs: para javascript antigo.
*/

var profiles = (function () {
  var _MASTER = 1;
  var _ADMINISTRATOR = 2;
  var _CLIENT_OPERADOR = 3;

  return {
    MASTER: _MASTER,
    ADMINISTRATOR: _ADMINISTRATOR,
    CLIENT_OPERADOR: _CLIENT_OPERADOR
  }
})();

console.log(profiles.MASTER)
console.log(profiles.ADMINISTRATOR);
console.log(profiles.CLIENT_OPERADOR)
console.log("\n\n")

// teste alterar valor
// tentar fazer um que nao tenha como alterar o valor. Olhar os exemplos de function, pode ajudar.
profiles.MASTER = 33
console.log(profiles.MASTER) // 33