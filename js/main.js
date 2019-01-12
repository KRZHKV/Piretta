$(document).ready(function(){
    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000

        
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