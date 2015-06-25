//ANIMATE BOAT
		
		jQuery(window).load(function() {
		
				var position;
				var boat = jQuery("#boat");
				var boatWrapper = jQuery("#boatWrapper");
				
				init();
				
				TWEEN.start();
				
					function init() {
					
						//get current position of the boat
					
						var currentYPosition = parseInt(boatWrapper.css("bottom"));
						position = new Object();
						position.y = currentYPosition;
											
						var tween = new TWEEN.Tween(position)
									.to({y: 280}, 1000)
									.easing(TWEEN.Easing.Quadratic.EaseInOut)
									.onUpdate(update);
							
									
						var tweenBack = new TWEEN.Tween(position) 
										.to({y: currentYPosition}, 1000)
										.easing(TWEEN.Easing.Quadratic.EaseInOut)
										.onUpdate(update);	
						
						tween.chain(tweenBack);
						tweenBack.chain(tween);
						
						tween.start();
						
					}
					
					
					function update() {
					
						//update boat's position
						boatWrapper[0].style.bottom = position.y + 'px';
					
					}
					
				
					
				
				//rotate via CSS3
				var animateBoat = function() {

					if(boat.hasClass("frame3")) boat.removeClass("frame3");
					boat.addClass("frame2");
					setTimeout(function() { 
						boat.removeClass("frame2"); 
						},800);
				

					setTimeout(function() {
						boat.addClass("frame3");
					}, 900);
				
					setTimeout(arguments.callee, 1650);
				}
				
				
				animateBoat();
			
			
		});

		
		
		
		
		
		
		
		
	