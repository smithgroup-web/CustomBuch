// Активный класс у меню и плавная прокрутка для ХЕДЕРА
'use strict';
const headerHeight = document.querySelector('.header').offsetHeight;

class NavigationMenu {
    constructor(root) {
        this.root = root;
        this.cacheNodes();
        this.bindEvents();
    }

    cacheNodes() {
        this.links = this.root.querySelectorAll('.js-page-scroll');
    }

    bindEvents() {
        window.addEventListener("scroll", event => {
            let fromTop = window.scrollY + headerHeight;

            this.links.forEach(link => {
                let section = document.querySelector(link.hash);

                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    link.classList.add("menu__link_active");
                } else {
                    link.classList.remove("menu__link_active");
                }
            });
        });
    }
}

const menuNode = document.querySelector('.js-nav-menu');
const Menu = new NavigationMenu(menuNode);
//Плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]')
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 85
    }, 800);
    return false;
});
// Затемнение хедера при скролле
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');

    if (window.pageYOffset > 100) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }

}
// Параллакс для футболки
if (document.documentElement.clientWidth > 1199) {
document.addEventListener('mousemove', parallax);
    function parallax(e) {
        this.querySelectorAll('.intro__img').forEach(item => {
            var speed = item.getAttribute('data-speed');
            var x = (window.innerWidth - e.pageX * speed) / 300;
            var y = (window.innerWidth - e.pageY * speed) / 300;
            item.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    }
}
// Слайдер(Examples)
var swiper1 = new Swiper('.examples-swiper', {
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 60,
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.examples-arrow_next',
        prevEl: '.examples-arrow_prev',
    },
    simulateTouch: false,
});
// POPUP
// 1
$('.js-button-campaign-1').click(function () {
    $('.js-overlay-campaign-1').fadeIn();
    $('.html').addClass('lock');
    $('.main').css('filter', 'blur(5px)');
});
$('.js-close-campaign-1').click(function () {
    $('.js-overlay-campaign-1').fadeOut();
    $('.html').removeClass('lock');
    $('.main').css('filter', 'none');
});
// 2
$('.js-button-campaign-2').click(function () {
    $('.js-overlay-campaign-2').fadeIn();
    $('.html').addClass('lock');
    $('.main').css('filter', 'blur(5px)');
});
$('.js-close-campaign-2').click(function () {
    $('.js-overlay-campaign-2').fadeOut();
    $('.html').removeClass('lock');
    $('.main').css('filter', 'none');
});
// 3
$('.js-button-campaign-3').click(function () {
    $('.js-overlay-campaign-3').fadeIn();
    $('.html').addClass('lock');
    $('.main').css('filter', 'blur(5px)');
});
$('.js-close-campaign-3').click(function () {
    $('.js-overlay-campaign-3').fadeOut();
    $('.html').removeClass('lock');
    $('.main').css('filter', 'none');
});
// Меню и бургер для телефонов
$(document).ready(function () {
    $(".header__burger").click(function (e) {
        $(".header__burger, .menu").toggleClass("active");
        $("body").toggleClass('lock');
    });
    $(".menu__link").click(function (e) {
        $(".header__burger").removeClass("active");
        $(".menu").removeClass("active");
        $("body").removeClass("lock");
    });
});
// Изменение анимации на планшетах и телефонах при скролле
if (document.documentElement.clientWidth < 1199) {
    // introSocials
    let introSocials = document.querySelectorAll('.intro-socials>a');
    introSocials[0].classList.remove("fadeInUp");
    introSocials[1].classList.remove("fadeInUp");
    introSocials[2].classList.remove("fadeInUp");
    introSocials[0].classList.add("fadeInLeft");
    introSocials[1].classList.add("fadeInUp");
    introSocials[2].classList.add("fadeInRight");
    // intro-text
    document.querySelector('.intro__text').classList.remove('fadeInRight')
    document.querySelector('.intro__text').classList.add('fadeInLeft')
    // about-block
    let aboutBlock = document.querySelectorAll('.about-block');
    aboutBlock[1].classList.remove('fadeInUp');
    aboutBlock[1].classList.add('fadeInRight');
    aboutBlock[2].classList.remove('fadeInRight');
    aboutBlock[2].classList.add('fadeInLeft');
    // contacts-block
    let contactsBlock = document.querySelectorAll('.contacts-block');
    contactsBlock[1].classList.remove('fadeInUp');
    contactsBlock[1].classList.add('fadeInRight');
    contactsBlock[2].classList.remove('fadeInRight');
    contactsBlock[2].classList.add('fadeInLeft');
}