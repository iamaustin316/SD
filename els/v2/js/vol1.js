"use strict";

(function ($) {

  var particleWrap = document.getElementById('vol1-1-skill-3-p') || "";

  if (particleWrap) {
    vol1Particle();
  }

  $(".wrap").waypoint({
    handler: function handler(e) {
      $('.vol1-btn-top').toggleClass('is-active');
    },
    offset: "-2%"
  });

  $('.vol1-btn-top').on('click', function (e) {
    var target = $(this).attr('href');
    $.smoothScroll({
      scrollTarget: target,
      speed: 1600,
      easing: 'easeInOutQuart',
      offset: 0
    });
    return false;
  });

  Draggable.create("#wheel", {
    type: "rotation",
    onDrag: function onDrag() {
      console.log(this.rotation);
      var rotateValue = Math.floor(this.rotation);
      TweenMax.to('.vol1-1-sns__btn', 0.1, {
        rotation: -rotateValue
      });
    }
  });
})(jQuery);

function vol1Particle() {
  particlesJS("vol1-1-skill-3-p", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fffe00"
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
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
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
        "distance": 500,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 23.674429248968178,
        "direction": "top-right",
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
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
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