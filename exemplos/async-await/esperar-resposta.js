/*
  Esperar uma api responder para continuar o fluxo.
*/

let isOutagesFetched = false;
let outages;

// api - backend
function apiGetOutages() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('api outages resolved');
    }, 2000);
  });
}

// fica verificando se a api de outages respondeu
function verifyIsOutagesFetched() {
  return new Promise((resolve, reject) => {
    let interval =  setInterval(() => {
      console.log("No interval")
      if(isOutagesFetched) {
        resolve("ok");
        clearInterval(interval)
      }
    }, 500);
  })
}

// chama a api de outages
async function getOutages() {
  console.log("- getOutages() - inicio")
  outages = await apiGetOutages();
  isOutagesFetched = true; // eh bom ficar no bloco finally do try-catch-finally
  console.log("- getOutages() - fim")
}

// simula a escolha de um produto
// async function setProduct() {
//   console.log("+ setProduct() - inicio")
//   await verifyIsOutagesFetched(); // fica parado aqui ateh ver que a api de outages respondeu
//   console.log("+ isOutagesFetched: ", isOutagesFetched)
//   console.log("+ outages: ", outages)
//   console.log("+ setProduct() - fim")
// }

// tbm funciona
async function setProduct() {
  console.log("+ setProduct() - inicio")

  await new Promise((resolve, reject) => {
    let interval =  setInterval(() => {
      console.log("No interval")
      if(isOutagesFetched) {
        clearInterval(interval)
        resolve();
      }
    }, 500);
  })

  console.log("+ isOutagesFetched: ", isOutagesFetched)
  console.log("+ outages: ", outages)
  console.log("+ setProduct() - fim")
}

function main() {
  getOutages();
  setProduct();
}

main();



/*
  Palavras chaves:
  Esperar a api responder para continuar o fluxo.
  Travar o fluxo até a api responder.
  Verificar se a api respondeu.
  Esperar promise.
*/