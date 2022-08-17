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
    var eventTL = new TimelineMax({
        paused: true
    });
    eventTL.from('.event__main-title', 1, { y: -40, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3) }).from('.event__aunt-img', 1, { y: 40, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.5').from('.event-content', 0.5, { y: -40, autoAlpha: 0, ease: Power1.easeOut }, '-=0.5').from('.program-detail__order', 0.5, { y: -40, autoAlpha: 0, ease: Power1.easeOut }, '-=0.5').from('.particle', 0.5, { autoAlpha: 0, ease: Power4.easeInOut, onComplete: function onComplete() {
            TweenMax.to('.btn-get-sn__hand', 0.3, { y: -5, ease: Power0.easeNone, repeat: 999, yoyo: true });
        } });

    $('.wrap').imagesLoaded(function () {
        $('.preload').addClass('is-loaded');
        document.getElementById('preload').addEventListener('transitionend', function (e) {
            if (e.propertyName == 'opacity') {
                $('.preload').remove();
                eventTL.play();
            }
        });
    });
    var btnToggle = document.querySelector('#btn-toggle');
    var siteNav = document.querySelector('#site-nav');
    var winnerBtn = document.querySelector('[href="#winner"]');
    winnerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('得獎名單尚未公布!');
    });
    btnToggle.addEventListener('click', function () {
        this.classList.toggle('is-active');
        siteNav.classList.toggle('is-active');
    });

    var isMobile = $('html').hasClass('mobile');

    if (!isMobile) {
        $('.event-content__wrap').mCustomScrollbar({
            theme: 'dark-3'
        });
        window.addEventListener('mousemove', _.debounce(function (e) {
            var j = Math.floor(e.pageX / window.innerWidth * 300);
            TweenMax.to('#particle', 2, {
                x: j / 8,
                ease: Power4.easeOut
            });
            TweenMax.to('.event__aunt-img', 2, {
                x: -j / 6
            });
        }, 300, true));
    }
    var defaultTab = 0;
    $('.event-content__content').eq(defaultTab).fadeIn();
    $('.event-content__btn-tab').eq(defaultTab).addClass('is-active');
    $('.event-content__btn-tab').on('click', function () {
        $(this).addClass('is-active').siblings().removeClass('is-active');
        var $target = $('#' + $(this).data('target'));
        $target.stop().slideDown().siblings().stop().slideUp();
    });
});