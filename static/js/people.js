$(document).ready(function(){
	// var width = $('#advisors').width();
	// var height = $('#advisors').height();
	$('#all').click(function(){
		$('#advisors').show();
		$('#mentors').show();
		$('#team').show();
	});
	$('#advisors-trigger').click(function(){
		$('#advisors').show();
		$('#mentors').hide();
		$('#team').hide();	
	})
	$('#mentors-trigger').click(function(){
		$('#advisors').hide();
		$('#mentors').show();
		$('#team').hide();
	})
	$('#team-trigger').click(function(){
		$('#advisors').hide();
		$('#team').show();
		$('#mentors').hide();
	})
	$('.title a').click(function(){
		$('.title a').removeClass('active');
		$(this).addClass('active');
	})
})