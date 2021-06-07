$(function() {
  $('.header__button-menu').click(function() {
    $('body').addClass('overflow-hidden');
    $('.header__mobile').fadeIn();
  });

  $('.header__mobile-close').click(function() {
    $('body').removeClass('overflow-hidden');
    $('.header__mobile').fadeOut();
  });

  $('.partners__slider-list').slick({
    slidesToShow: 5,
    prevArrow: '.partners__slider-prev',
    nextArrow: '.partners__slider-next',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.projects__list').slick({
    arrows: false,
    dots: false
  });
  
  $('.projects__images').each(function(i, el) {
    let parent = $(el);
  
    parent.find('.projects__images-list').slick({
      swipe: false,
      prevArrow: parent.find('.projects__images-prev'),
      nextArrow: parent.find('.projects__images-next')
    });
  });

});