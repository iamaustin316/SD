'use strict';

var isMobile = {
    Android: function Android() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
};

function ga_click(action, category_pc, category_m) {
    var category = isMobile.any() ? category_m : category_pc;
    gtag('event', action, { 'event_category': category });
}
$(function () {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    var programTL = new TimelineMax({
        paused: true
    });
    programTL.from('.program__main-title', 1, { y: -40, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3) }).from('.program__offer', 1, { y: -40, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.5').from('.program-detail', 1, { y: -40, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.5').from('.program__pili-aunt-img', 1, { y: 40, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3), onComplete: function onComplete() {
            TweenMax.to('.btn-get-sn__hand', 0.3, { y: -5, ease: Power0.easeNone, repeat: 999, yoyo: true });
        } }, '-=0.5');
    $('.wrap').imagesLoaded(function () {
        $('.preload').addClass('is-loaded');
        document.getElementById('preload').addEventListener('transitionend', function (e) {
            if (e.propertyName == 'opacity') {
                $('.preload').remove();
                programTL.play();
            }
        });
    });
    var btnToggle = document.querySelector('#btn-toggle');
    var siteNav = document.querySelector('#site-nav');
    btnToggle.addEventListener('click', function () {
        this.classList.toggle('is-active');
        siteNav.classList.toggle('is-active');
    });
    var winnerBtn = document.querySelector('[href="#winner"]');
    winnerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('得獎名單尚未公布!');
    });
    var programSwiper = new Swiper('.program-slide', {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        navigation: {
            nextEl: '.program-control__btn-next',
            prevEl: '.program-control__btn-prev'
        },
        breakpoints: {
            640: {
                slidesPerView: 1
            }
        }
    });
});