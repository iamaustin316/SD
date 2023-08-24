"use strict";!function(o){var e=window.innerWidth,t=(window.addEventListener("resize",function(){window.innerWidth!==e&&(e=window.innerWidth,window.location.reload())}),.01*window.innerHeight),r=(document.documentElement.style.setProperty("--vh","".concat(t,"px")),gsap.registerPlugin(ScrollTrigger),o("html").hasClass("mobile")||""),i="https://tw-odin.kakaogames.com/",t=window.localStorage.getItem("redirect")||"",a=(t&&Date.now()-t<1e4&&(window.location.href=i),o(".btn-home").on("click",function(e){e.preventDefault(),window.localStorage.setItem("redirect",Date.now()),window.location.href=i}),o(".wrap").imagesLoaded({background:!0},function(){o(".loading").addClass("loaded"),o(".loading").on("transitionend",function(){a.play()})}),gsap.timeline({paused:!0})),s=(a.fromTo("#kv-main-title",{yPercent:-20,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:1,ease:"power4.inOut"}).fromTo("#kv-btn-play-wrap",{yPercent:-20,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:1,clearProps:!0,ease:"power4.inOut"},"-=0.8").fromTo("#kv-sub-title",{xPercent:-30,autoAlpha:0},{xPercent:0,autoAlpha:1,duration:1,ease:"power4.inOut"},"-=0.7").fromTo("#kv-btn-event-wrap",{xPercent:-30,autoAlpha:0},{xPercent:0,autoAlpha:1,duration:1,clearProps:!0,ease:"power4.inOut"},"-=0.7"),gsap.utils.toArray(".heroes-element").forEach(function(e){gsap.fromTo(e,{autoAlpha:0,yPercent:20},{autoAlpha:1,yPercent:0,clearProps:!0,scrollTrigger:{scrub:1,trigger:e,start:"top 95%",end:"20% 95%",markers:!1,once:!0}})}),gsap.utils.toArray(".event-element").forEach(function(e){gsap.fromTo(e,{autoAlpha:0,yPercent:20},{autoAlpha:1,yPercent:0,clearProps:!0,scrollTrigger:{scrub:1,trigger:e,start:"top 95%",end:"20% 95%",markers:!1,once:!0}})}),gsap.utils.toArray(".battlefield-element").forEach(function(e){gsap.fromTo(e,{autoAlpha:0,yPercent:20},{autoAlpha:1,yPercent:0,clearProps:!0,scrollTrigger:{scrub:1,trigger:e,start:"top 95%",end:"20% 95%",markers:!1,once:!0}})}),gsap.utils.toArray(".skill-element").forEach(function(e){gsap.fromTo(e,{autoAlpha:0,yPercent:20},{autoAlpha:1,yPercent:0,clearProps:!0,scrollTrigger:{scrub:1,trigger:e,start:"top 95%",end:"20% 95%",markers:!1,once:!0}})}),gsap.utils.toArray(".update-element").forEach(function(e){gsap.fromTo(e,{autoAlpha:0,yPercent:20},{autoAlpha:1,yPercent:0,clearProps:!0,scrollTrigger:{scrub:1,trigger:e,start:"top 90%",end:"70% 90%",markers:!1,once:!0}})}),document.querySelectorAll(".section-update__custom-pagination span")),c=document.querySelectorAll(".section-battlefield__custom-pagination span"),n=document.querySelectorAll(".section-skill__custom-pagination span"),l=new Swiper(".section-battlefield__slider .swiper",{loop:!0,effect:"coverflow",centeredSlides:!0,spaceBetween:0,slidesPerView:"auto",resizeObserver:!1,direction:"horizontal",breakpoints:{0:{effect:"",spaceBetween:20,slidesPerView:1,direction:"vertical",coverflowEffect:{stretch:0,depth:0,scale:0,modifier:0,rotate:0}},789:{slidesPerView:"auto",coverflowEffect:{stretch:120,depth:1e3,scale:.65,modifier:.5,rotate:160}},960:{slidesPerView:"auto",coverflowEffect:{stretch:160,depth:1e3,scale:.65,modifier:.5,rotate:160}},1280:{slidesPerView:"auto",coverflowEffect:{stretch:250,depth:1e3,scale:.55,modifier:.5,rotate:190}},1600:{slidesPerView:"auto",coverflowEffect:{stretch:300,depth:1e3,scale:.55,modifier:.5,rotate:190}},1921:{slidesPerView:"auto",coverflowEffect:{stretch:500,depth:1e3,scale:.55,modifier:.5,rotate:190}}},navigation:{nextEl:".battlefield-swiper-button-next",prevEl:".battlefield-swiper-button-prev",disabledClass:"battlefield-swiper-button-disabled"},on:{slideChange:function(o){c.forEach(function(e,t){o.realIndex===t?e.classList.add("active"):e.classList.remove("active")})}}}),d=new Swiper(".section-skill__slider .swiper",{loop:!0,effect:"coverflow",centeredSlides:!0,spaceBetween:0,direction:"horizontal",slidesPerView:"auto",resizeObserver:!1,breakpoints:{0:{effect:"",direction:"vertical",spaceBetween:20,slidesPerView:1,coverflowEffect:{stretch:0,depth:0,scale:0,modifier:0,rotate:0}},789:{slidesPerView:"auto",coverflowEffect:{stretch:120,depth:1e3,scale:.65,modifier:.5,rotate:160}},960:{slidesPerView:"auto",coverflowEffect:{stretch:160,depth:1e3,scale:.65,modifier:.5,rotate:160}},1280:{slidesPerView:"auto",coverflowEffect:{stretch:250,depth:1e3,scale:.55,modifier:.5,rotate:190}},1600:{slidesPerView:"auto",coverflowEffect:{stretch:300,depth:1e3,scale:.55,modifier:.5,rotate:190}},1921:{slidesPerView:"auto",coverflowEffect:{stretch:500,depth:1e3,scale:.55,modifier:.5,rotate:190}}},navigation:{nextEl:".skill-swiper-button-next",prevEl:".skill-swiper-button-prev",disabledClass:"skill-swiper-button-disabled"},on:{slideChange:function(o){n.forEach(function(e,t){o.realIndex===t?e.classList.add("active"):e.classList.remove("active")})}}}),f=new Swiper(".section-update__slider .swiper",{loop:!0,effect:"coverflow",centeredSlides:!0,spaceBetween:0,slidesPerView:"auto",direction:"horizontal",resizeObserver:!1,breakpoints:{0:{effect:"",spaceBetween:20,slidesPerView:1,direction:"vertical",coverflowEffect:{stretch:0,depth:0,scale:0,modifier:0,rotate:0}},789:{slidesPerView:"auto",coverflowEffect:{stretch:120,depth:1e3,scale:.65,modifier:.5,rotate:160}},960:{slidesPerView:"auto",coverflowEffect:{stretch:160,depth:1e3,scale:.65,modifier:.5,rotate:160}},1280:{slidesPerView:"auto",coverflowEffect:{stretch:250,depth:1e3,scale:.55,modifier:.5,rotate:190}},1600:{slidesPerView:"auto",coverflowEffect:{stretch:300,depth:1e3,scale:.55,modifier:.5,rotate:190}},1921:{slidesPerView:"auto",coverflowEffect:{stretch:500,depth:1e3,scale:.55,modifier:.5,rotate:190}}},navigation:{nextEl:".cus-swiper-button-next",prevEl:".cus-swiper-button-prev",disabledClass:"cus-swiper-button-disabled"},on:{slideChange:function(o){s.forEach(function(e,t){o.realIndex===t?e.classList.add("active"):e.classList.remove("active")})}}}),t=(s.forEach(function(e,t){e.addEventListener("click",function(){f.slideTo(t,300)})}),c.forEach(function(e,t){e.addEventListener("click",function(){l.slideTo(t,300)})}),n.forEach(function(e,t){e.addEventListener("click",function(){d.slideTo(t,300)})}),o(".float-nav__btn-close").on("click",function(){o(this).parent().fadeOut(300)}),o(".section-block")),p="";function u(){o(".site-header__btn[href='#"+p+"']").addClass("active").siblings().removeClass("active")}t.waypoint(function(e){"down"===e&&(p=this.element.id,this.element.id,u())},{offset:"10%"}),t.waypoint(function(e){"up"===e&&(p=this.element.id,u())},{offset:"-1%"});var w=o("#video-player-popup"),h=o("#yt-player"),v=(o(".popup__btn-close").on("click",function(){w.removeClass("active"),h.attr("src",""),o("html, body").removeClass("fixed")}),o(".section-kv__btn-play").on("click",function(e){e.preventDefault();e=o(this).data("id");w.addClass("active"),h.attr("src","https://www.youtube-nocookie.com/embed/".concat(e)),o("html, body").addClass("fixed")}),o(".site-header__odin")),m=o(".site-header__btn-close"),g=o(".site-header__nav"),b=(o(".site-header__btn-open").on("click",function(){v.addClass("active"),m.addClass("active"),g.addClass("active")}),m.on("click",function(){v.removeClass("active"),o(this).removeClass("active"),g.removeClass("active")}),document.querySelector(".site-header__nav").clientHeight);r&&(b=0),console.log(b),o(".site-header__btn").on("click",function(e){e.preventDefault();var t=o(this).attr("href");return o(this).addClass("active").siblings().removeClass("active"),r?(v.removeClass("active"),m.removeClass("active"),g.removeClass("active"),setTimeout(function(){gsap.to(window,{duration:1,scrollTo:t,ease:"power4.inOut"})},500)):gsap.to(window,{duration:1,scrollTo:{y:t,offsetY:b},ease:"power4.inOut"}),!1})}(jQuery);