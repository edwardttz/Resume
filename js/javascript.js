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
	var bodyWidth = body.innerWidth();
	if(bodyWidth < 576) {
		$(".cfooter").toggleClass('col-10 col-12');
		$(".link-logo").toggleClass('col-2 col-12');
	}
	// This is for responsiveness of the sidebar
	if(bodyWidth < 767) {
		$(".sidenav").addClass('d-none');
		$(".main").toggleClass('col-9 col-12');
		
	}
	// This is for responsiveness of the modal
	var model_width = $(".modal-content").width();
	if(model_width < 515) {
		$(".modal-logo").removeClass('float-left');
		$(".title-content").removeClass('float-left');
	} 
});

$(window).on( "orientationchange", function(event) {
	// This is for footer to be at the bottom of the page instead of the screen
	var body = $("body");
	var footer = $("footer");
	var footerLength = footer.position().top + footer.innerHeight();
	var bodyLength = body.innerHeight();
	var bodyWidth = body.innerWidth();
  	if (bodyWidth < bodyLength) {
		footer.removeAttr("style");
		footer.css("background-color", "#CDCDCD");
		if(bodyLength > 575) {
			$(".cfooter").toggleClass('col-12 col-10');
			$(".link-logo").toggleClass('col-12 col-2');
		}
		if(bodyLength > 767) {
			$(".sidenav").removeClass('d-none');
			$(".main").toggleClass('col-12 col-9');
		}
		// This is for responsiveness of the modal
		var model_width = $(".modal-content").width();
		if(model_width < 515) {
			$(".modal-logo").removeClass('float-left');
			$(".title-content").removeClass('float-left');
		} 
	} else {	
		if (footerLength < bodyWidth) {
			footer.css("position", "absolute");
			footer.css("bottom", "0px");
			footer.css("width", "100%");
		}
		if(bodyWidth < 576) {
			$(".cfooter").toggleClass('col-10 col-12');
			$(".link-logo").toggleClass('col-2 col-12');
		}
		if(bodyWidth < 767) {
			$(".sidenav").addClass('d-none');
			$(".main").toggleClass('col-9 col-12');
			$(".modal-logo").removeClass('float-left');
		}
		// This is for responsiveness of the modal
		var model_width = $(".modal-content").width();
		if(model_width < 515) {
			$(".modal-logo").removeClass('float-left');
			$(".title-content").removeClass('float-left');
		} 
	}
});

$(document).scroll(function() {
	var body = $("body");
	var y = $(document).scrollTop();
	var bodyWidth = body.innerWidth();
	var header = $(".sidenav");
	var main = $(".main");
	if(bodyWidth > 766) {
		if(y >= 792)  {
	        header.css({"position": "fixed", "top" : "8px"});
	        main.css({"margin-left": "285px"});
	    } else {
	        header.css("position", "relative");
	        main.css({"margin-left": "0px"});
	    }
	}
});