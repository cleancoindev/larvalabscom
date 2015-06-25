var Baby = {
	
		init : function() {
			
			//get baby
			var baby = jQuery("#baby");
			
			
			var timer = setTimeout(function() {
				
				Baby.nod();
				
				//set random number 
				var randomNumber = Math.floor(Math.random()*3001)+3000;
			
				//call this function again 
				setTimeout(arguments.callee, randomNumber);
				
			}, 2000);
			
			
		
		
		},
		
		nod : function() {
				var baby = jQuery("#baby");
				var timer = setTimeout(function() { baby.css({backgroundPosition : "-109px 0"}); }, 500);
				timer = setTimeout(function() { baby.css({backgroundPosition : "0 0"}); clearTimeout(timer);}, 800);
		}
	
	
	
	}
	