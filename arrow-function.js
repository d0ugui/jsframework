//* Arrow Functions
//* A principal diferença é o contexto do this. A arrow function não cria o próprio this.
//* Uma function cria um novo contexto para o this. A arrow function mantém o contexto existente.

//* Declaração de uma função 
// function upperName(name) {
// return name.toUpperCase()
// }

//* Expressão
// const upperName = function (name) {
// return name.toUpperCase()
// }

//* Arrow Function
// const upperName = (name) => name.toUpperCase()
// const countLetter = (word) => word.length
// console.log(upperName('Douglas'))
// console.log(countLetter('Douglas'))

// const getFive = () => 5
// const addFive = a => a + 5
// const divide = (a, b) => a / b

// //* This is the sama as:
// function getFive() {
//   return 5
// }

// function addFive(a) {
//   return a + 5
// }

// function divide(a, b) {
//   return a / b
// }


// //* In React
// function TeddyBearList({teddyBears}) {
//   return (
//     <ul>
//       {teddyBears.map(teddyBear => (
//         <li key={teddyBear.id}>
//           <span>{teddyBear.name}</span>
//         </li>
//       ))}
//     </ul>
//   )
// }

//* Arrow Function - contexto this
class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu)
    this.activeClass = 'active'
  }
  addActiveEvent() {
    this.menuElement.addEventListener('click', (event) => {
      event.target.classList.toggle(this.activeClass)
    })
  }
}

const menu = new Menu('.principal')
menu.addActiveEvent()

console.log(menu)
