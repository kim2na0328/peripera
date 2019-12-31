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

	var n=0;
	var pos=0;

	setInterval(function(){
		if(n <2){
			n=n+1;
		}
		else{
			n=0;
		}

		pos=n*-1*100;
		$("#start .keyvisual ul").animate({"left" : pos+"%"}, 300);
	}, 3000);

	// var newphotoH;
	// var newtotal=3;
	// var newpos=0;
	// var photoN=0;
	//
	// function newLayout(){
	// 	$(".new_photo img").css({width:"100%"});
	// 	newphotoH=$(".new_photo img").height()+200;
	//
	// 	$(".ner .new_photo").css({height:newphotoH});
	// }
	//
	// setTimeout(newLayout, 30);
	//
	// setInterval(function(){
	// 	if(photoN < (newtotal-1)){
	// 		photoN+=1;
	// 	}
	// 	else{
	// 		photoN=0;
	// 	}
	// 	newpos=(photoN*100*-1)+"%";
	// 	$(".new_photo").animate({left:newpos}, 300, function(){
	// 		$(".scroller li a").removeClass("active");
	// 		$(".controller li").eq(photoN).find("a").addClass("active");
	// 	});
	// }, 6000);
	//
	// $(window).resize(newLayout);
});
