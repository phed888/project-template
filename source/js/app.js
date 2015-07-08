$(document).ready(function() {
	var browserWidth = $(window).width();
	$('.left-column').css('width', browserWidth);
	$('.right-column').css('width', browserWidth);
	$('#wrapper').css('width', browserWidth*2.05);
	$('.font-test').click(function() {
		$(this).next('.holder').slideToggle();
	});
	$('.holder').click(function() {
		$('#wrapper').animate({
			marginLeft: "-=" + browserWidth
		}, 500);
	});
	$('.right-column').click(function() {
		$('#wrapper').animate({
			marginLeft: "+=" + browserWidth
		}, 500);
	});
});