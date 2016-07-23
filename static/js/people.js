$(document).ready(function(){
	$('#all').click(function(){
		$('.advisors').fadeIn();
		$('.mentors').fadeIn();
		$('.founding').fadeIn();
		$('.management').fadeIn();
		$('.project-wrapper').css('padding-right', '25px');
	});
	$('#advisors-trigger').click(function(){
		$('.mentors').fadeOut();
		$('.founding').fadeOut();
		$('.management').fadeOut();
		$('.advisors').fadeIn();
		$('.project-wrapper').css('padding-right', '180px');
	})
	$('#mentors-trigger').click(function(){
		$('.advisors').fadeOut();
		$('.founding').fadeOut();
		$('.management').fadeOut();
		$('.mentors').fadeIn();
		$('.project-wrapper').css('padding-right', '80px');
	})
	$('#founding-trigger').click(function(){
		$('.advisors').fadeOut();
		$('.mentors').fadeOut();
		$('.management').fadeOut();
		$('.founding').fadeIn();
		$('.project-wrapper').css('padding-right', '80px');
	})
	$('#management-trigger').click(function(){
		$('.advisors').fadeOut();
		$('.founding').fadeOut();
		$('.mentors').fadeOut();
		$('.management').fadeIn();
		$('.project-wrapper').css('padding-right', '180px');
	})
	$('.title a').click(function(){
		$('.title a').removeClass('active');
		$(this).addClass('active');
	})
	if ( window.location.hash ) {
		var hash = smoothScroll.escapeCharacters( window.location.hash ); // Escape the hash
		var toggle = document.querySelector( 'a[href*="' + hash + '"]' ); // Get the toggle (if one exists)
		var options = {
			speed: 1000,
			callback: function(anchor){
				var id=anchor+'-trigger';
				$(id).trigger('click');
				console.log($(id));
			}
		}; // Any custom options you want to use would go here
		smoothScroll.animateScroll( hash, toggle, options );
	}
})
