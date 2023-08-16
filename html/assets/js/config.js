/* all slider start */
$(document).ready(function () {

  $('.hero-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    centerMode: false, 
    dots: true, 
  });
  
  $('.review-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.prvarow',
    nextArrow: '.nxtarow',
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    centerMode: false, 
    dots: false,
  });

  $('.news-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    centerMode: false, 
    dots: true,
  });

  $('.feat-profile-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.prevArrow',
    nextArrow: '.nestArrow',
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    centerMode: false, 
    dots: false,
    responsive: [ 
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3, 
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  });

});
