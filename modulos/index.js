//* Module
//* Servem para quebrar o código em diferentes arquivos, para facilitar a organização e compartilhamento de código comum.

import { areaQuadrado, perimetroQuadrado } from './quadrado.js'
import numeroAleatorio from './numeroAleatorio.js'
import Circulo from './circulo.js'

console.log(areaQuadrado(4))
console.log(perimetroQuadrado(6))
console.log(numeroAleatorio())

console.log(Circulo.area(5))
console.log(Circulo.circunferencia(5))
console.log(Circulo.aleatorio())
