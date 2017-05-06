$(document).ready(function(){
	var headerAutoSlide = setInterval(function(){
		$("a.control-next").trigger("click");
	}, 11000);
})
