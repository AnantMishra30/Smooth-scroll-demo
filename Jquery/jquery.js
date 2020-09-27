 $(document).ready(function(){
	 $("#image1,#image2,#image3,#image4").click(function(){
		 
		var img=$(this).attr("src");
		
		$("body").append('<div id="curtain"></div>');
		
		$("body").append('<img src="'+img+'" id="light"/>');
		$("body").append('<div id="close"></div>');
		
		$("#light").animate({'opacity':'1'},1000);
		$("#close").click(function(){
			$("#light").remove();
			$("#curtain").remove();
			$("#close").remove();	
		});
	 });

	 $("#play").click(function(){
		$("#slider img:last-child").animate({'opacity':'0'},5000,function(){
		var img=$("#slider img:last-child").attr('src');
		$("#slider").prepend('<img src="'+img+'"/>');
			$("#slider img:last-child").remove();
			$("#play").click();
			});
			
	 });
	$("#play").click();
	
	$("#home").click(function(){
		
		$("body,html").stop().animate({scrollTop:$("#aboutus").offset().top-90},1000);
	});
	$("#home").offset().top;
 
	
	$("#photos").click(function(){
		
		$("body,html").stop().animate({scrollTop:$("#gallery").offset().top-90},1000);
	});
	$("#photos").offset().top;
	
	
	
	$("#zone").click(function(){
		
		$("body,html").stop().animate({scrollTop:$("#fanzone").offset().top-90},1000);
	});
	$("#zone").offset().top;
 

$(window).scroll(function() {
    $('#header').css('opacity','.7');
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('#header').css('opacity','.9');
    }, 2));
});
});
