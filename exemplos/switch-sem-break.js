var num = 2 // executa os case 2, 3 e default, porque não tem break
// num = 1; //executa só o case 1 porque tem break

switch (num) {
  case 1:
    console.log("no 1");
    break;
  case 2:
    console.log("no 2");
  case 3:
    console.log("no 3");
  default:
    console.log("no default");
}

/*
Sem o break, executa todos so casos de pois que entrar em um.
*/