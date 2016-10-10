(function() {
	var pTags = document.getElementsByTagName("p");
	var ctrl = new ScrollMagic.Controller();
	var enterTrigger = .75,
	    exitTrigger = .1,
	    enterDuration = 200,
	    exitDuration = 100;

	for(let i=0; i<pTags.length; i++) {
	    new ScrollMagic.Scene({
            triggerHook: enterTrigger,
            duration: enterDuration,
            triggerElement: pTags[i],
            reverse: true
        })
        .setTween(pTags[i], { opacity: 1 })
        .addIndicators()
        .addTo(ctrl);
	    
		new ScrollMagic.Scene({
            triggerHook: exitTrigger,
            duration: exitDuration,
            triggerElement: pTags[i],
            reverse: true
        })
        .setTween(pTags[i], { opacity: 0 })
        .addIndicators()
        .addTo(ctrl);
	}
}) ();
