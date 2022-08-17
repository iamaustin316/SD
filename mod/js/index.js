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
    var introTL = new TimelineMax({
        paused: true
    });
    TweenMax.set('#intro-cut-1', { transform: 'translate3d(30%,0,0)', autoAlpha: 0 });
    TweenMax.set('#intro-cut-2', { transform: 'translate3d(30%,0,0)', autoAlpha: 0 });
    TweenMax.set('#intro-cut-3', { transform: 'translate3d(30%,0,0)', autoAlpha: 0 });
    introTL.from('.intro__wall', 1, { autoAlpha: 0, ease: Power4.easeInOut }).from('#intro-btn-skip', 1, { y: 50, autoAlpha: 0, ease: Power4.easeInOut }).to('#intro-cut-1', 0.7, { transform: 'translate3d(0,0,0)', autoAlpha: 1, ease: Power4.easeInOut }, '-=1').to('#intro-cut-1', 0.4, { transform: 'translate3d(-30%,0,0)', delay: 1, autoAlpha: 0, ease: Power4.easeInOut }).to('#intro-cut-2', 0.7, { transform: 'translate3d(0,0,0)', autoAlpha: 1, ease: Power4.easeInOut }).to('#intro-cut-2', 0.4, { transform: 'translate3d(-30%,0,0)', delay: 1, autoAlpha: 0, ease: Power4.easeInOut }).to('#intro-cut-3', 1.3, { transform: 'translate3d(0,0,0)', autoAlpha: 1, ease: Power4.easeInOut, onComplete: function onComplete() {
            introEnd();
        } });
    var indexTL = new TimelineMax({
        paused: true
    });
    indexTL.from('.home__aunt-img', 1, { y: 90, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3) }).from('.home__main-title', 1, { y: -40, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=1').from('.home__glows-img', 0.5, { autoAlpha: 0, ease: Power1.easeOut }, '-=0.5').from('.home__aunt-call', 1, { y: -40, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=0.5').from('.home__btn-get', 1, { y: -40, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3) }, '-=1').from('.particle', 0.5, { autoAlpha: 0, ease: Power4.easeInOut }).from('.home__btn-scroll', 0.5, { autoAlpha: 0, onComplete: function onComplete() {
            TweenMax.to('.home__btn-scroll', 0.3, { y: -5, ease: Power0.easeNone, repeat: 999, yoyo: true });
            TweenMax.to('.home__btn-get', 0.3, { scale: 1.05, ease: Power0.easeNone, repeat: 999, yoyo: true });
        } });

    $('.wrap').imagesLoaded(function () {
        $('.preload').addClass('is-loaded');
        document.getElementById('preload').addEventListener('transitionend', function (e) {
            if (e.propertyName == 'opacity') {
                $('.preload').remove();
                if (!window.location.hash) {
                    introTL.play();
                } else {
                    TweenMax.to('#intro', 1, { transform: 'translate3d(0,-120vh,0)', ease: Power4.easeInOut, onComplete: function onComplete() {
                            indexTL.play();
                        } });
                    $('.home__btn-get').trigger('click');
                }
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

    $('.site-nav__btn-link').eq(0).on('click', function (e) {
        e.preventDefault();
        $('.home__btn-get').trigger('click');
        return false;
    });

    $('#phone-call').on('click', function () {
        $(this).removeClass('is-active');
        setTimeout(function () {
            phoneAnswer.addClass('is-active');
            messageSn.fadeIn(800, function () {
                phoneCallVideo.play();
            });
        }, 1000);
    });

    $('.home__btn-get').on('click', function (e) {
        e.preventDefault();
        $('#phone-call').addClass('is-active');
        ga_click('pv', 'PV-number-1', 'PV-M-number-1');
        TweenMax.to('#phone-call-btn-accept', 0.4, { y: -20, ease: Power2.easeInOut, repeat: 999, yoyo: true });
        return false;
    });

    var isMobile = $('html').hasClass('mobile');

    if (!isMobile) {
        window.addEventListener('mousemove', _.debounce(function (e) {
            var j = Math.floor(e.pageX / window.innerWidth * 300);
            TweenMax.to('#particle', 2, {
                x: j / 10,
                ease: Power4.easeOut
            });
            TweenMax.to('.home__aunt-img', 2, {
                x: -j / 6,
                ease: Power4.easeOut
            });
            TweenMax.to('.home__glows-img', 2, {
                x: -j / 8,
                ease: Power4.easeOut
            });
        }, 300, true));
    }

    function introEnd() {
        TweenMax.to('#intro', 1, { transform: 'translate3d(0,-120vh,0)', delay: 3, ease: Power4.easeInOut, onComplete: function onComplete() {
                indexTL.play();
            } });
    }

    $('#intro-btn-skip').on('click', function () {
        TweenMax.to('#intro', 1, { transform: 'translate3d(0,-120vh,0)', ease: Power4.easeInOut, onComplete: function onComplete() {
                indexTL.play();
            } });
    });

    $('.sign-up').waypoint({
        handler: function handler(e) {
            ga_click('pv', 'Pv-list', 'Pv-M-list');
        },
        offset: '2%'
    });
    var lawContent = $('#law-content');

    $('.sign-up__btn-law').on('click', function (e) {
        e.preventDefault();
        lawContent.addClass('is-active');
    });

    $('#law-content-btn-close').on('click', function () {
        lawContent.removeClass('is-active');
    });

    var clipboard = new ClipboardJS('.message-ui__btn-copy');
    clipboard.on('success', function (e) {
        alert('序號複製成功!');
    });

    var phoneCallVideo = document.getElementById('phone-call-video');
    var phoneCall = $('#phone-call');
    var phoneAnswer = $('#phone-answer');
    var phoneAnswerUIBtnSn = $('#phone-answer-ui-btn-sn');
    var phoneAnswerUIBtnIntro = $('#phone-answer-ui-btn-intro');
    var messageSn = $('#message-sn');
    var messageProgram = $('#message-program');
    var getSnBtnIntro = $('#get-sn-btn-intro');
    var video1Prop = {
        ready: 0,
        state: 0,
        srcA: '',
        srcB: ''
    };
    var cut1VideoRequest = fetch('video/cut-1.mp4').then(function (response) {
        return response.blob();
    });
    cut1VideoRequest.then(function (blob) {
        video1Prop.srcA = URL.createObjectURL(blob);
        phoneCallVideo.src = video1Prop.srcA;
    });

    var cut2VideoRequest = fetch('video/cut-2.mp4').then(function (response) {
        return response.blob();
    });
    cut2VideoRequest.then(function (blob) {
        video1Prop.srcB = URL.createObjectURL(blob);
    });

    // $('#phone-call-btn-accept').on('click', function(){
    //     phoneCall.removeClass('is-active')
    //     setTimeout(function(){
    //         phoneAnswer.addClass('is-active')
    //         messageSn.fadeIn(800,function(){
    //             phoneCallVideo.play()
    //         });
    //     },1000)
    // })
    getSnBtnIntro.on('click', function (e) {
        e.preventDefault();
        phoneAnswer.scrollTop(0);
        phoneAnswerUIBtnSn.fadeOut(300, function () {
            if (isMobile) {
                phoneAnswerUIBtnIntro.fadeIn(300);
            }
        });
        phoneCallVideo.src = video1Prop.srcB;
        messageSn.fadeOut(800, function () {
            messageProgram.fadeIn(800, function () {
                ga_click('pv', 'PV-number-2', 'PV-M-number-2');
                phoneCallVideo.play();
            });
        });
    });

    phoneAnswerUIBtnSn.on('click', function (e) {
        e.preventDefault();
        phoneAnswer.animate({
            scrollTop: messageSn.offset().top
        }, 500);
        return false;
    });

    phoneAnswerUIBtnIntro.on('click', function (e) {
        e.preventDefault();
        phoneAnswer.animate({
            scrollTop: messageProgram.offset().top
        }, 500);
        return false;
    });

    messageSn.fadeIn(800);

    if (isMobile) {
        phoneAnswerUIBtnSn.fadeIn();
    }
    $('#phone-answer-btn-close').on('click', function () {
        phoneAnswer.removeClass('is-active');
    });
});