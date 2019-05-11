//Плавный скролл
$(function() {
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
	});
});
//Изменение шапки
$(window).scroll(function(){
	if ($(window).scrollTop() > 0) {
		$('header').addClass('scroll');
	}
	else {
		$('header').removeClass('scroll')
	}
});