/*
Simula um enum.
Obs: para javascript antigo.
*/

var profiles = (function () {

  var _MASTER = {
      "id": 1,
      "name": 'MASTER'
  };

  return {
    MASTER: _MASTER
  }
})();

console.log(profiles.MASTER.id)