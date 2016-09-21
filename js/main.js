$(function(){
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
    
    var slides = $('div');
    
    for(var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i],
            // duration: 500
        })
        .setPin(slides[i])
        // .addIndicators()
        .addTo(controller);
    }
});