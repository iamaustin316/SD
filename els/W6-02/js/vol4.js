"use strict";!function(i){var e=document.querySelector(".s-header");window.addEventListener("scroll",function(){1<=window.scrollY?e.classList.add("is-scroll"):e.classList.remove("is-scroll")}),i(".is-cm").on("click",function(e){return e.preventDefault(),alert("小編施工中"),!1}),Draggable.create("#wheel",{type:"rotation",onDrag:function(){var e=Math.floor(this.rotation);TweenMax.to(".vol3-2-sns__btn",.1,{rotation:-e})}});var t=i(".section-block"),s="";function n(){i(".right-nav a[href='#"+s+"']").addClass("is-active").siblings().removeClass("is-active")}t.waypoint(function(e){"down"===e&&(s=this.element.id,n())},{offset:"50%"}),t.waypoint(function(e){"up"===e&&(s=this.element.id,n())},{offset:"-1%"}),i(".right-nav a").on("click",function(e){e.preventDefault();var t=i(this).attr("href");return i.smoothScroll({scrollTarget:t,speed:1600,easing:"easeInOutQuart"}),!1});var o=new Swiper(".vol4-1-sns__slide",{autoHeight:!0,effect:"fade",touchRatio:0,speed:600,initialSlide:0,on:{init:function(e){i(".vol4-1-sns__btn-bookmark").eq(0).addClass("is-active")},slideChangeTransitionEnd:function(e){i(".vol4-1-sns__btn-bookmark").eq(o.realIndex).addClass("is-active").siblings().removeClass("is-active")}}});i(".vol4-1-sns__btn-bookmark").on("click",function(e){e.preventDefault();var t=i(this).index();i(this).addClass("is-active").siblings().removeClass("is-active"),o.slideTo(t,600)})}(jQuery);