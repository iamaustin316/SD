"use strict";function vol2Particle(){particlesJS("vol2-2-skill-2-p",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#8bf7fe"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"top",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}!function(n){(document.getElementById("vol2-2-skill-2-p")||"")&&vol2Particle();var e=document.querySelector(".s-header");window.addEventListener("scroll",function(){1<=window.scrollY?e.classList.add("is-scroll"):e.classList.remove("is-scroll")}),n(".is-cm").on("click",function(e){return e.preventDefault(),!1}),console.log("gggg"),Draggable.create("#wheel",{type:"rotation",onDrag:function(){var e=Math.floor(this.rotation);TweenMax.to(".vol3-2-sns__btn",.1,{rotation:-e})}});var t=n(".section-block"),i="";function o(){n(".right-nav a[href='#"+i+"']").addClass("is-active").siblings().removeClass("is-active")}t.waypoint(function(e){"down"===e&&(i=this.element.id,o())},{offset:"50%"}),t.waypoint(function(e){"up"===e&&(i=this.element.id,o())},{offset:"-1%"}),n(".right-nav a").on("click",function(e){e.preventDefault();var t=n(this).attr("href");return n.smoothScroll({scrollTarget:t,speed:1600,easing:"easeInOutQuart"}),!1}),n(".vol3-1-sns__btn,.vol3-2-sns__btn").on("click",function(e){return e.preventDefault(),alert("小編施工中!"),!1})}(jQuery);