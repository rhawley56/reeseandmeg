/* global TweenMax:true */
/* global Linear:true */

(function() {

    'use strict';

    jQuery(window).ready(function() {

        var windowHeight, topperHeight, navHeight, vid;

        windowHeight = getWindowHeight();
        topperHeight = getTopperHeight();
        navHeight = getNavHeight();
        vid = jQuery("#video-bg video").get(0);

        // update window height on resize
        jQuery(window).on("resize", function () {
            fillTopper();
            //console.log(windowHeight);
        }); 

        fillTopper();   

        var controller0 = new ScrollMagic();     
        new ScrollScene({triggerElement: "#nav", triggerHook: '0'})
                        .on("enter leave", function (e) {
                            //$("#state").text(e.type == "enter" ? "inside" : "outside");
                            //var vid = jQuery("#video-bg video").get(0); 
                            if(e.type === "enter"){
                                vid.pause();
                                jQuery("#video-bg").hide(); 
                            }
                            else {
                                vid.play();
                                jQuery("#video-bg").show(); 
                            }
                        })
                        .addTo(controller0);
                        //.addIndicators({zindex: 10, suffix: "1"});        

        // init controller
        var controller1 = new ScrollMagic();

        new ScrollScene({triggerElement: "#nav", triggerHook: '0'})
                        .setPin("#nav")
                        .setClassToggle(".navbar", "top-nav-collapse navbar-fixed-top")
                        .addTo(controller1);
                        //.addIndicators({zindex: 10, suffix: "1"});

        var controller2 = new ScrollMagic();

        new ScrollScene({triggerElement: ".parallax-bg-1", duration: $(window).height() + $('.parallax').height(), offset: 0})
        .triggerHook("onEnter")
        .setTween(TweenMax.fromTo(".parallax-bg-1", 1, {'background-position': "50% -30vh", ease: Linear.easeNone},{'background-position': "50% 0vh", ease: Linear.easeNone}))
        .addTo(controller2);
        //.addIndicators({zindex: 1, suffix: "Parallax1"});

        var controller3 = new ScrollMagic();

        new ScrollScene({triggerElement: ".parallax-bg-2", duration: $(window).height() + $('.parallax').height(), offset: 0})
        .triggerHook("onEnter")
        .setTween(TweenMax.fromTo(".parallax-bg-2", 1, {'background-position': "50% -30vh", ease: Linear.easeNone},{'background-position': "50% 10vh", ease: Linear.easeNone}))
        .addTo(controller3);
        //.addIndicators({zindex: 1, suffix: "Parallax2"});


        vid.play();      
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
