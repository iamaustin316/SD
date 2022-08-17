/*!
 * app.js - https://www.facebook.com/newebdesignTW/
 * Version - 1.0.0
 * Copyright (c) 2017 newebdesignTW
 */
$(function() {

    "use strict";
    var $orientationTip = $('#orientation-tip');
    var app = {

        preload: function() {
            TweenMax.set($("#index-info"), { autoAlpha: 0, marginTop: -40 });
            TweenMax.set($(".index-product__pd-latte "), { autoAlpha: 0, x: -20 });
            TweenMax.set($(".index-product__pd-siciliano"), { autoAlpha: 0, x: 20 });
            TweenMax.set($(".index-product__sp-label"), { autoAlpha: 0, x: -20 });

            $(".progress__logo").fadeIn(1000, function() {
                progressTimer = setInterval(updateProgress, 1000 / 60);
                $(".progress__text").fadeIn(1000);
            });

            var $container = $('#progress'),
                $progressBar = $container.find('.progress-bar'),
                $progressText = $container.find('.progress__text'),
                imgLoad = imagesLoaded('body'),
                imgTotal = imgLoad.images.length,
                imgLoaded = 0,
                current = 0,
                progressTimer;

            imgLoad.on('progress', function() {
                imgLoaded++;
            });

            function updateProgress() {
                var target = (imgLoaded / imgTotal) * 100;
                current += (target - current) * 0.1;
                $progressBar.css({
                    height: current
                });

                $progressText.text('loading  ' + Math.floor(current) + "%");

                if (current >= 100) {
                    clearInterval(progressTimer);
                    $(document).scrollTop(0);
                    var initTimer = setTimeout(
                        function() {
                            $(".progress__logo").fadeOut(1000);
                            $(".progress__text").fadeOut(1000, function() {
                                $(".progress__progress-left").addClass("is-hide");
                                $(".progress__progress-right").addClass("is-hide");
                            });
                            app.init();
                            clearTimeout(initTimer);
                        }, 1000);
                }
                if (current > 99.9) {
                    current = 100;
                }
            }
        },
        init: function() {

            TweenMax.to($("#index-info"), 1.4, {
                autoAlpha: 1,
                marginTop: 0,
                ease: Power4.easeOut,
                delay: 1.5,
                onComplete: function() {
                    $('#progress').hide();
                }
            });

            TweenMax.to($(".index-product__pd-latte"), 1.4, {
                autoAlpha: 1,
                x: 0,
                ease: Power4.easeOut,
                delay: 2
            });

            TweenMax.to($(".index-product__pd-siciliano"), 1.4, {
                autoAlpha: 1,
                x: 0,
                ease: Power4.easeOut,
                delay: 2,
                onComplete: function() {
                    TweenMax.to($(".index-product__sp-label"), 1.4, {
                        autoAlpha: 1,
                        x: 0,
                        ease: Power4.easeOut
                    });
                }
            });

            if (!$("html").hasClass("mobile") || !$("html").hasClass("tablet")) {
                $("#index-latte").on("mouseenter", function() {
                    TweenMax.to($(this).find(".index-product__pd-latte"), 1, {
                        y: -15,
                        ease: Power4.easeOut
                    });
                    $(".index-product__detail-latte").addClass("is-show");
                    TweenMax.to($(this).find(".index-product__video"), 1, {
                        opacity: 1,
                        ease: Power4.easeOut,
                        onComplete: function() {
                            $('#coffee-girl').get(0).play();
                        }
                    });
                });
                $("#index-latte").on("mouseleave", function() {
                    TweenMax.to($(this).find(".index-product__pd-latte"), 1, {
                        y: 0,
                        ease: Power4.easeOut
                    });
                    $(".index-product__detail-latte").removeClass("is-show");
                    TweenMax.to($(this).find(".index-product__video"), 1, {
                        opacity: 0,
                        ease: Power4.easeOut
                    });
                });

                $("#index-siciliano").on("mouseenter", function() {
                    TweenMax.to($(this).find(".index-product__pd-siciliano"), 1, {
                        y: -15,
                        ease: Power4.easeOut
                    });
                    $(".index-product__detail-siciliano").addClass("is-show");
                    TweenMax.to($(this).find(".index-product__video"), 1, {
                        opacity: 1,
                        ease: Power4.easeOut,
                        onComplete: function() {
                            $('#coffee-boy').get(0).play();
                        }
                    });
                });
                $("#index-siciliano").on("mouseleave", function() {
                    TweenMax.to($(this).find(".index-product__pd-siciliano"), 1, {
                        y: 0,
                        ease: Power4.easeOut
                    });
                    $(".index-product__detail-siciliano").removeClass("is-show");
                    TweenMax.to($(this).find(".index-product__video"), 1, {
                        opacity: 0,
                        ease: Power4.easeOut
                    });
                });
            } else {
                $(window).on("orientationchange", function(event) {
                    if (window.orientation != 0) {
                        $orientationTip.addClass('is-active');
                    } else {
                        $orientationTip.removeClass('is-active');
                    }
                });
            }

            $("#index-latte").on("click", function() {
                $.smoothScroll({
                    scrollTarget: '#product-latte',
                    speed: 2000,
                    easing: 'easeInOutQuart'
                });
            });

            $("#index-siciliano").on("click", function() {
                $.smoothScroll({
                    scrollTarget: '#product-siciliano',
                    speed: 2000,
                    easing: 'easeInOutQuart'
                });
            });

            $('.s-header__btn-video').click(function(event) {
                event.preventDefault();
                var target = $(this).attr("href");
                $.smoothScroll({
                    scrollTarget: target,
                    speed: 2000,
                    easing: 'easeInOutQuart'
                });
                return false;
            });

            window.sr = ScrollReveal();

            sr.reveal('.js-move', {
                delay: 100,
                duration: 600,
                origin: 'bottom',
                distance: '10px',
                scale: 1,
                reset: false,
                easing: 'cubic-bezier(.79,0,.32,.99)'
            });

            $(".wrap").waypoint({
                handler: function(e) {
                    $('#btn-gotop').toggleClass("is-active");
                },
                offset: "-40%"
            });

            $("#btn-gotop").click(function(event) {
                event.preventDefault();
                $('body,html').animate({
                    scrollTop: 0
                }, 1500, 'easeInOutExpo');
                return false;
            });

        }
    }
    app.preload();
});