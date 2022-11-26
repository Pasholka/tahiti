$(document).ready(function(){
  $('.slider').slick({
  arrows:false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  });
  $('.card_wrapper').slick({
  arrows:false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  responsive: [
    
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
  });
});