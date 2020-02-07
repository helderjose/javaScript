var getUser = (id, callback) => {
    var user = {
      id: id,
      name: 'Vikram'
    };
  
    setTimeout(() => {
      callback(user);
    }, 3000);
  };
  
  getUser(31, (userObject) => {
    console.log(userObject);
  });
  


  var fruits = ["Banana", "Orange", "Apple"];

function testSave(fruitsAux) {
    console.log(fruitsAux);
    var fruitsToSave = fruitsAux;

    if(fruitsToSave.length === 0) {
        return;
    }

    

    fruits.shift();
    testSave(fruits);
}

function start(){
    testSave(fruits);
}

start();