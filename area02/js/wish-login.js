"use strict";var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};function ga_click(i,e,n){e=isMobile.any()?n:e;gtag("event",i,{event_category:e})}!function(i){gsap.to(".preloader__range-inner",{width:"100%",duration:1,ease:"none",onComplete:function(){i(".preloader").addClass("loaded"),setTimeout(function(){ga_click("pv","pv-wish03","pv-m-wish03"),gsap.to("#section-login-shoe",{scale:1,duration:1,ease:"power4.inOut"})},500)}})}(jQuery);