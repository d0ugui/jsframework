//* Expressões

const grupoA = 100;
const grupoB = 300;
const vencedor = grupoA > grupoB ? 'Grupo A é o vencedor' : 'Grupo B é o vencedor'
const vencedorA = grupoA > 50 && 'Grupo A é o vencedor' 

console.log(vencedor)
console.log(vencedorA)

const areaQuadrado = (l) => l * l // Uma arrow function também é uma expressão

// //* Bloco de if não é uma expressão, uma opção é usar o operador ternário
// if (grupoA > grupoB) {
//   console.log("Teste")
// }