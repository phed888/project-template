$(document).ready(function() {
	var browserWidth;
	var leftColumnPadding = 0;
	var rightColumnPadding = 40;
	var leftColumnReturnButton = 40;
	var wrapper = $('#wrapper');

	function setContentWidth() {
		browserWidth = $(window).width();
		$('.left-column').css('width', browserWidth - leftColumnPadding + leftColumnReturnButton);
		$('.right-column').css('width', browserWidth - rightColumnPadding - leftColumnReturnButton);
		wrapper.css('width', browserWidth + browserWidth + leftColumnReturnButton + 100);
	}

	setContentWidth();

	$(window).resize(function() {
		setContentWidth();
	});

	$('.font-test').click(function() {
		$(this).next('.holder').slideToggle();
	});
	$('.holder').click(function() {
		if(wrapper.css('margin-left') === '0px') {
			wrapper.animate({
				marginLeft: "-=" + browserWidth
			}, 500);
		} else {
			wrapper.animate({
				marginLeft: 0
			}, 500);
		}
	});
});