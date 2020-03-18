$('.header-menu-btn').click(function () { 
 $('.header-menu').toggleClass('header-menu-active')
 $('.header-menu-btn').toggleClass('header-menu-btn-active');
});

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  allowTouchMove: true,
  autoplay: {
    delay: 7800,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    550: {
      slidesPerView: 2,
      allowTouchMove: true,
    },
    780: {
      slidesPerView: 3,
      allowTouchMove: false,
      autoplay: {
        delay: 7800000,
      },
    }
  }
});