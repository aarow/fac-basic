$(document) .ready(function() {

   $(".preloader-wrap").delay(1500).fadeOut('slow');

   $(".owl-carousel").owlCarousel({
     loop: true,
     margin: 10,
     nav: false,
     responsive: {
         0:{
             items:1
         },
         768:{
             items:1
         },
         1200:{
             items:1
         }
     }
    });

   /*Swiper*/
   var swiper = new Swiper('.swiper-container', {
     autoplay: {
      delay: 4000,
    },
   });

   

   Revealator.effects_padding = '-500';

   /*Navigation*/
   $(function() {
   $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function() {
    var nav = $('.navbar');
    var top = 200;
    if ($(window).scrollTop() >= top) {

        nav.addClass('inbody');

    } else {
        nav.removeClass('inbody');
    }
  }); 

  $('body').scrollspy({ target: '.navbar' })
    
 
  
  /*Magnific Popup*/
   $(function() {
    $('div.item-wrap,.gallery').magnificPopup({delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
   });

   $(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
   });

   new Particles(document.getElementById("particles"), {

    // size of the particles
    size: { 
      min: 0,
      max: 2
    },

    // density of particles on the canvas
    density: 600,  

    // speed of the particules
    speed: 0.5, 

    // number of times per second the canvas is refreshed
    fps: 60, 

    // color of the particles
    color: "#898989" 
    
   });

   $(function() {
      $('.selector').animatedHeadline({
        animationType: 'loading-bar'
      });
   })

   var filterizd = $('.items').filterizr({ })

}); 
});

