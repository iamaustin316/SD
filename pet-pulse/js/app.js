!function(e){const s=e(".site-header__nav"),a=e(".site-header__btn-toggle"),t=e(".site-header__overlay");a.on("click",(function(){s.hasClass("active")?(e(this).removeClass("active"),s.removeClass("active"),t.removeClass("active"),e("html, body").removeClass("fixed")):(e(this).addClass("active"),s.addClass("active"),t.addClass("active"),e("html, body").addClass("fixed"))})),t.on("click",(function(a){e(this).hasClass("active")&&(e(this).removeClass("active"),s.removeClass("active"),t.removeClass("active"),e("html, body").removeClass("fixed"))})),e(".site-footer__btn-gotop").on("click",(function(s){return s.preventDefault(),e("body,html").animate({scrollTop:0},1300,"easeInOutExpo"),!1}))}(jQuery);