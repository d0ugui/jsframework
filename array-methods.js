//* Arrays methods 
//* Map, filter e reduce, esses métodos retornam o resultado em um novo array

const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
];

const precosFiltro =  precos.filter(preco => preco.includes('R$'))
// console.log(precosFiltro)

const precosNumeros = precosFiltro.map((preco) => { 
  return +preco.replace('R$ ', '') // + transformando string para number
})
// console.log(precosNumeros)

const total = precosNumeros.reduce((acc, item) => acc + item)
// console.log(total)


const dogs = [
  {
    id: 'dog-1',
    name: 'Poodle',
    temperament: [
      'Intelligent',
      'Active',
      'Alert',
      'Faithful',
      'Trainable',
      'Instinctual',
    ],
  },
  {
    id: 'dog-2',
    name: 'Bernese Mountain Dog',
    temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
  },
  {
    id: 'dog-3',
    name: 'Labrador Retriever',
    temperament: [
      'Intelligent',
      'Even Tempered',
      'Kind',
      'Agile',
      'Outgoing',
      'Trusting',
      'Gentle',
    ],
  },
]

console.log(dogs.find(dog => dog.name === 'Bernese Mountain Dog')) // {id: 'dog-2', name: 'Bernese Mountain Dog', ...etc}
console.log(dogs.some(dog => dog.temperament.includes('Aggressive'))) // False
console.log(dogs.some(dog => dog.temperament.includes('Trusting'))) // True
console.log(dogs.every(dog => dog.temperament.includes('Trusting'))) // False
console.log(dogs.every(dog => dog.temperament.includes('Intelligent'))) // True
console.log(dogs.map(dog => dog.name)) // ['Poodle', 'Bernese Mountain Dog', 'Labrador Retriever'])
console.log(dogs.filter(dog => dog.temperament.includes('Faithful'))) // [{id: 'dog-1', ..etc}, {id: 'dog-2', ...etc}]
console.log(dogs.reduce((allTemperaments, dog) => {
  return [...allTemperaments, ...dog.temperament]
}, [])) // [ 'Intelligent', 'Active', 'Alert', ...etc ]

