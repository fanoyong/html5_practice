  function UpdateTableHeaders() {
       $(".persist-area").each(function() {
       
           var el             = $(this),
               offset         = el.offset(),
               scrollTop      = $(window).scrollTop(),
               floatingHeader = $(".floatingHeader", this),
			   boarderBottom =  $(".bottomBoarder",this)
           
           if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
               floatingHeader.css({
                "visibility": "visible",
               });
			   boarderBottom.fadeOut("slow");
           } else {
               floatingHeader.css({
                "visibility": "hidden"
               }); 
			   boarderBottom.fadeIn("slow");
           };
       });
    }
    
    // DOM Ready      
    $(function() {
      
       var clonedHeaderRow;
    
       $(".persist-area").each(function() {
           clonedHeaderRow = $(".persist-header", this);
           clonedHeaderRow
             //.before(clonedHeaderRow.clone())
             //.css("width", clonedHeaderRow.width())
             .addClass("floatingHeader");
       });
	   
       
       $(window)
        .scroll(UpdateTableHeaders)
        .trigger("scroll");
       
    });
	
	$(function() {
	  $('#pg_scroll a').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});