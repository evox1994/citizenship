$(document).ready(function(){
	$('.b-1 .button-list li').click(function(){
		var el = $(this).data("text");
		if ( $(this).hasClass("active") ) {
			$('.b-1 .button-list li').removeClass("active");
			$('.b-1 .button-list').removeClass("active");
			$(el).removeClass("false");
			$(el + " span").removeClass("active");
		} else {
			if ( $(this).hasClass("false-btn") ) {
				$(el + " span").removeClass("active");
				$(el + " .false-span").addClass("active");
				$(el).addClass("false");
			} else {
				$(el + " span").removeClass("active");
				$(el + " .true-span").addClass("active");
				$(el).removeClass("false");
			}
			$('.b-1 .button-list li').removeClass("active");
			$('.b-1 .button-list').addClass("active");
			$(this).addClass("active");
			$('.b-1 .submit-btn-error').removeClass("active");
            $('.b-1 .button-list li').removeClass("error");
		}
	});
});