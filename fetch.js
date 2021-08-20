//* Fetch
//* Envia requisições assíncronas para o servidor. Serve para acessarmos/escrevermos dados em apis externas.

// const requisicao = fetch('https://ranekapi.origamid.dev/json/api/produto')
//   .then(response => response.json())
//   .then(data => {
//     document.querySelector('#test').innerHTML = data.title
//     console.log(data.title)
//   })

// console.log(requisicao)

const data = {
  id: "andrerafa",
  nome: "Andre",
  email: "andrerafa@origamid.com",
  senha: "123456",
  cep: "123456",
  rua: "Ali Perto",
  numero: "230",
  bairro: "Botafogo",
  cidade: "Rio de Janeiro",
  estado: "Rio de Janeiro"
}

fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
