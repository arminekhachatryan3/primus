// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP
$(document).ready(function() {


    $(".manu-btn").click(function () {
        $(".slide").slideToggle(300);

    })

    $(window).on('scroll', function () {
        if ($("body").scrollTop() > 300)
            $(".manu").css('border-bottom', '1px solid #872989');
        else
            $(".manu").css('border-bottom', 'inherit');


    });


    var i = 0;
    slide();


    function slide() {

        var wdth = $(".crs").width();

        if ($('body').width() >= 1000) {
            wdth = ($(".crs").width()) / 3 - 10;
            if (i > 6)
                i = 0;

        }
        else if ($('body').width() >= 700) {
            wdth = $(".crs").width() / 2;
            if (i > 7)
                i = 0;

        }
        else if ($('body').width() < 700) {
            wdth = $(".crs").width() - 10;
            if (i > 8)
                i = 0;
        }


        $(".img").css('width', wdth + 'px');
        $('.crs').animate({
            scrollLeft: i * (wdth + 20)
        }, 1000);
        i++;
        setTimeout(slide, 3000);
    }


    var href = $(name = '.scr_href');
    var href_page = [".pr_header", ".partners", ".owl", ".about", ".why_choose", ".contact", ".pr_header", ".partners", ".owl", ".about", ".why_choose", ".contact"];

    function show_href(j) {
        $(href[j]).click(function () {
            $('body').animate({
                scrollTop: $(href_page[j]).offset().top - 100
            }, 1000);
        })
    }


    for (j = 0; j < href_page.length; j++)
        show_href(j);

    var owl_top=$(".owl").offset().top;
    var scr_top= $("body").scrollTop();

     $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });


    });
 })

 jQuery(function($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');


        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top ) < offset-100&& ($animatable.offset().top ) >offset-700) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});


