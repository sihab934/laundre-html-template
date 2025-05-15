$(document).ready(function(){
  //menu btn click for phone
    $(".menu-btn, .x").click(function () {
      $("#navPhone").toggleClass("hidden");
    });

    $("#navPhone a").click(function () {
      $("#navPhone").addClass("hidden");
    });

    //popup video for video area
    $('.popup-video').magnificPopup({
      type: 'iframe',
      preloader: true,
       mainClass: 'custom-video-popup' 
    });

    //hover for show social icons
    $(".social_links").hide();

    $(".social").hover(
      function () {
        $(this).find(".social_links").stop(true, true).fadeIn(200);
      },
      function () {
        $(this).find(".social_links").stop(true, true).fadeOut(200);
      }
    );

    
    //slick carosel autoplay
    //slick carosal for testimonial
    $('.carouseAutoplay').slick({
      slidesToShow: 4, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 2000, 
      dots: true, 
      arrows: false
    });

    // Initially hide all hidden_details, then show the one for .hiw_item3
    $(".hidden_details").hide();
    $(".hiw_item3 .hidden_details").show();

    // Handle hover behavior
    $(".hiw_item").hover(function () {
        $(".hidden_details").hide();
        $(this).find(".hidden_details").show();
      }
    );


   $('.testimonial-slider').slick({
      slidesToShow: 3, 
      slidesToScroll: 1, 
      autoplay: false, 
      autoplaySpeed: 1000, 
      dots: false, 
      arrows: false
    });
    setInterval(function () {
      $('#testimonial-slider_ltr').slick('slickNext'); 
    }, 1500);
    setInterval(function () {
      $('#testimonial-slider_rtl').slick('slickPrev'); 
    }, 1500);

});