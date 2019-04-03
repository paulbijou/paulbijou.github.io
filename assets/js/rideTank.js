$(document).ready(function() {
    
	function flipImage(img) {
    if (img.attr('flipped')) {
        img.removeAttr('flipped');
	}
    else {
		img.attr('flipped','flipped');
	}
}

	var ANIMATION_TIME = 5000; // ms

    function tankStart() {
        $("#tankske").animate({left: -3000}, 0, "swing", tankRight);
    }
	
    function tankLeft() {
        $("#tankske").animate({left: -300}, ANIMATION_TIME, "swing", tankRight);
    }

    function tankRight() {
		$("#tankske").attr("flipped"); // TODO make sure this works
        $("#tankske").animate({left: $(window).width()}, ANIMATION_TIME, "linear", tankLeft);
    }
    
    tankStart();
});
