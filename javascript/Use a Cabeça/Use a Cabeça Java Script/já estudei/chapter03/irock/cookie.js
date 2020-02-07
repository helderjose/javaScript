function writeCookie(name, value, days) {
  // By default, there is no expiration so the cookie is temporary
  //por padrão, não há expiração. Então, o cookie é temporário
  var expires = "";

  // Specifying a number of days makes the cookie persistent
  //especificar um número de dias torna o cookie persistente.
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }

  // Set the cookie to the name, value, and expiration date
  //Atribua nome, valor e data de validade ao cookie.
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  // Find the specified cookie and return its value
  //Busque o cookie especificado e retorne seu valor
  var searchName = name + "=";
  var cookies = document.cookie.split(';');
  for(var i=0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == ' ')
      c = c.substring(1, c.length);
    if (c.indexOf(searchName) == 0)
      return c.substring(searchName.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  // Erase the specified cookie
  //Apague o cookie especificado
  writeCookie(name, "", -1);
}
