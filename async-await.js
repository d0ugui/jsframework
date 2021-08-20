//* Async & await
//* Toda função async, retorna inplicitamente uma promise

// let page = 1

// const getPosts = async (url) => {
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)
// }

// getPosts(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)


async function fetchProdutos(url) {
  const response = await fetch(url);
  const data = await response.json()

}

const requisicao = fetchProdutos('https://ranekapi.origamid.dev/json/api/produto')
