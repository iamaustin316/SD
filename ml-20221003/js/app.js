"use strict";$(function(){var i=["決戰<br>國際服","豪禮<br>大放送","Jumping<br>極速成長"];new Swiper(".sectionASlider",{effect:"fade",loop:!0,fadeEffect:{crossFade:!0},speed:800,pagination:{el:".cut-swiper-pagination",clickable:!0,bulletClass:"cut-swiper-pagination-bullet",bulletActiveClass:"cus-swiper-pagination-bullet-active",renderBullet:function(e,t){return'<div class="'+t+'">'+i[e]+"</div>"}},initialSlide:0,navigation:{nextEl:".cus-swiper-button-next",prevEl:".cus-swiper-button-prev",disabledClass:"cus-swiper-button-disabled"}});$(".btn-gotop").on("click",function(e){return e.preventDefault(),$("body,html").animate({scrollTop:0},1300,"easeInOutExpo"),!1}),$("html, body").animate({scrollTop:"0px"},400,"easeOutCirc")});