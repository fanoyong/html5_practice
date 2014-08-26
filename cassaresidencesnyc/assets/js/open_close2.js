$(document).ready(function() {	
	
	$(".cbp-spmenu-push").hide();
	$("#pg_wrap").hide();
	$("#footerBar").hide();
	
	
	window.setTimeout( function(){
    	$(".cbp-spmenu-push").fadeIn(1500);
	}, 800);
	window.setTimeout( function(){
		$("#pg_wrap").fadeIn(2500);
	}, 1000);
	window.setTimeout( function(){
		$("#footerBar").fadeIn(3000);
	}, 1000);
	
	$(".menuWrap li a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		
			 	 
  		window.setTimeout( function(){
			$("#pg_wrap").fadeOut(1500);
		}, 250);
		
		window.setTimeout( function(){
			$(".cbp-spmenu-push").fadeOut(1500);
		}, 300);
		
		window.setTimeout( function(){
			$("#footerBar").fadeOut(1500, redirectPage);
		}, 350);
		
		window.setTimeout( function(){ 
			$("#cbp-spmenu-s1").addClass('animated fadeOut');	
		}, 500);
		
	});	
	
	<!-------Redirect page to url------->
	function redirectPage() {
		window.location = linkLocation;
	}
	
	


	
});
