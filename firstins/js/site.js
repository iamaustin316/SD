!function(e){let t="",i=!1,o=!1;const n=document.querySelector("html").classList.contains("mobile")||"",r=document.querySelectorAll(".site-nav__btn"),s=document.querySelector(".site-nav")||"";r.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const o=e.target.nextElementSibling;t=o,o.classList.contains("active")?(e.target.classList.remove("active"),o.classList.remove("active"),n&&v(o,0)):(e.target.classList.add("active"),o.classList.add("active"),n&&u(o,0)),i=!i;const r=e.target.parentElement;a(r).forEach((e=>{e.children[0].classList.contains("active")&&(e.children[0].classList.remove("active"),e.children[1].classList.remove("active"),n&&v(e.children[1],0))}))}))}));const a=function(e){for(var t=[],i=e.parentNode.firstChild;i;)1===i.nodeType&&i!==e&&t.push(i),i=i.nextSibling;return t};document.addEventListener("click",(e=>{t.className&&(i?i=!i:"site-nav__sub-nav active"!==e.target.className&&(t.classList.remove("active"),t.previousElementSibling.classList.remove("active"))),o&&"user-profile__dropdown active"!==e.target.className&&"user-profile__avatar"!==e.target.className&&(document.querySelector(".user-profile__dropdown").classList.remove("active"),o=!1)}));const c=document.querySelectorAll(".scroll-x-content")||"";c&&c.forEach((e=>{e.addEventListener("wheel",(t=>{t.preventDefault(),n||(e.scrollLeft+=.2*t.deltaY)}))}));e(".datepicker").datepicker({format:"yyyy-mm-dd",autoHide:!0,trigger:".home-reservation__datepicker"});e(".timepicker-start").timepicker({timeFormat:"H:i",minTime:"08:30am",maxTime:"18:30pm"}),e(".timepicker-end").timepicker({timeFormat:"H:i",minTime:"08:30am",maxTime:"18:30pm"}),e(".btn-timepicker-start").on("click",(function(){e(".timepicker-start").focus()})),e(".btn-timepicker-end").on("click",(function(){e(".timepicker-end").focus()})),e(".home-reservation__btn-submut").on("click",(function(t){return t.preventDefault(),""===e(".home-reservation__input").val()?(Swal.fire({title:'<i class="icon-info popup-icon"></i>日期選擇錯誤',html:'<p class="popup-text">尚未選擇日期!</p>',showCloseButton:!0,showCancelButton:!1,focusConfirm:!1,confirmButtonText:"確認",confirmButtonAriaLabel:"確認"}),!1):""===e(".timepicker-start").val()?(Swal.fire({title:'<i class="icon-info popup-icon"></i>時間選擇錯誤',html:'<p class="popup-text">尚未選擇起始時間!</p>',showCloseButton:!0,showCancelButton:!1,focusConfirm:!1,confirmButtonText:"確認",confirmButtonAriaLabel:"確認"}),!1):""===e(".timepicker-end").val()?(Swal.fire({title:'<i class="icon-info popup-icon"></i>時間選擇錯誤',html:'<p class="popup-text">尚未選擇結束時間!</p>',showCloseButton:!0,showCancelButton:!1,focusConfirm:!1,confirmButtonText:"確認",confirmButtonAriaLabel:"確認"}),!1):e(".timepicker-start").val()>=e(".timepicker-end").val()?(Swal.fire({title:'<i class="icon-info popup-icon"></i>時間選擇錯誤',html:'<p class="popup-text">結束時間不能小於等於起始時間!</p>',showCloseButton:!0,showCancelButton:!1,focusConfirm:!1,confirmButtonText:"確認",confirmButtonAriaLabel:"確認"}),!1):void 0}));const l=document.querySelector(".user-profile__avatar")||"";l&&l.addEventListener("click",(e=>{o?(e.target.nextElementSibling.classList.remove("active"),o=!o):(e.target.nextElementSibling.classList.add("active"),o=!o)}));const m=document.querySelector(".site-nav__btn-toggle"),d=document.querySelector(".site-nav__nav-list"),p=document.querySelector(".user-profile");if(m.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.toggle("overflow"),e.target.classList.toggle("active"),e.target.parentElement.classList.toggle("active"),e.target.previousElementSibling.classList.toggle("active"),p.classList.toggle("active"),d.classList.toggle("active")})),n){const e=document.querySelectorAll(".post-wrap")||"",t=document.querySelectorAll(".home-event-course-block__btn-tab")||"";e.length>0&&(e[0].classList.add("active"),t[0].classList.add("active"),t.forEach(((t,i)=>{t.addEventListener("click",(t=>{t.target.classList.add("active"),e[i].classList.add("active");a(t.target).forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")}));a(e[i]).forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")}))}))})))}let v=(e,t=500)=>{e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.boxSizing="border-box",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((()=>{e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)},u=(e,t=500)=>{e.style.removeProperty("display");let i=window.getComputedStyle(e).display;"none"===i&&(i="block"),e.style.display=i;let o=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.boxSizing="border-box",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=o+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout((()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)};const y=document.querySelectorAll("#player")||"";if(y){const e=new Plyr(y);e.on("enterfullscreen",(function(){s.classList.add("fullscreen")})),e.on("exitfullscreen",(function(){s.classList.remove("fullscreen")}))}new Swiper(".home-video-swiper",{pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".remind-text-slide",{effect:"fade",loop:!0,fadeEffect:{crossFade:!0},autoplay:{delay:8e3}});const g={state:0,container:document.querySelector(".video-nav__nav-wrap"),btnPrev:document.querySelector(".video-nav__btn-prev"),btnNext:document.querySelector(".video-nav__btn-next"),btnLinkLength:document.querySelectorAll(".video-nav__btn-link").length,position:e(".video-nav__nav-wrap").position(),onClickPrev:function(e){this.btnPrev.addEventListener("click",(function(){this.state++;const t=document.querySelector(".video-nav__btn-link").getBoundingClientRect();e.scrollLeft-=t.width+8}))},onClickNext:function(e){this.btnNext.addEventListener("click",(function(){this.state++;const t=document.querySelector(".video-nav__btn-link").getBoundingClientRect();e.scrollLeft+=t.width+8}))},init:function(){this.onClickPrev(this.container),this.onClickNext(this.container)}};document.querySelector(".video-nav")&&g.init(),n&&(e(".meeting-room-area-tab__btn-tab").eq(0).addClass("active"),e(".meeting-room-area").eq(0).show(),e(".meeting-room-area-tab__btn-tab").on("click",(function(){e(this).addClass("active").siblings().removeClass("active");var t=e(this).data("target");e(`#${t}`).show().siblings().hide()})));e(".datepickerMeetingRoom").datepicker({format:"yyyy-mm-dd",autoHide:!0,autoPick:!0,trigger:".meeting-room-overview__datepicker"}),e(".datepickerCondition").datepicker({format:"yyyy-mm-dd",autoHide:!0,autoPick:!0,trigger:".meeting-room-condition__datepicker"});e(".meeting-room-overview__date-wrap").on("click",".meeting-room-overview__room",(function(){let t=!1;t||(e(this).addClass("active").siblings().removeClass("active"),t=!0),e(this).find(".meeting-room-overview__btn-close").on("click",(function(){return t&&e(this).parent().parent().removeClass("active"),!1}))}));e(".datepickerSearch").datepicker({format:"yyyy-mm-dd",autoHide:!0,autoPick:!0,trigger:".meeting-room-search__datepicker"});e("body").on("click",".meeting-room-result__btn-check",(function(){e(this).parent().addClass("active").siblings().removeClass("active")})),e("body").on("click",".meeting-room-result__btn-close",(function(){e(this).parent().parent().removeClass("active")}))}(jQuery);