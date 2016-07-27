$(document).ready(function(){
	var headerAutoSlide = setInterval(function(){
		$("a.control-prev").trigger("click");
	}, 11000);
})
