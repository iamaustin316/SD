"use strict";!function(e){e(".home-kv,.home-kv__h2").addClass("is-active");var t=document.querySelector(".s-header"),i=document.querySelector(".btn-top");window.addEventListener("scroll",(function(){window.scrollY>=1?t.classList.add("is-scroll"):(t.classList.remove("is-scroll"),i.classList.add("is-active"))})),e(".is-cm").on("click",(function(e){return e.preventDefault(),!1}));new Swiper(".home-cht__slide",{autoplay:{delay:5e3},speed:1e3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".home-master-out-slider",{touchRatio:0,speed:1e3,initialSlide:1,pagination:{el:".swiper-pagination--master",clickable:!0}}),new Swiper(".scene-slide",{speed:1e3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var n=e(".section-block"),s="";function o(){e(".right-nav a[href='#"+s+"']").addClass("is-active").siblings().removeClass("is-active")}n.waypoint((function(e){"down"===e&&(s=this.element.id,o())}),{offset:"50%"}),n.waypoint((function(e){"up"===e&&(s=this.element.id,o())}),{offset:"-1%"}),e(".right-nav a").on("click",(function(t){t.preventDefault();var i=e(this).attr("href");return e.smoothScroll({scrollTarget:i,speed:1600,easing:"easeInOutQuart"}),!1}))}(jQuery);