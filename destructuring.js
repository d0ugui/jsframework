//* Utilizando as propriedades do objeto sem desestruturação
// function handleMouseMove(event) {
//   const clientX = event.clientX
//   const clientY = event.clientY
//   console.log(clientX, clientY)
// }

// document.documentElement.addEventListener('mousemove', handleMouseMove)

//* Desestruturando as propriedades do Objeto
// function handleMouseMove({ clientX, clientY }) {
//   console.log(clientX, clientY)
// }

// document.documentElement.addEventListener('mousemove', handleMouseMove)

//* Desestruturando as propriedades do Array
// const frutas = ['Banana', 'Uva']
// const [fruta1, fruta2] = frutas
// console.log(fruta1, fruta2)


// function makeCalculation({x, y: d, z = 4}) {
//   return Math.floor((x + d + z) / 3)
// }

//* This is the same as:
// function makeCalculation(obj) {
//   const {x, y: d, z = 4} = obj
//   return Math.floor((x + d + z) / 3) 
// }

// const obj = {x: 3.6, y: 7.8}
// console.log(makeCalculation(obj))

//* Which is the same as 
// function makeCalculation(obj) {
//   const x = obj.x
//   const d = obj.y
//   const z = obj.z === undefined ? 4 : obj.z
//   return Math.floor((x + d + z) / 3)
// }

// const obj = {x: 3.6, y: 7.8}
// console.log(makeCalculation(obj))

//* In react
function UserGitHubImg({username = 'ghost', ...props}) {
  return <img src={`https://github.com/${username}.png`} {...props} />
}

