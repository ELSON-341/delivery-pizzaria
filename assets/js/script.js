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

// slide banner
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

// slide menu
const swiper1 = new Swiper('.menu-slider', {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
})

const modalContainer = document.querySelector('#menu-modal-container')
const modals = modalContainer.querySelector('#menu-modal')

document.querySelectorAll('#menu-section .box').forEach((menu) => {
    menu.onclick = () => {
        modalContainer.style.display = 'flex'
        const name = menu.getAttribute('data-name')

        modals.forEach((modal) => {
            const modalTarget = getAttribute('data-target')
            console.log(modalTarget);
            if(name === modalTarget) {
                modal.classList.add('active')
            }
        })
    }
})

modalContainer.querySelector('#close').onclick = () => {
    modalContainer.style.display = 'none'
    modals.forEach((moldal) => {
        moldal.classList.remove('active')
    })
}