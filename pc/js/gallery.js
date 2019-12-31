$(function(){
	$("#GNB > .menu > ul >li").hover(
		function(){
			$("#GNB > .menu > ul").addClass("over");
		},
		function(){
			$("#GNB > .menu > ul").removeClass("over");
		}
	);
	$("#GNB > .menu > ul >li:first-child > a").focusin(function(){
		$("#GNB > .menu > ul").addClass("over");
	});
	$("#GNB li:last-child li:last-child a").focusout(function(){
		$("#GNB > .menu > ul").removeClass("over");
	});
	$("#GNB >.menu > ul > li > a").focusin(function(){
		$(this).addClass("over");
	});
	$(".main_tab li").click(function(e){
		e.preventDefault();
		$(".main_tab li a").removeClass("on");
		$(this).find("a").addClass("on");
		var num=$(this).index();
		$(".main_panel > div").removeClass("active");
		$(".main_panel > div").eq(num).addClass("active");
	});
	$("#GNB li li:last-child a").focusout(function(){
		$(this).parent().parent().prev().removeClass("over");
	});

	var n=0;
	var targetx=0;

	$(".keyvisual .controlls li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		targetx=n * -1 * 100;
		$(".keyvisual .keyvisual_inner").css({"left" : targetx+"%"});
		$(".keyvisual .controlls li").removeClass("active");
		$(this).addClass("active");
	});
	$(".campus_find dl dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().next("dd").slideToggle(300);
	});
	$(".campus_find .area dl dd li a").click(function(e){
		e.preventDefault();
		$(".campus_find .area dl dd li a").removeClass("active");
		$(this).addClass("active");

		listName=$(this).text();
		$(".campus_find .area dt a").html(listName+"<span></span>");
		$(".campus_find .area dl dd").slideUp(300);
		$(".campus_find .area dt a").removeClass("active");
	});
	$(".campus_find .store dt a").click(function(e){
		e.preventDefault();
		$(".campus_find .area dt a").removeClass("active");
	});
	$(".campus_find .store dl dd li a").click(function(e){
		e.preventDefault();
		$(".campus_find .store dl dd li a").removeClass("active");
		$(this).addClass("active");

		listName=$(this).text();
		$(".campus_find .store dt a").html(listName+"<span></span>");
		$(".campus_find .store dl dd").slideUp(300);
		$(".campus_find .store dt a").removeClass("active");
	});
});