$(document).ready(function(){
	$('.b-1 .button-list li').click(function(){
		if ( $(this).hasClass("active") ) {
			$('.b-1 .button-list li').removeClass("active");
		} else {
			$('.b-1 .button-list li').removeClass("active");
			$(this).addClass("active");
		}
	});
});