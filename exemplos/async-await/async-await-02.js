// async retorna uma promise
// async function getName () {
//   let name;
//   await setTimeout(() => {
//     name =  "Homer Simpson"
//   }, 2000);

//   return name;
// }

// async function getName() {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });
// }

async function getName () {
  let name;
  return new Promise(resolve => setTimeout(() => {
    {name: "aaaa"}
  }, 2000))

  return name;
}
async function main () {
  let name = await getName();
  console.log(name.name); // undefined
}


main();