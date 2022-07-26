(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $('.navbar1').addClass('shadow-sm').css({'top':'0px'});
        } else {
            $('.navbar1').removeClass('shadow-sm').css({'top':'0px','background-color':'transparent'});
        }
    });

    //kajas
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $('.navbar1').css('background-color','white');
            $('.nav-link1').removeClass('navbar1-scroll-re').addClass('navbar1-scroll');
        } else {
            $('.navbar1').css('background-color','transparent');
            $('.nav-link1').removeClass('navbar1-scroll').addClass('navbar1-scroll-re')
        }
    });

    // other than main page
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar2').css('background-color','white');
            $('.navbar2').addClass('shadow-sm').css({"top":"0px"});

        } else {
            $('.navbar2').css('background-color','transparent');
            $('.navbar2').removeClass('shadow-sm').css({"top":"-100px"});
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.hero-text-cont1').addClass("hero-animation2").css("visibility",'visible')
        } else {
            $('.hero-text-cont1').removeClass("hero-animation2").css("visibility",'hidden')
        }
        if ($(this).scrollTop() > 300) {
            $('.hero-img-logo-cont').addClass("hero-animation1").css("visibility",'visible');
        } else {
            $('.hero-img-logo-cont').removeClass("hero-animation1").css("visibility",'hidden');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 650) {
            $('.hero-text-cont2').addClass("hero-animation3").css("visibility",'visible')
            //$('.hero-text-cont3').addClass("hero-animation4").css("visibility",'visible')
        // }if($(this).scrollTop() > 800){
        //     $('.hero-text-cont3').addClass("hero-animation4").css("visibility",'visible')
        } else {
            $('.hero-text-cont2').removeClass("hero-animation3").css("visibility",'hidden')
            $('.hero-text-cont3').removeClass("hero-animation4").css("visibility",'hidden')
        }
        if($(this).scrollTop() > 800){
            $('.hero-text-cont3').addClass("hero-animation4").css("visibility",'visible')
        }else {
            $('.hero-text-cont3').removeClass("hero-animation4").css("visibility",'hidden')
        }
    });

    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $('.extended1').css("display","block");
            $('.extended2').css("display","none");
            $('.hero-fixed').css("position","unset");
        } else {
            $('.extended2').css("display","block");
            $('.extended1').css("display","none");
            $('.hero-fixed').css("position","fixed");
        }
    });



    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.navbar .navbar-nav .nav-link').css({'color':'#252525',"font-weight": "500"});
    //     } else {
    //         $('.navbar .navbar-nav .nav-link').css({'color':'white',"font-weight": "100"});
    //     }
    // });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


})(jQuery);

$('.spin').hide()
$('mainly').hide()
// $(window).load(function () {
//     $('.spin').show()
//     $('.mainly').hide()
// })

console.log("ee main")