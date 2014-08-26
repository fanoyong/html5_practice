$(document).ready(function() {
	
	//$("#formWrap").css("visibility", "hidden");
	
	$("#logo").hide("slow");
	$("#FontTest").hide("slow");
	$("#formWrap").hide();
	$("#bottomBoarder").hide();
	
	$("#logo").fadeIn("slow");
	$("#FontTest").fadeIn("slow");
	$("#bottomBoarder").fadeIn("slow");
	
	
	//fade Out Content
	$("#textbox a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
	
		//$("#formWrap").css("visibility", "visible");
	
		$("#formWrap").fadeIn("slow");
		$("#textbox").fadeOut("slow");
		$("#logo").fadeOut("slow");
		$("#FontTest").fadeOut("slow");
		
		/*window.setTimeout( function(){
			$("#formWrap").addClass('animated fadeIn');
		}, 1000);*/
	});	
	
	$("#closeBTN a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
	
		//$("#formWrap").css("visibility", "visible");
		$("#formWrap").fadeOut("slow");
		$("#textbox").fadeIn("slow");
		$("#logo").fadeIn("slow");
		$("#FontTest").fadeIn("slow");
		/*window.setTimeout( function(){
			$("#formWrap").addClass('animated fadeIn');
		}, 1000);*/
	});	
	
	
	//teserBtn var imgBtns=new Array('#imageBoarder','#Volvo','#BMW');
  
	$(".imageBoarder").hover(function () {
		//SET OPACITY TO 100%
		$(this).stop().animate({
			opacity: 0.0
		}, "slow");
		},
		// ON MOUSE OUT
		function () {
		// SET OPACITY BACK TO 50%
		$(this).stop().animate({
			opacity: 1.0
		}, "slow");
	});
	
	$(".imageBoarder").click(function () {
		//SET OPACITY TO 100%
		$(this).stop().animate({
			opacity: 1.0
		}, "slow");
	});	
	/*
	$("#copyWrap").click(function(event){
	 	//$("#copybox").fadeOut("slow");
		window.setTimeout( function(){
			$("#copybox").addClass('animated shake');
		}, 100);
	});
	
	$("#teserBtn").click(function(event){
	 	//$("#copybox").fadeOut("slow");
		window.setTimeout( function(){
			$("#copybox").addClass('animated shake');
		}, 100);
	});
	*/

	
});
