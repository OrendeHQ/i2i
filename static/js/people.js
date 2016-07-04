$(document).ready(function(){
	$('#all').click(function(){
		$('.advisors').show();
		$('.mentors').show();
		$('.founding').show();
		$('.management').show();
	});
	$('#advisors-trigger').click(function(){
		$('.advisors').show();
		$('.mentors').hide();
		$('.founding').hide();
		$('.management').hide();
	})
	$('#mentors-trigger').click(function(){
		$('.advisors').hide();
		$('.mentors').show();
		$('.team').hide();
		$('.management').hide();
	})
	$('#team-trigger').click(function(){
		$('.advisors').hide();
		$('.founding').show();
		$('.mentors').hide();
		$('.management').hide();
	})
	$('#management-trigger').click(function(){
		$('.advisors').hide();
		$('.founding').show();
		$('.mentors').hide();
		$('.management').hide();
	})
	$('.title a').click(function(){
		$('.title a').removeClass('active');
		$(this).addClass('active');
	})
	if(/#advisors$/.test(window.location.href)){
		$('#advisors-trigger').trigger('click');
	}else if(/#management$/.test(window.location.href)){
		$('#management-trigger').trigger('click');
	}else if(/#founding$/.test(window.location.href)){
		$('#team-trigger').trigger('click');
	}else if(/#mentors$/.test(window.location.href)){
		$('#mentors-trigger').trigger('click');
	}
})
