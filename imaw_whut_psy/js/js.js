
$(document).ready(function(e) {			
	t = $('.latest').offset().top;
	mh = $('.content_nav').height();
	fh = $('.latest').height();
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > t - 10){
			$('.latest').css('position','fixed');
			$('.latest').css('top',0+'px');
			l =$('.latest').left();
			$('.latest').css('left',l-10+'vw');
							
		}else{
			$('.latest').css('position','');
		}
	})
});