$(document).ready(function(){
	$('.b-1 .button-list li').click(function(){
		if ( $(this).hasClass("active") ) {
			$('.b-1 .button-list li').removeClass("active");
			$('.b-1 .button-list').removeClass("active");
		} else {
			$('.b-1 .button-list li').removeClass("active");
			$('.b-1 .button-list').addClass("active");
			$(this).addClass("active");
		}
	});
});