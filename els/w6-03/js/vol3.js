"use strict";!function(n){var t=document.querySelector(".s-header");window.addEventListener("scroll",function(){1<=window.scrollY?t.classList.add("is-scroll"):t.classList.remove("is-scroll")}),n(".is-cm").on("click",function(t){return t.preventDefault(),!1}),Draggable.create("#wheel",{type:"rotation",onDrag:function(){var t=Math.floor(this.rotation);TweenMax.to(".vol3-2-sns__btn",.1,{rotation:-t})}});var e=n(".section-block"),o="";function i(){n(".right-nav a[href='#"+o+"']").addClass("is-active").siblings().removeClass("is-active")}e.waypoint(function(t){"down"===t&&(o=this.element.id,i())},{offset:"50%"}),e.waypoint(function(t){"up"===t&&(o=this.element.id,i())},{offset:"-1%"}),n(".right-nav a").on("click",function(t){t.preventDefault();var e=n(this).attr("href");return n.smoothScroll({scrollTarget:e,speed:1600,easing:"easeInOutQuart"}),!1})}(jQuery);