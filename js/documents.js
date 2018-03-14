$(document).ready(function(){
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		var pos_footer = $('.footer').offset().top;
		if ( st < ( pos_footer - ($(window).height() - $('.footer').height()) - 291 ) ) {
			$('.fixed-window').css({
				'position': 'fixed',
				'left': 'calc(50% + 315px)',
				'top': '242px',
				'bottom': 'auto',
			});
		} else {
			$('.fixed-window').css({
				'position': 'absolute',
				'left': 'calc(100% - 300px)',
				'bottom': '83px',
				'top': 'auto',
			});
		}
	});
});