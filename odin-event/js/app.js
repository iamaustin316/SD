(function($) {
  gsap.registerPlugin(ScrollTrigger);
  const showMarkers = false;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const inviteFriends = urlParams.get("inviteFriends") || '';
  const isMobileDevice = $('html').hasClass('mobile') || '';

  console.log(inviteFriends);

  $(".wrap").imagesLoaded({ background: true }, function () {
    $(".loading").addClass("loaded");
    $(".loading").on("transitionend", function(){
      kvTimeLine.play();
      gtag("event", "conversion", {
        send_to: "AW-10804827268/YkoSCKHpzuYDEISpkqAo",
      });
      fbq("track", "221117_Prereg_Pageview");
      if (inviteFriends) {
        $("#friends-return-popup").addClass('active')
        $("html, body").addClass("fixed")
      }
    });
  });

  const kvTimeLine = gsap.timeline({
    paused: true,
  });

  kvTimeLine
    .fromTo(
      "#kv-sub-title-1",
      {
        scale: 2,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
        ease: "power4.inOut",
      }
    )
    .fromTo(
      "#kv-main-title",
      {
        scale: 2,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.8"
    )
    .fromTo(
      "#kv-sub-title-2",
      {
        scale: 2,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.5"
    )
    .fromTo(
      "#kv-sub-title-3",
      {
        scale: 2,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.7"
    )
    .fromTo(
      "#kv-video",
      {
        yPercent: 100,
        autoAlpha: 0,
      },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.7"
    )
    .fromTo(
      "#kv-btn-reserve",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      "-=0.5"
    )
    .fromTo(
      "#float-nav-btn-fb",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.2"
    )
    .fromTo(
      "#float-nav-btn-yt",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.5"
    );

  // reserve animation

  gsap.utils.toArray(".reserve-element").forEach((element) => {
    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        yPercent: 60,
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        scrollTrigger: {
          scrub: 1,
          trigger: element,
          start: "top 95%",
          end: "70% 95%",
          markers: showMarkers,
          once: true,
        },
      }
    );
  });

  // invite animation
  gsap.utils.toArray(".invite-element").forEach((element) => {
    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        yPercent: 60,
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        scrollTrigger: {
          scrub: 1,
          trigger: element,
          start: "top 95%",
          end: "70% 95%",
          markers: showMarkers,
          once: true,
        },
      }
    );
  });

  // role animation
  gsap.utils.toArray(".role-element").forEach((element) => {
    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        yPercent: 60,
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        scrollTrigger: {
          scrub: 1,
          trigger: element,
          start: "top 95%",
          end: "70% 95%",
          markers: showMarkers,
          once: true,
        },
      }
    );
  });

  // update animation
  gsap.utils.toArray(".update-element").forEach((element) => {
    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        yPercent: 40,
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        scrollTrigger: {
          scrub: 1,
          trigger: element,
          start: "top 90%",
          end: "70% 90%",
          markers: showMarkers,
          once: true,
        },
      }
    );
  });

  const menu = [
    "01. 新職業開放",
    "02. 職業變更",
    "03. 萬聖節副本",
    "04. 暗影城堡第2季",
  ];

  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    centeredSlides: true,
    spaceBetween: 0,
    slidesPerView: "auto",
    breakpoints: {
      0: {
        effect: "",
        spaceBetween: 20,
        slidesPerView: 1,
        coverflowEffect: {
          stretch: 0,
          depth: 0,
          scale: 0,
          modifier: 0,
          rotate: 0,
        },
      },
      789: {
        slidesPerView: "auto",
        coverflowEffect: {
          stretch: 120,
          depth: 1000,
          scale: 0.65,
          modifier: 0.5,
          rotate: 160,
        },
      },
      960: {
        slidesPerView: "auto",
        coverflowEffect: {
          stretch: 160,
          depth: 1000,
          scale: 0.65,
          modifier: 0.5,
          rotate: 160,
        },
      },
      1280: {
        slidesPerView: "auto",
        coverflowEffect: {
          stretch: 250,
          depth: 1000,
          scale: 0.55,
          modifier: 0.5,
          rotate: 190,
        },
      },
      1600: {
        slidesPerView: "auto",
        coverflowEffect: {
          stretch: 300,
          depth: 1000,
          scale: 0.55,
          modifier: 0.5,
          rotate: 190,
        },
      },
      1921: {
        slidesPerView: "auto",
        coverflowEffect: {
          stretch: 500,
          depth: 1000,
          scale: 0.55,
          modifier: 0.5,
          rotate: 190,
        },
      },
    },
    pagination: {
      el: ".cus-swiper-pagination",
      clickable: true,
      bulletClass: "cut-swiper-pagination-bullet",
      bulletActiveClass: "cus-swiper-pagination-bullet-active",
      renderBullet: function (index, className) {
        return '<div class="' + className + '">' + menu[index] + "</div>";
      },
    },
    navigation: {
      nextEl: ".cus-swiper-button-next",
      prevEl: ".cus-swiper-button-prev",
      disabledClass: "cus-swiper-button-disabled",
    },
  });

  $(".float-nav__btn-close").on("click", function () {
    $(this).parent().slideUp(800);
  });

  let $siteSection = $(".section-block");

  let defaultSection = "";
  let sectionId = "";
  $siteSection.waypoint(
    function (direction) {
      if (direction === "down") {
        defaultSection = this.element.id;
        sectionId = this.element.id;
        switchNav();
      }
    },
    {
      offset: "10%",
    }
  );

  $siteSection.waypoint(
    function (direction) {
      if (direction === "up") {
        defaultSection = this.element.id;
        switchNav();
      }
    },
    {
      offset: "-1%",
    }
  );

  function switchNav() {
    $(".site-header__btn[href='#" + defaultSection + "']")
      .addClass("active")
      .siblings()
      .removeClass("active");
  }

  const videoPlayerPopup = $("#video-player-popup");
  const ytPlayer = $("#yt-player");

  $(".popup__btn-close").on("click", function () {
    videoPlayerPopup.removeClass("active");
    ytPlayer.attr("src", "");
    $("html, body").removeClass("fixed");
  });

  $(".section-kv__btn-role, .section-role__btn-role").on("click", function (e) {
    e.preventDefault();
    let videoID = $(this).data("id");
    videoPlayerPopup.addClass("active");
    ytPlayer.attr("src", `https://www.youtube-nocookie.com/embed/${videoID}`);
    $('html, body').addClass('fixed');
  });

  const siteHeaderOdin = $(".site-header__odin");
  const siteHeaderBTNClose = $(".site-header__btn-close");
  const siteHeaderNav = $(".site-header__nav");

  $(".site-header__btn-open").on("click", function () {
    siteHeaderOdin.addClass("active");
    siteHeaderBTNClose.addClass("active");
    siteHeaderNav.addClass("active");
  });

  siteHeaderBTNClose.on("click", function () {
    siteHeaderOdin.removeClass("active");
    $(this).removeClass("active");
    siteHeaderNav.removeClass("active");
  });

  $(".site-header__btn").on("click", function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $(this).addClass("active").siblings().removeClass("active");
    if(isMobileDevice) {
      siteHeaderOdin.removeClass("active");
      siteHeaderBTNClose.removeClass("active");
      siteHeaderNav.removeClass("active");
      setTimeout(function(){
        gsap.to(window, { duration: 1, scrollTo: target, ease: "power4.inOut" });
      }, 500)
    } else {
      gsap.to(window, { duration: 1, scrollTo: target, ease: "power4.inOut" });
    }
    return false;
  });

  const someday = new Date("Thu Nov 10 2022 20:00:00 GMT+0800 (CST)");
  const today = new Date();

  $(".float-nav__btn-yt a").on('click', function(e){
    e.preventDefault()
    if (someday < today) {
      alert("立即觀看特別節目");
      window.open("https://www.youtube.com/channel/UCXelBqmb9mvGre1EzRwAQdg");
    } else {
      alert("敬請期待特別節目");
      window.open("https://www.youtube.com/channel/UCXelBqmb9mvGre1EzRwAQdg");
    }
  })

})(jQuery)
