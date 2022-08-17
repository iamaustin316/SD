$(function() {

    apt.api.p(function(rs) {
        console.log(rs);
    });

    let price = '748';

    $('.cart-list__item').each(function(e) {
        var selfCount = $(this).find('.cart-list__input-num');
        var count = selfCount.val();
        console.log(count);
        selfCount.on('blur', function() {
            console.log($(this).val());
            if (count >= 10) {
                alert('最多購買10個!');
            }
        });
        $(this).find('.cart-list__btn--minus').on('click', function() {
            count--;
            if (count <= 0) {
                count = 0;
                selfCount.val(count);
            } else {
                selfCount.val(count);
            }
            calculate();
        });
        $(this).find('.cart-list__btn--plus').on('click', function() {
            count++;
            if (count >= 10) {
                count = 10;
                selfCount.val(count);
            } else {
                selfCount.val(count);
            }
            calculate();
        });
    });

    function calculate() {
        let total = 0;
        $('.cart-list__input-num').each(function() {
            total += Number($(this).val());
            $('#item-count').html(total);
        });
    }

    var defaultSection;
    var $section = $('.s-section');
    $('.s-header__btn-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.s-nav').toggleClass('active');
    });
    $('#twzipcode').twzipcode();
    $('.home__btn--buy,.buy__btn-buy').on('click', function(e) {
        e.preventDefault();
        $('#cart-form').fadeIn(800);
        $('html,body').addClass('fixed');
    });
    $('.cart-content__btn-close').on('click', function(e) {
        e.preventDefault();
        event.preventDefault();
        var parent = $(this).parents()[1];
        $(parent).fadeOut(800, function() {
            $('html,body').removeClass('fixed');
        });
    });

    $(".s-nav__btn--section").on("click", function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $.smoothScroll({
            scrollTarget: target,
            speed: 1600,
            easing: 'easeInOutQuart'
        });
        return false;
    });

    $(".wrap").waypoint({
        handler: function(e) {
            $('.s-header').toggleClass("sticky");
            $('.btn-gotop').toggleClass("is-active");
        },
        offset: "-2%"
    });

    var $gotop = $("<button/>").attr("class", "btn-gotop");

    $(".wrap").append($gotop);

    $(".btn-gotop").delegate(this, "click", function() {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 1600, 'easeInOutExpo');
        return false;
    });

    $section.waypoint(function(direction) {
        if (direction === 'down') {
            defaultSection = this.element.id;
            switchNav();
            if (defaultSection == 'home') {
                $('.home__btn-down').removeClass('hide');
            } else {
                $('.home__btn-down').addClass('hide');
            }
        }
    }, {
        offset: '50%'
    });

    $section.waypoint(function(direction) {
        if (direction === 'up') {
            defaultSection = this.element.id;
            switchNav();
            if (defaultSection == 'home') {
                $('.home__btn-down').removeClass('hide');
            } else {
                $('.home__btn-down').addClass('hide');
            }
        }
    }, {
        offset: '-5%'
    });

    function switchNav() {
        $(".s-nav a[href='#" + defaultSection + "']").addClass("active").siblings().removeClass("active");
    }

    window.sr = ScrollReveal();
    sr.reveal('.js-sr-move', {
        delay: 100,
        duration: 1200,
        reset: true,
        origin: 'bottom',
        viewFactor: 0.05,
        scale: 1,
        distance: '5vh',
    });

    $('.home__btn-down').on('click', function(e) {
        e.preventDefault();
        $.smoothScroll({
            scrollTarget: '#feature',
            speed: 1600,
            easing: 'easeInOutQuart'
        });
    });

    var $ps = $("#particles-js") || "";
    if ($ps) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 24,
                    "density": {
                        "enable": true,
                        "value_area": 1183.721462448409
                    }
                },
                "color": {
                    "value": "#f9dbde"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.05,
                        "sync": false
                    }
                },
                "size": {
                    "value": 59.186073122420446,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "top",
                    "random": true,
                    "straight": true,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

    }
});