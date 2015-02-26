(function() {

    'use strict';

    jQuery(window).ready(function() {


        var windowHeight = getWindowHeight();
        var topperHeight = getTopperHeight();

        
        function getWindowHeight() {
            return $(window).height();
        }

        function getTopperHeight() {
            return (getWindowHeight());
        }

        function fillTopper() {
            $('#top').height(getTopperHeight());
        }
        

        // update window height on resize
        $(window).on("resize", function () {
            windowHeight = getWindowHeight();
            topperHeight = getTopperHeight();

            fillTopper();

            console.log(windowHeight);
        });                         

        // init controller
        var controller = new ScrollMagic();

        // assign handler "scene" and add it to controller
        new ScrollScene({triggerElement: "#about", triggerHook: 0.1})
                                .setClassToggle(".navbar", "top-nav-collapse")
                                .addTo(controller);



        /**var controller1 = new ScrollMagic();

        new ScrollScene({
            triggerElement: "#parallax1", // point of execution
            duration: $(window).height()+500, // pin element for the window height - 1
            triggerHook: 1, // don't trigger until #pinned-trigger1 hits the top of the viewport
            reverse: true // allows the effect to trigger when scrolled in the reverse direction
        })
        .triggerHook("onEnter")
        .setTween(TweenMax.fromTo("#parallax1 #parallaxbg", 1, {top: "-100px", ease: Linear.easeNone},{top: "20px", ease: Linear.easeNone}))
        .addTo(controller1);
        //.addIndicators({zindex: 1, suffix: "1"});**/


        fillTopper();            
    }); 

}());  