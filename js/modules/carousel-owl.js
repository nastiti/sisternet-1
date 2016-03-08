jQuery(function ($) {

    var ocDukung = $(".ocDukung");
        ocDukung.owlCarousel({
            margin: 20,
            nav: false,
            navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
            autoplay: false,
            autoplayHoverPause: true,
            dots: true,
            responsive:{
                0:{ items:1 },
                767:{ items:1 },
                820:{ items:2 },
                1000:{ items:3 },
                1200:{ items:3 }
            }
        });
    });