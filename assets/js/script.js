'use strict'
// Elementos
const cartContainer = document.querySelector('#cart-container')
const loginForm = document.querySelector('#login-form')

// Eventos
document.querySelector('#cart').onclick = () => {
    cartContainer.classList.toggle('active')

    loginForm.classList.remove('active')
}

document.querySelector('#login').onclick = () => {
    loginForm.classList.toggle('active')

    cartContainer.classList.remove('active')
}
