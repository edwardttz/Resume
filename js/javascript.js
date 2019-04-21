$(document).ready(function() {
	// This is for footer to be at the bottom of the page instead of the screen
	var body = $("body");
	var footer = $("footer");
	footer.css("background-color", "#CDCDCD");
	if(footer.position().top + 60 < body.innerHeight()) {
		footer.css("position", "absolute");
		footer.css("bottom", "0px");
		footer.css("width", "100%");
	}

	// This is for the images in life.html to hide if the screen is too small to view
	//$(".image-row").remove();
	//var exp_container = $(".exp-container");
	//exp_container.css("height", "100px");
});
$(window).on( "orientationchange", function(event) {
	// This is for footer to be at the bottom of the page instead of the screen
	var body = $("body");
	var footer = $("footer");
	footerLength = footer.position().top + footer.innerHeight();
	bodyLength = body.innerHeight();
	bodyWidth = body.innerWidth();
  	if (bodyWidth < bodyLength) {
		footer.removeAttr("style");
		footer.css("background-color", "#CDCDCD");
	} else {	
		if (footerLength < bodyWidth) {
			footer.css("position", "absolute");
			footer.css("bottom", "0px");
			footer.css("width", "100%");
		}
	}
});