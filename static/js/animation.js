$(document).ready(function(){
	var headerAutoSlide = setInterval(function(){
		$("a.control-next").trigger("click");
	}, 11000);
	// $(".header-1-sub").hover(function(){
	// 	clearInterval(headerAutoSlide);
	// }, function(){
	// 	headerAutoSlide = setInterval(function(){
	// 		$("a.control-next").trigger("click");
	// 	}, 8000);
	// })
})