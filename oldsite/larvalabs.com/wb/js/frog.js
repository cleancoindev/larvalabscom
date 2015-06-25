var Frog = {
	
		init : function() {
			//get frog
			var frog = jQuery("#frog");
			
			
			var timer = setTimeout(function() {
				
				Frog.blink();
				
				//set random number 
				var randomNumber = Math.floor(Math.random()*3001);
			
				//call this function again 
				setTimeout(arguments.callee, randomNumber);
				
			}, 500);
			
			
		
		
		},
		
		blink : function() {
				var frog = jQuery("#frog");
				var timer = setTimeout(function() { frog.css({backgroundPosition : "-130px 0"}); }, 500);
				timer = setTimeout(function() { frog.css({backgroundPosition : "0 0"});}, 800);
		}
	
	
	
	}
	