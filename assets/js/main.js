(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".feedback_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false
  });

  $(".accordion_tab").click(function(){
    $(".accordion_tab").each(function(){
    $(this).removeClass("active");
  });
  $(this).addClass("active");
  $(this).next().addClass("active");
});


 
})(jQuery);
