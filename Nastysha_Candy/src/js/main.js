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



// const cardFront = document.querySelector('.front'),
//       cardBack = document.querySelector('.back'),
//       buttonFlip = document.querySelector('.flipBtn'),
//       buttonFlipBack = document.querySelector('.catalog-goods-card-backFlip');




// $(buttonFlip).click(function(){
//  cardBack.style.transform = "rotateY(360deg)";
//  cardFront.style.transform = "rotateY(180deg)";
// });

// $(buttonFlipBack).click(function(){
//  cardBack.style.transform = "rotateY(180deg)";
//  cardFront.style.transform = "rotateY(0deg)";
// });




// buttonFlip.addEventListener("click", function(){
//   cardBack.style.transform = "rotateY(360deg)";
//   cardFront.style.transform = "rotateY(180deg)";
// });
// buttonFlipBack.addEventListener("click", function(){
//   cardBack.style.transform = "rotateY(180deg)";
//   cardFront.style.transform = "rotateY(0deg)";
// });








const cards = document.querySelectorAll('.justCard');

for (let i = 0; i < cards.length; i++) {
 const card = cards[i];
 card.addEventListener('mousemove', color);
}

function color(event) {
 const cardFront = this.querySelector('.front'),
       cardBack = this.querySelector('.back'),
       flipBtn = this.querySelector('.flipBtn'),
       flipBackBtn = this.querySelector('.catalog-goods-card-backFlip');
 flipBtn.addEventListener('click', function() {
  cardBack.style.transform = "rotateY(0deg)";
  cardFront.style.transform = "rotateY(-180deg)";
 });
 flipBackBtn.addEventListener('click', function() {
  cardBack.style.transform = "rotateY(180deg)";
  cardFront.style.transform = "rotateY(0deg)";
 });
}