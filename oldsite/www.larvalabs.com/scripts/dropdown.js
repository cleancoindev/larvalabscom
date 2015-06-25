var Dropdown = {
	
	speed: 200, 
	
	init: function() {
	
		//get jQuery object
		Dropdown.menu = jQuery('#dropdown>ul'); 
		Dropdown.height = parseInt(Dropdown.menu.css("height"));
		Dropdown.paddingTop = parseInt(Dropdown.menu.css("padding-top"));
		Dropdown.menu.css("top", 0);
		Dropdown.menu.css("position","absolute");
	
	},
	
	interact: function() {
	
		
		jQuery("#dropdown").hover(Dropdown.expand, Dropdown.collapse);
		
	
	},
	
	expand: function() {
	
		Dropdown.menu.css("visibility","visible");
		
		/*position element
		Dropdown.menu.stop(true,true);
		Dropdown.menu.effect("slide", {direction: "up"},  Dropdown.speed);
		*/
	
	}, 
	
	
	collapse: function() {
		Dropdown.menu.css("visibility","hidden");
		/*
		Dropdown.menu.stop(true,true);
		Dropdown.menu.hide("slide", {direction: "up"},  Dropdown.speed);
		*/
	}














}



jQuery(document).ready(function() {

	Dropdown.init();


});



jQuery(window).bind("load",Dropdown.interact);