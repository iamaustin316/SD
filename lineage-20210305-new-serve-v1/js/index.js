"use strict";!function(o){o("html").hasClass("mobile")||""?o(".popup__content").mCustomScrollbar({theme:"dark",autoHideScrollbar:!1,scrollEasing:"linear"}):o(".popup__content").mCustomScrollbar({theme:"dark"}),o("#left-nav-btn-toggle").on("click",function(){$leftNav.toggleClass("is-active"),o(this).toggleClass("is-active")}),o(".event__btn-more").on("click",function(){var t=o(this).data("target");o("html,body").addClass("is-fixed"),o("#".concat(t)).addClass("is-active")}),o(".popup__btn-close").on("click",function(){var t=o(this).parents()[2].id;o("html,body").removeClass("is-fixed"),o("#".concat(t)).removeClass("is-active")}),o(".popup__btn-knew").on("click",function(){var t=o(this).parents()[6].id;o("html,body").removeClass("is-fixed"),o("#".concat(t)).removeClass("is-active")}),o(".info__btn-detail").on("click",function(t){t.preventDefault();var e=o(this).attr("href");o.smoothScroll({scrollTarget:e,speed:500})})}(jQuery);