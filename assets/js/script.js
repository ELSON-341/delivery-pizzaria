'use strict'
// Elementos
const cartContainer = document.querySelector('#cart-container')
const loginForm = document.querySelector('#login-form')
const menuContainer = document.querySelector('header nav')
console.log(menu);
console.log(loginForm);

// Eventos
document.querySelector('#cart').onclick = () => {
    cartContainer.classList.toggle('active')
    loginForm.classList.remove('active')
    menuContainer.classList.toggle('active')
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


