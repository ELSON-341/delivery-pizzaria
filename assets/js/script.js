'use strict'

const cartContainer = document.querySelector('#cart-container')

document.querySelector('#cart').onclick = () => {
    cartContainer.classList.toggle('active')
}