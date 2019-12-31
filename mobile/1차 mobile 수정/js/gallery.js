$(function(){
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").addClass("static");
		$("#mobile").addClass("active");
		$(".dim").addClass("active");
	});
	$(".close").click(function(){
		$("body").removeClass("static");
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
	});

	$("#mobile > ul > li").click(function(e){
		e.preventDefault();
		if($(this).find(".sub").is(":visible") == false){
			$(".sub").slideUp(300);
			$(this).find(".sub").slideDown(300);

		}
		else{
				$(this).find(".sub").slideUp(300);
		}
	});

	$(".keyvisual").mobileDragEvent2({total:3});
});