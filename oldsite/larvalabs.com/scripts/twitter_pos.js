var Twitter_Pos = {

	init: function() {
		
		//Get object
		var element = $("#twitter_update");
		element.css("top", "515px");
		
		//get Twitter Box height
		var additionalHeight = element.height() - 32;
		//get Twitter Box position
		var currentPosition = parseInt(element.css("top"));
			
		if(additionalHeight>0) {
			//calculate new position
			var newPosition = (currentPosition - additionalHeight)+"px"; 
			element.css("top",newPosition);
			
		}
		
	
	
	}



} 


jQuery(document).ready( function() {
	Twitter_Pos.init();
} ); 