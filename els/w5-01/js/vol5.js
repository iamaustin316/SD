"use strict";!function(n){var t=document.querySelector(".s-header");window.addEventListener("scroll",function(){1<=window.scrollY?t.classList.add("is-scroll"):t.classList.remove("is-scroll")}),n(".is-cm").on("click",function(t){return t.preventDefault(),alert("小編施工中"),!1}),Draggable.create("#wheel",{type:"rotation",onDrag:function(){var t=Math.floor(this.rotation);TweenMax.to(".vol5-1-sns__btn",.1,{rotation:-t})}});var e=n(".section-block"),o="";function s(){n(".right-nav a[href='#"+o+"']").addClass("is-active").siblings().removeClass("is-active")}e.waypoint(function(t){"down"===t&&(o=this.element.id,s())},{offset:"50%"}),e.waypoint(function(t){"up"===t&&(o=this.element.id,s())},{offset:"-1%"}),n(".right-nav a").on("click",function(t){t.preventDefault();var e=n(this).attr("href");return n.smoothScroll({scrollTarget:e,speed:1600,easing:"easeInOutQuart"}),!1});var a,i=n("html").hasClass("mobile"),r=document.getElementById("album"),l=document.getElementById("album-inner"),c=0;i?(r.addEventListener("touchstart",function(t){document.body.addEventListener("touchmove",function(t){t.preventDefault()}),a=t.touches[0].clientY},!1),r.addEventListener("touchend",function(t){t.changedTouches[0].clientY<a?c<l.offsetHeight-400&&(c+=l.offsetHeight/5,l.style.transform="translate3d(0,".concat(-c,"px,0)")):0<c&&(c-=l.offsetHeight/5,l.style.transform="translate3d(0,".concat(0,"px,0)"),console.log(c))},!1)):r.addEventListener("wheel",function(t){t.deltaY<=0?(console.log("1"),c===l.offsetHeight-400&&(c=0,l.style.transform="translate3d(0,".concat(-c,"px,0)"))):(console.log("2"),console.log(c),0<=c&&(c+=l.offsetHeight/20,l.style.transform="translate3d(0,".concat(-c,"px,0)"),c>=l.offsetHeight-400&&(c=l.offsetHeight-400)))},!1)}(jQuery);