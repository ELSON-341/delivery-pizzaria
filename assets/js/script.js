'use strict'
// Elementos
const cartContainer = document.querySelector('#cart-container')
const loginForm = document.querySelector('#login-form')
const menuContainer = document.querySelector('header nav')

// Eventos
document.querySelector('#cart').onclick = () => {
    cartContainer.classList.toggle('active')
    loginForm.classList.remove('active')
    menuContainer.classList.remove('active')
}

document.querySelector('#login').onclick = () => {
    loginForm.classList.toggle('active')
    cartContainer.classList.remove('active')
    menuContainer.classList.remove('active')
}

document.querySelector('#menu').onclick = () => {
    menuContainer.classList.toggle('active')
    cartContainer.classList.remove('active')
    loginForm.classList.remove('active')
}

window.onscroll = () => {
    cartContainer.classList.remove('active')
    loginForm.classList.remove('active')
    menuContainer.classList.remove('active')
}

// slide with CDN swiper
const swiper1 = new Swiper('.home-slider', {
    autoplay: {
        Delay:2500,
        disableOnInteraction: false,
    },
    grapCursor: true,
    loop:true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})

const swiper = new Swiper('.menu-slider', {
    grapCursor: true,
    loop:true,
    centeredSlides: true,
    spaceBetween:20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
})