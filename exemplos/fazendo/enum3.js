// Object.freeze

const profiles = {
  MASTER: 1,
  ADMINISTRATOR: 2,
  CLIENT_OPERADOR: 3
}

Object.freeze(profiles)

console.log(profiles.MASTER)
console.log(profiles.ADMINISTRATOR);
console.log(profiles.CLIENT_OPERADOR)
console.log()

// teste alterar valor
// o valor 33 nao serah atribuido
profiles.MASTER = 33
console.log(profiles.MASTER) // 1