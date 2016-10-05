(function() {
	var pTags = document.getElementsByTagName("p");
	var ctrl = new ScrollMagic.Controller({globalSceneOptions: {}});

	for(var i=0; i<pTags.length; i++) {
	    var fadein_tween = TweenMax.to('p', .375,{ opacity: 1 });
        var fadeout_tween = TweenMax.to('p', .375,{ opacity: 0 });

	    new ScrollMagic.Scene({
          triggerElement: pTags[i],
          reverse: true
        })
        .setTween(fadein_tween)
        .addTo(controller);
	    
		new ScrollMagic.Scene({
          triggerElement: pTags[i],
          reverse: true
        })
        .setTween(fadeout_tween)
        .addTo(controller);
	}
}) ();