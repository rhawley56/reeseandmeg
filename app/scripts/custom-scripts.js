(function() {

    'use strict';

    jQuery(window).ready(function() {

        var windowHeight, topperHeight, navHeight;

        windowHeight = getWindowHeight();
        topperHeight = getTopperHeight();
        navHeight = getNavHeight();

        // update window height on resize
        jQuery(window).on("resize", function () {
            fillTopper();
            //console.log(windowHeight);
        }); 

        fillTopper();                         

        // init controller
        var controller = new ScrollMagic();

        new ScrollScene({triggerElement: "#nav", triggerHook: '0'})
                        .setPin("#nav")
                        .setClassToggle(".navbar", "top-nav-collapse navbar-fixed-top")
                        .addTo(controller);
                        //.addIndicators({zindex: 10, suffix: "1"});

        var controller1 = new ScrollMagic();

        new ScrollScene({triggerElement: ".parallax-bg-1", duration: $(window).height() + $('.parallax').height(), offset: 0})
        .triggerHook("onEnter")
        .setTween(TweenMax.fromTo(".parallax-bg-1", 1, {'background-position-y': "-400px", ease: Linear.easeNone},{'background-position-y': "-200px", ease: Linear.easeNone}))
        .addTo(controller1);
        //.addIndicators({zindex: 1, suffix: "Parallax1"});

        var controller2 = new ScrollMagic();

        new ScrollScene({triggerElement: ".parallax-bg-2", duration: $(window).height() + $('.parallax').height(), offset: 0})
        .triggerHook("onEnter")
        .setTween(TweenMax.fromTo(".parallax-bg-2", 1, {'background-position-y': "-400px", ease: Linear.easeNone},{'background-position-y': "-200px", ease: Linear.easeNone}))
        .addTo(controller2);
        //.addIndicators({zindex: 1, suffix: "Parallax2"});           
    }); 

    function getWindowHeight() {
        return jQuery(window).height();
    }

    function getNavHeight() {
        return jQuery('#nav').outerHeight();
    }

    function getTopperHeight() {
        return (getWindowHeight() - getNavHeight());
    }

    function fillTopper() {
        jQuery('#top').height(getTopperHeight());
    }

}());  