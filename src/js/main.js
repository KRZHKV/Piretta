$(document).ready(function(){
    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slider_button_prew"></button>',
        nextArrow: '<button class="slider_button_next"></button>',
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
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