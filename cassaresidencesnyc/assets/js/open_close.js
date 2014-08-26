$(document).ready(function() {
	
	$("#Fullpage_wrapper").hide();
	
	
	window.setTimeout( function(){
    	$("#Fullpage_wrapper").fadeIn(800);
	}, 800);
	
	$(".menuWrap li a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		
		
		window.setTimeout( function(){
			$("#Fullpage_wrapper").fadeOut(900, redirectPage);
		}, 250);
		
	});	
	
	$("#footerInfo_Wrap li a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		
		
		window.setTimeout( function(){
			$("#Fullpage_wrapper").fadeOut(900, redirectPage);
		}, 250);
		
	});	
	
	$("#sm_logo a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		
		
		window.setTimeout( function(){
			$("#Fullpage_wrapper").fadeOut(900, redirectPage);
		}, 250);
		
	});	
	
	
	<!-------Redirect page to url------->
function redirectPage() {
		window.location = linkLocation;
	}
});
