//ANIMATE STARS
		//animate them via CSS
		jQuery(window).load(function(){
				
				//get stars
				var stars = jQuery(".star");
			
				
				//add / remove function
				var animateStar = function() {
					
					stars.addClass("animate");
					setTimeout(function() { 
						stars.removeClass("animate"); 
						},4000);
						
					setTimeout(arguments.callee, 8000);
				}
				
				animateStar();
				
		});