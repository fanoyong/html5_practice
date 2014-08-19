$(document).ready(function() {
	$("#Fullpage_wrapper").hide();
	
	
	
	window.setTimeout( function(){
    	$("#Fullpage_wrapper").fadeIn(1500);
	}, 800);
	
	$(".menuWrap li a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		
		
		window.setTimeout( function(){
			$("#Fullpage_wrapper").fadeOut(1500, redirectPage);
		}, 250);
		
	});	
	
	
	$("#imageBoarder a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		
		
		window.setTimeout( function(){
			$("#Fullpage_wrapper").fadeOut(1500, redirectPage);
		}, 250);
		
	});	
	
	<!-------Redirect page to url------->
	function redirectPage() {
		window.location = linkLocation;
	}
});
