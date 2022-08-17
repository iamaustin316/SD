$(function() {
    "use strict";

    var $body = $("body"),
        $html = $("html"),
        winner = true,
        current;
    
    var curelApp = {
        loading: function() {
            TweenMax.set($('.index-kv__model'), {autoAlpha:0,marginLeft:-50});
            TweenMax.set($('.signup'), {autoAlpha:0,marginTop:-50});
            TweenMax.set($('#carousel'), {autoAlpha:0});
            TweenMax.set($('#slider'), {autoAlpha:0});
            $html.addClass('hide');
            var $container = $('#progress'),
                $progressBar = $container.find('.progress-bar'),
                $progressText = $container.find('.progress-text'),
                imgLoad = imagesLoaded('body'),
                imgTotal = imgLoad.images.length,
                imgLoaded = 0,
                current = 0,
                progressTimer = setInterval(updateProgress, 1000/ 60);

            imgLoad.on('progress', function() {
                imgLoaded++;
            });

            function updateProgress() {
                var target = (imgLoaded / imgTotal) * 100;
                current += (target - current) * 0.1;
                $progressBar.css({
                    width: current + '%'
                });
                $progressText.text(Math.floor(current) + '%');
                if (current >= 100) {
                    clearInterval(progressTimer);
                    //$(document).scrollTop(0);
                    $container.addClass('hide');
                    setTimeout( curelApp.init(),1500 );
                }
                if (current > 99.9) {
                    current = 100;
                }
            }
        },
        init: function() {
            $('#progress').delay(1500).queue(function() {
                $html.removeClass('hide');
                $(this).remove();
                curelApp.gallery();
                curelApp.winner();
                curelApp.indexKV();
            });

            //表單測試用 套完程式可以移除
            //$('.signup-block__btn-submit').on('click', function(){
            //    location.href = 'completed.html';
            //});

            //得獎名單
            if(winner) {
                $('.main-nav__list li').eq(2).on('click', function(event){
                    event.preventDefault();
                    location.href = 'winner.html';
                    return false;
                });
            } else {
                $('.main-nav__list li').eq(2).on('click', function(event){
                    event.preventDefault();
                    alert('抽中名單於2016年11月3日 (週四)17:00前公布!');
                    return false;
                });
            }
        },
        indexKV: function() {
            TweenMax.to($('.index-kv__model'),1, {autoAlpha:1,marginLeft:0});
            TweenMax.to($('.signup'),1, {autoAlpha:1,marginTop:0});
        },
        gallery: function() {
            var $carousel = $('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 80,
                itemMargin: 10,
                minItems: 3,
                asNavFor: '#slider',
                controlsContainer: $('.custom-controls-container'),
                customDirectionNav: $('.custom-navigation a')  
            });

             var $slider = $('#slider').flexslider({
                animation: 'slide',
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: '#carousel',
                directionNav: false,
                init: function(slider) {
                    current = slider.currentSlide + 1;
                    $('.count__current').html(current);
                },
                after: function(slider) {
                    current = slider.currentSlide + 1;
                    $('.count__current').html(current);
                }
            });

            $('.flex-prev-mobile').on('click', function(){
                $slider.flexslider('prev');
                return false;
            });

            $('.flex-next-mobile').on('click', function(){
                $slider.flexslider('next');
                return false;
            });
            TweenMax.to($('#carousel'),1, {autoAlpha:1});
            TweenMax.to($('#slider'),1, {autoAlpha:1});
        },
        winner: function(){
            $('.winner__tab').find('a').eq(0).addClass('is-active');
            $('.winner__list').eq(0).fadeIn().siblings().hide();
            $('.winner__tab a').on('click', function(event) {
                event.preventDefault();
                $(this).addClass('is-active').siblings().removeClass('is-active');
                var target = $(this).attr('href');
                $(target).fadeIn().siblings().hide();
                return false;
            });
        }
    }

    curelApp.loading();

});
