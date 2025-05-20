$(document).ready(function(){
  //menu btn click for phone
    $(".menu-btn, .x").click(function () {
      $("#navPhone").toggleClass("hidden");
    });

    $("#navPhone a").click(function () {
      $("#navPhone").addClass("hidden");
    });

    //hero slider
    $('.hero_slider').slick({
      dots: true,
      arrows: true,
      prevArrow: "<span class='left-arrow'><i class='bx bx-left-arrow-alt'></i></span>", // Custom previous arrow
      nextArrow: "<span class='right-arrow'><i class='bx bx-right-arrow-alt'></i></span>", // Custom next arrow
      autoplay: false,
      autoplaySpeed: 1000
    });
    
    //services section img hide show
    $(".s_item_img").hide();
    $(".item-2 .s_item_img").show(); 
    $(".item-2 .read_more_btn").hide();
    $(".item-2 .cng-col").addClass("activ-color");

    // Hover behavior on .read_more_btn
    $(".read_more_btn").hover(function () {
        $(".s_item_img").hide();
        $(".read_more_btn").show();
        
 
        $(this).closest(".services_item").find(".s_item_img").show();
        $(this).hide();

        $(".cng-col").removeClass("activ-color");
        $(this).closest(".services_item").find(".cng-col").addClass("activ-color");
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
      arrows: false,
      responsive: [
        {
          breakpoint: 992, // applies below 992px
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 820, // < 820px
          settings: {
            slidesToShow: 2
          }
        }
      ]
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
      autoplay: true, 
      autoplaySpeed: 1000, 
      dots: false, 
      arrows: false,
      responsive: [
        {
          breakpoint: 992, // applies below 992px
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 622, 
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    
    setInterval(function () {
      $('#testimonial-slider_ltr').slick('slickNext'); 
    }, 1500);
    setInterval(function () {
      $('#testimonial-slider_rtl').slick('slickPrev'); 
    }, 1500);

});