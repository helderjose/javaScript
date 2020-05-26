function getName () {
  setTimeout(() => {
    return "Homer Simpson"
  }, 2000);
}

function main () {
  let name = getName();
  console.log(name); // undefined
}


main();