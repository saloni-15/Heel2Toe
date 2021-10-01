$(window).ready(function () {
    $('.preloading').removeClass('loading');
    $('.menu-icon').on('click', function () {
        $('nav ul').toggleClass('showing');
    });
});

// Scrolling Effect

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});

// Back To Top Button Effect
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// const preloader = document.querySelector('.preloading');
// window.addEventListener('load', () => {
//     preloader.classList.remove('loading');
// });
