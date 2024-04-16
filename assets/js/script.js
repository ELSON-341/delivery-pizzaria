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

// slide with CDN swiper
const swiper = new Swiper('.home-slider', {
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


