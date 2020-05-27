function getName() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Homer Simpson');
    }, 2000);
  });
}

async function main() {
  const name = await getName();
  console.log('Name:', name);
}

main();