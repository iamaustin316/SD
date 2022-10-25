"use strict";!function(a){gsap.registerPlugin(ScrollTrigger);var e=window.location.search,t=new URLSearchParams(e).get("inviteFriends")||"",o=a("html").hasClass("mobile")||"",r=(console.log(t),a(".wrap").imagesLoaded({background:!0},function(){a(".loading").addClass("loaded"),a(".loading").on("transitionend",function(){r.play(),gtag("event","conversion",{send_to:"AW-10804827268/YkoSCKHpzuYDEISpkqAo"}),fbq("track","221117_Prereg_Pageview"),t&&(a("#friends-return-popup").addClass("active"),a("html, body").addClass("fixed"))})}),gsap.timeline({paused:!0})),s=(r.fromTo("#kv-sub-title-1",{scale:2,autoAlpha:0},{scale:1,autoAlpha:1,duration:1,ease:"power4.inOut"}).fromTo("#kv-main-title",{scale:2,autoAlpha:0},{scale:1,autoAlpha:1,duration:1,ease:"power4.inOut"},"-=0.8").fromTo("#kv-sub-title-2",{scale:2,autoAlpha:0},{scale:1,autoAlpha:1,duration:1,ease:"power4.inOut"},"-=0.5").fromTo("#kv-sub-title-3",{scale:2,autoAlpha:0},{scale:1,autoAlpha:1,duration:1,ease:"power4.inOut"},"-=0.7").fromTo("#kv-video",{yPercent:100,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:1,ease:"power4.inOut"},"-=0.7").fromTo("#kv-btn-reserve",{autoAlpha:0},{autoAlpha:1,duration:1,ease:"power1.inOut"},"-=0.5").fromTo("#float-nav-btn-fb",{autoAlpha:0},{autoAlpha:1,duration:1,ease:"power4.inOut"},"-=0.2").fromTo("#float-nav-btn-yt",{autoAlpha:0},{autoAlpha:1,duration:1,ease:"power4.inOut"},"-=0.5"),gsap.utils.toArray(".reserve-element").forEach(function(e){gsap.fromTo(e,{autoAlpha:0,yPercent:60},{autoAlpha:1,yPercent:0,scrollTrigger:{scrub:1,trigger:e,start:"top 95%",end:"70% 95%",markers:!1,once:!0}})}),gsap.utils.toArray(".invite-element").forEach(function(e){gsap.fromTo(e,{autoAlpha:0,yPercent:60},{autoAlpha:1,yPercent:0,scrollTrigger:{scrub:1,trigger:e,start:"top 95%",end:"70% 95%",markers:!1,once:!0}})}),gsap.utils.toArray(".role-element").forEach(function(e){gsap.fromTo(e,{autoAlpha:0,yPercent:60},{autoAlpha:1,yPercent:0,scrollTrigger:{scrub:1,trigger:e,start:"top 95%",end:"70% 95%",markers:!1,once:!0}})}),gsap.utils.toArray(".update-element").forEach(function(e){gsap.fromTo(e,{autoAlpha:0,yPercent:40},{autoAlpha:1,yPercent:0,scrollTrigger:{scrub:1,trigger:e,start:"top 90%",end:"70% 90%",markers:!1,once:!0}})}),["01. 新職業開放","02. 職業變更","03. 萬聖節副本","04. 暗影城堡第2季"]),e=(new Swiper(".swiper",{loop:!0,effect:"coverflow",centeredSlides:!0,spaceBetween:0,slidesPerView:"auto",breakpoints:{0:{effect:"",spaceBetween:20,slidesPerView:1,coverflowEffect:{stretch:0,depth:0,scale:0,modifier:0,rotate:0}},789:{slidesPerView:"auto",coverflowEffect:{stretch:120,depth:1e3,scale:.65,modifier:.5,rotate:160}},960:{slidesPerView:"auto",coverflowEffect:{stretch:160,depth:1e3,scale:.65,modifier:.5,rotate:160}},1280:{slidesPerView:"auto",coverflowEffect:{stretch:250,depth:1e3,scale:.55,modifier:.5,rotate:190}},1600:{slidesPerView:"auto",coverflowEffect:{stretch:300,depth:1e3,scale:.55,modifier:.5,rotate:190}},1921:{slidesPerView:"auto",coverflowEffect:{stretch:500,depth:1e3,scale:.55,modifier:.5,rotate:190}}},pagination:{el:".cus-swiper-pagination",clickable:!0,bulletClass:"cut-swiper-pagination-bullet",bulletActiveClass:"cus-swiper-pagination-bullet-active",renderBullet:function(e,t){return'<div class="'+t+'">'+s[e]+"</div>"}},navigation:{nextEl:".cus-swiper-button-next",prevEl:".cus-swiper-button-prev",disabledClass:"cus-swiper-button-disabled"}}),a(".float-nav__btn-close").on("click",function(){a(this).parent().slideUp(800)}),a(".section-block")),i="";function n(){a(".site-header__btn[href='#"+i+"']").addClass("active").siblings().removeClass("active")}e.waypoint(function(e){"down"===e&&(i=this.element.id,this.element.id,n())},{offset:"10%"}),e.waypoint(function(e){"up"===e&&(i=this.element.id,n())},{offset:"-1%"});var l=a("#video-player-popup"),c=a("#yt-player"),u=(a(".popup__btn-close").on("click",function(){l.removeClass("active"),c.attr("src",""),a("html, body").removeClass("fixed")}),a(".section-kv__btn-role, .section-role__btn-role").on("click",function(e){e.preventDefault();e=a(this).data("id");l.addClass("active"),c.attr("src","https://www.youtube-nocookie.com/embed/".concat(e)),a("html, body").addClass("fixed")}),a(".site-header__odin")),d=a(".site-header__btn-close"),p=a(".site-header__nav");a(".site-header__btn-open").on("click",function(){u.addClass("active"),d.addClass("active"),p.addClass("active")}),d.on("click",function(){u.removeClass("active"),a(this).removeClass("active"),p.removeClass("active")}),a(".site-header__btn").on("click",function(e){e.preventDefault();var t=a(this).attr("href");return a(this).addClass("active").siblings().removeClass("active"),o?(u.removeClass("active"),d.removeClass("active"),p.removeClass("active"),setTimeout(function(){gsap.to(window,{duration:1,scrollTo:t,ease:"power4.inOut"})},500)):gsap.to(window,{duration:1,scrollTo:t,ease:"power4.inOut"}),!1})}(jQuery);