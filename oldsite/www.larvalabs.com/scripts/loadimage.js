var FeatImage = {
fadeSpeed: 500, 

init: function() {
	//get jQuery Object
	FeatImage.element = jQuery("div#feat_phone img");
	
	//hide image
	FeatImage.element.css("visibility","hidden");
	FeatImage.element.css("opacity",0);
}, 

appear: function() {
	FeatImage.element.css("visibility","visible");
	FeatImage.element.animate({
	
		opacity: "+=1", 
		
	}, FeatImage.fadeSpeed);

}

}


jQuery(document).ready(function() {
	FeatImage.init();
});


jQuery(window).bind("load", function() {
	setTimeout(function(){FeatImage.appear()}, 400);
});