$(document).ready(function(){
	$('.b-1 .button-list li').click(function(){
		if ( $(this).hasClass("active") ) {
			$('.b-1 .button-list li').removeClass("active");
		} else {
			$('.b-1 .button-list li').removeClass("active");
			$(this).addClass("active");
		}
	});
	$('.b-3-slider').slick({
		infinite: true,
		slidesToShow: 3,
		responsive: [{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2}
			},
			{
			breakpoint: 550,
			settings: {
				slidesToShow: 1}
			}
		]
	});
});