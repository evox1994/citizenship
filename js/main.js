$(document).ready(function(){

    $('.background').height( $(window).height() );
    $('.fancybox').fancybox();
    $(window).resize(function(){
        $('.background').height( $(window).height() );
    });	

    $('.b-1-submit a').click(function(){
        if ( $('.b-1 .button-list').hasClass("active") ) {
            var el = $(this).attr('href');
            var next = $(el).data('next');
            var text_block = $(el).data('text');
            $('.b-1 .submit-text').removeClass("active");
            $(next).addClass("active");
            $('.b-1 ' + text_block).addClass("active");
            $(this).attr("href",next);
            $('.b-1 .button-list li').removeClass("active");
            $('.b-1 .button-list').removeClass("active");
            if ( $('.b-1 .submit-list li:last-child').hasClass("active") ) {
                $('.b-1 .button-list').css('display','none');
                $('.b-1 .submit-btn').css('display','none');
            }
        } else {
            $('.b-1 .submit-btn-error').addClass("active");
            $('.b-1 .button-list li').addClass("error");
        }
        return false;
    });

    $('.mobile-menu-btn').click(function(){
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");
            $('.mobile-menu').removeClass('active');
            $('.mobile-bg').removeClass("active");
        } else {
            $(this).addClass("active");
            $('.mobile-menu').addClass("active");
            $('.mobile-bg').addClass("active");
        }
    });

    $('.popup-more a').click(function(){
        if ( $('.popup-more .button-list').hasClass("active") ) {
            var el = $(this).attr('href');
            var next = $(el).data('next');
            var text_block = $(el).data('text');
            $('.popup-more .submit-text').removeClass("active");
            $(next).addClass("active");
            $('.popup-more ' + text_block).addClass("active");
            $(this).attr("href",next);
            $('.popup-more .button-list li').removeClass("active");
            $('.popup-more .button-list').removeClass("active");
            if ( $('.popup-more .submit-list li:last-child').hasClass("active") ) {
                $('.popup-more .button-list').css('display','none');
                $('.popup-more .submit-btn').css('display','none');
            }
        } else {
            $('.popup-more .submit-btn-error').addClass("active");
            $('.popup-more .button-list li').addClass("error");
        }
        return false;
    });

    $('.popup-more .button-list li').click(function(){
        if ( $(this).hasClass("active") ) {
            $('.popup-more .button-list li').removeClass("active");
            $('.popup-more .button-list').removeClass("active");
        } else {
            $('.popup-more .button-list li').removeClass("active");
            $('.popup-more .button-list').addClass("active");
            $(this).addClass("active");
            $('.popup-more .submit-btn-error').removeClass("active");
            $('.popup-more .button-list li').removeClass("error");
        }
    });

    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }
    $(window).resize(resize);
    resize();

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();
    
	// var myPlace = new google.maps.LatLng(55.754407, 37.625151);
 //    var myOptions = {
 //        zoom: 16,
 //        center: myPlace,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        disableDefaultUI: true,
 //        scrollwheel: false,
 //        zoomControl: true
 //    }
 //    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

 //    var marker = new google.maps.Marker({
	//     position: myPlace,
	//     map: map,
	//     title: "Ярмарка вакансий и стажировок"
	// });

    //  var options = {
    //     $AutoPlay: true,                                
    //     $SlideDuration: 500,                            

    //     $BulletNavigatorOptions: {                      
    //         $Class: $JssorBulletNavigator$,             
    //         $ChanceToShow: 2,                           
    //         $AutoCenter: 1,                            
    //         $Steps: 1,                                  
    //         $Lanes: 1,                                  
    //         $SpacingX: 10,                              
    //         $SpacingY: 10,                              
    //         $Orientation: 1                             
    //     }
    // };

    // var jssor_slider1 = new $JssorSlider$("slider1_container", options);

});