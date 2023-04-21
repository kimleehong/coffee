console.clear();

$(document).ready(function () {
  $(".banner-img__slogan").fadeIn(700);
  $(".drink-1").delay(700).fadeIn(700);
  $(".drink-2").delay(1400).fadeIn(700);
  $(".drink-3").delay(2100).fadeIn(700);
  $(".banner-btn__more > a").delay(2800).fadeIn(700);
});


function BannerSlideInit() {
  const swiper = new Swiper('.banner-slide .swiper-container', {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    pagination: {
      el: '.banner-slide .swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.banner-slide .swiper-button-next',
      prevEl: '.banner-slide .swiper-button-prev',
    },

  });


  $(".swiper-button-play").click(function () {
    if ($(".swiper-button-play").hasClass("start")) {
      $(".swiper-button-play").removeClass("start");
      $(".swiper-button-play").addClass("stop");
      swiper.autoplay.stop();
    }
    else {
      $(".swiper-button-play").removeClass("stop");
      $(".swiper-button-play").addClass("start");
      swiper.autoplay.start();
    }
  });

  $(".banner-slide .swiper-pagination-bullet").click(function () {
    if ($(".swiper-button-play").hasClass("start")) {
      $(".swiper-button-play").removeClass("start");
      $(".swiper-button-play").addClass("stop");
      swiper.autoplay.stop();
    }
    else {
      return false;
    }
  });

}
function BannerSlideButtonInit() {
  $(".sub-banner__right").click(function () {
    if ($(".banner-slide").hasClass("show")) {
      $(".banner-slide").addClass("hide");
      $(".banner-slide").removeClass("show");
      $(".sub-banner__right div div:last-child").css("transform", "");
    }
    else {
      $(".banner-slide").addClass("show");
      $(".banner-slide").removeClass("hide");
      $(".sub-banner__right div div:last-child").css("transform", "rotate(180deg)");

      const swiper = $('.banner-slide .swiper-container').get(0).swiper;
      setTimeout(() => {
        swiper.emit('resize');
      }, 100);
    }
  });
}
function Banner2_AnimationInit() {
  gsap.fromTo('.section-2__img', {
    x: -200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-2',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 1
  });

  gsap.fromTo('.section-2__txt', {
    x: 200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-2',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 1
  });
}
function Banner4_AnimationInit() {
  gsap.fromTo('.section-4__txt-1', {
    x: -400,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-4',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 2
  });

  gsap.fromTo('.section-4__txt-2', {
    x: -400,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-4',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 1.5
  });

  gsap.fromTo('.section-4__btn', {
    opacity: 0
  }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-4',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 1.5
  });

}
function Banner5_AnimationInit() {
  gsap.fromTo('.section-5__img-right', {
    x: 400,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-5',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 1
  });

  gsap.fromTo('.section-5__btn a', {
    x: 400,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-5',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 1.5
  });

}

function Banner6_AnimationInit() {
  gsap.fromTo('.section-6__txt > div:first-child', {
    x: 400,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-6',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 2
  });

  gsap.fromTo('.section-6__txt > div:nth-child(2)', {
    x: 400,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-6',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 1.5
  });


  gsap.fromTo('.section-6__txt > div:nth-child(3)', {
    x: 400,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-6',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 1
  });

  gsap.fromTo('.section-6__img', {
    opacity: 0
  }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-6',
      start: '0% 70%',
      end: '100% 10%',
      toggleActions: 'restart reverse restart reverse'
    },
    duration: 1.5
  });

}

BannerSlideInit();
BannerSlideButtonInit();
Banner2_AnimationInit();
Banner4_AnimationInit();
Banner5_AnimationInit();
Banner6_AnimationInit();