"use strict";var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var player,firstScriptTag=document.getElementsByTagName("script")[0];function onYouTubeIframeAPIReady(){player=new YT.Player("player",{height:"390",width:"640",videoId:"b2ec6jBA2k0",playerVars:{rel:0,showinfo:0,autoplay:0,controls:1,autohide:1,playsinline:1,allowsInlineMediaPlayback:!0,wmode:"opaque"}})}function onPlayerReady(e){e.target.playVideo()}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var done=!1;function stopVideo(){player.stopVideo()}function pauseVideo(){player.pauseVideo()}!function(t){var i=t("#modal"),e=new ClipboardJS(".share-ui__btn-link"),s=t(".section-inf__nav"),a=t(".section-inf__btn-toggle");e.on("success",function(e){i.addClass("is-active")}),t(".share-ui__btn-share").on("click",function(){t(this).next().toggleClass("is-active")}),t(".modal__btn-confirm").on("click",function(){i.removeClass("is-active")});var n=new Swiper(".inf-slider",{autoHeight:!0,effect:"fade",touchRatio:0,speed:600,initialSlide:0,on:{init:function(e){t(".section-inf__btn-slide").eq(0).addClass("is-active"),t(".inf-theme__theme").eq(0).addClass("is-active"),t(".swiper-slide").eq(0).find(".inf-item__section").addClass("is-show")},slideChangeTransitionStart:function(e){t(".swiper-slide").find(".inf-item__section").removeClass("is-show")},slideChangeTransitionEnd:function(e){t(".swiper-slide-active").find(".inf-item__section").addClass("is-show"),a.hasClass("is-active")&&(a.removeClass("is-active"),s.removeClass("is-active"))}}});t(".section-inf__btn-slide").on("click",function(e){e.preventDefault();var i=t(this).index();t(this).addClass("is-active").siblings().removeClass("is-active"),t(".inf-theme__theme").eq(i).addClass("is-active").siblings().removeClass("is-active"),n.slideTo(i,600)}),a.on("click",function(){t(this).toggleClass("is-active"),s.toggleClass("is-active")});var o=t("#popup-remind");t(".btn-comming").click(function(e){return e.preventDefault(),o.toggleClass("is-active"),!1}),t(".popup__btn-confirm").click(function(e){return e.preventDefault(),o.removeClass("is-active"),!1});var c=t("#popup-video");t(document).on("click",c,function(e){"popup-video"===e.target.id&&c.hasClass("is-active")&&t("#popup-video-btn-close").trigger("click")}),t("#popup-video-btn-close").on("click",function(){c.removeClass("is-active"),pauseVideo()}),t(".skill-intro__skill").on("click",function(e){e.preventDefault();var i=t(this).data("seek");c.hasClass("is-active")||c.addClass("is-active"),player.seekTo(i,!0),2===player.getPlayerState()&&player.playVideo()}),t(".section-inf__logo").click(function(e){e.preventDefault(),t.gbox.open("想前往哪個官網呢？",{hasCloseBtn:!0,hasActionBtn:!0,actionBtns:[{text:"天堂月服",target:!1,click:"https://tw.beanfun.com/lineage/main.aspx"},{text:"天堂免服",target:!1,click:"https://tw.beanfun.com/lineagefree/index.asp"}]})}),t(".btn-game-start").click(function(e){e.preventDefault(),t.gbox.open("啟動哪個服務呢？",{hasCloseBtn:!0,hasActionBtn:!0,actionBtns:[{text:"天堂月服",target:!1,click:"https://tw.beanfun.com/game_zone/default.aspx?service_code=600035&service_region=T7"},{text:"天堂免服",target:!1,click:"https://tw.beanfun.com/game_zone/default.aspx?service_code=600041&service_region=BE"}]})})}(jQuery);