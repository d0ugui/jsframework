//* Rest & Spread
//* Rest = Permite representar um número indefinido de argumentos na forma de um Array.
//* Spread = Permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos.

// //* Com a utilização do operador REST, um array será criado (clients) e os valores serão inseredos
// function showList(empresa, ...clients) {
//   console.log(empresa)
//   console.log(clients)
// }
// showList('Origamid', 'João', 'Douglas', 10)

// //* Com a utilização do operador SPREAD, os elementos do array serão espalhados
// const numeros = [1, 2, 4, 5, 6, 7, 8, 9, 10]
// console.log(Math.max(...numeros))

// //* Criando um array com spread
// const items = document.querySelectorAll('li');

// [...items].map((item) => {
//   console.log(item)
// })

// console.log(items)

// //* Clonando objeto com spread
// const carro = {cor: 'Azul', portas: 4, ano: 2020}
// const cloneCarro = {...carro, turbo: true}

//* Shallow Cloning - clone supercial, não é totalmente a mesma coisa que existia
// class Transporte {
//   constructor() {
//     this.terrestre = true
//   }
//   andar() {
//     console.log('Andou')
//   }
// }

// class Carro extends Transporte {
//   constructor(cor, portas) {
//     super()
//     this.cor = cor
//     this.portas = portas
//   }
// }

// const carro = new Carro('vermelho', 4)
// const cloneCarro = { ...carro }

const arr = [5, 6, 7, 8, 9]
console.log(Math.max(...arr))

// is the same as 
// console.log(Math.max.apply(null, arr))

const obj1 = {
  a: 'a from obj1',
  b: 'b from obj1',
  c: 'c from obj1',
  d: {
    e: 'e from obj1',
    f: 'f from obj1',
  },
}
const obj2 = {
  b: 'b from obj2',
  c: 'c from obj2',
  d: {
    g: 'g from obj2',
    h: 'g from obj2',
  },
}

console.log({...obj1, ...obj2})

// is the same as
console.log(Object.assign({}, obj1, obj2))