$(document).ready(function(){
  $('.news-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slider_button_prew"></button>',
    nextArrow: '<button class="slider_button_next></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function(){
    var link = $('.menu-link');
    var link_active = $('.menu-link-active');
    var menu = $('.nav_menu_adaptive');


    link.click(function(){
        link.toggleClass('menu-link-active');
        menu.toggleClass('nav_menu_adaptive-active');
    });
    link_active.click(function(){
        link.removeClass('menu-link-active');
        menu.removeClass('nav_menu_adaptive-active');
    });

});