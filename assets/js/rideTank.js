$(document).ready(function() {
    
    function tankLeft() {
        $("#tankske").animate({left: -1000}, 0, "linear"); // instant move tank to left position
    }

	function tankRight() {
        $("#tankske").animate({left: 3000}, 0, "linear");
	}
	
    function tankRightToLeft() {
		var ANIMATION_TIME = Math.floor(Math.random()*5000); // ms
		tankRight();
		$("#tankske").addClass("flipped");
        $("#tankske").animate({left: -1000}, ANIMATION_TIME, "linear", randomDirection);
    }

    function tankLeftToRight() {
		var ANIMATION_TIME = Math.floor(Math.random()*5000); // ms
		tankLeft();
		$("#tankske").removeClass("flipped");
        $("#tankske").animate({left: $(window).width()}, ANIMATION_TIME, "linear", randomDirection);
    }

	function randomDirection() {
		if (Math.random() > 0.5){
			tankRightToLeft();
		}
		else {
			tankLeftToRight();
		}
	}
    
	if (!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) ) { // Exclude safari browser
	randomDirection();
}
	else { // Oh oh, it's safari!
		$("#tankske").animate({width: 0}, 2500); // shrink tankske until it's gone
	}

});
