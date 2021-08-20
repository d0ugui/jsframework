//* Tudo é objeto
//* Um objeto possui propriedades e métodos que podem ser diretos ou herdados (protótipo)

const menu = {
  class: '.principal',
  ativar() {
    const menuElement = document.querySelector(this.class)
    console.log(menuElement)
    console.log(menu.hasOwnProperty('class')) // Métodos herdado
  }
}

menu.ativar()
