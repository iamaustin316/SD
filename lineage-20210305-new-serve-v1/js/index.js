"use strict";!function(t){var e=t("#left-nav"),s=t("html").hasClass("mobile")||"";s||e.find(".left-nav__list").mCustomScrollbar({theme:"light"}),t(".popup__content").mCustomScrollbar({theme:"dark"}),t("#left-nav-btn-toggle").on("click",function(){e.toggleClass("is-active"),t(this).toggleClass("is-active")}),t(".event__btn-more").on("click",function(){var e=t(this).data("target");t("html,body").addClass("is-fixed"),t("#".concat(e)).addClass("is-active")}),t(".popup__btn-close").on("click",function(){var e=t(this).parents()[2].id;t("html,body").removeClass("is-fixed"),t("#".concat(e)).removeClass("is-active")}),t(".popup__btn-knew").on("click",function(){var e=t(this).parents()[6].id;t("html,body").removeClass("is-fixed"),t("#".concat(e)).removeClass("is-active")}),t(".info__btn-detail").on("click",function(e){e.preventDefault();e=t(this).attr("href");t.smoothScroll({scrollTarget:e,speed:500})});var i=document.querySelector(".home"),o=document.querySelector(".event__qrcode"),a=document.querySelector(".event__qrcode-mobile");window.addEventListener("scroll",function(e){s?window.pageYOffset>=i.offsetHeight?a.classList.add("is-active"):a.classList.remove("is-active"):window.pageYOffset>=i.offsetHeight?o.classList.add("is-active"):o.classList.remove("is-active")})}(jQuery);