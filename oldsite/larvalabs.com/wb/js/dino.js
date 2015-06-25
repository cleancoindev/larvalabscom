var Illustration = {
	
	init: function() {
		//get illustration 
		var illustration = jQuery("#illustration")[0];
		
		//create wrapper
		var boatWrapper = document.createElement("div");
		boatWrapper.id = "boatWrapper";
		
		
		//create boat
		var boat = document.createElement("div");
		boat.id = "boat";
		boat.className = "png_bg";
		
		//store boat reference
		Illustration.boat = boatWrapper;
		
		
		//create hull
		var hull = document.createElement("img");
		hull.id = "hull";
		hull.src = "images/hull.png";
		
		//create dino
		var dino = document.createElement("div");
		dino.id = "dino";
		dino.className = "png_bg";
		
		//create frog
		var frog = document.createElement("div");
		frog.id = "frog";
		frog.className = "png_bg";
		
		//create baby
		var baby = document.createElement("div");
		baby.id = "baby";
		baby.className = "png_bg";
		
		//Append elements 
		illustration.appendChild(boatWrapper);
		boatWrapper.appendChild(boat);
		boat.appendChild(hull);
		boat.appendChild(dino);
		boat.appendChild(frog);
		boat.appendChild(baby);
	},
	
	disappear: function() {
			jQuery(Illustration.boat).css({opacity: 0});
	},
	
	appear: function() {
		jQuery(Illustration.boat).animate({opacity: 1});
	}


}

var Dino = {
	
		init : function() {
			
			//get dino
			var dino = jQuery("#dino");
			
			
			var timer = setTimeout(function() {
				
				Dino.wink();
				
				//set random number 
				var randomNumber = Math.floor(Math.random()*3001)+1000;
			
				//call this function again 
				setTimeout(arguments.callee, randomNumber);
				
			}, 3000);
			
			
		
		
		},
		
		wink : function() {
				var dino = jQuery("#dino");
				var timer = setTimeout(function() { dino.css({backgroundPosition : "-106px 0"}); }, 500);
				timer = setTimeout(function() { dino.css({backgroundPosition : "0 0"}); clearTimeout(timer);}, 800);
		}
	
	
	
	}
	