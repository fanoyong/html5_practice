			$( document ).ready( function() {
				var $body = $('body'); //Cache this for performance
				
				//Scale the home page
				
				var setBodyScale = function() {
					var scaleFactor = 0.3,
						scaleSource = $body.width(),
						maxScale = 250,
						minScale = 150;
						

					var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

					if (fontSize > maxScale) fontSize = maxScale;
					if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

					$('.loft_text').css('font-size', fontSize + '%');
					
				}
				
				//Scale the context text
				
				var $body2 = $('body'); //Cache this for performance
				
				var setBodyScale2 = function() {
					var scaleFactor2 = 0.15,
						scaleSource2 = $body2.width(),
						maxScale2 = 250,
						minScale2 = 170;
						

					var fontSize2 = scaleSource2 * scaleFactor2; //Multiply the width of the body by the scaling factor:

					if (fontSize2 > maxScale2) fontSize2 = maxScale2;
					if (fontSize2 < minScale2) fontSize2 = minScale2; //Enforce the minimum and maximums

					$('#contactHeader').css('font-size', fontSize2 + '%');
					
				}
				
				//Exacute the scaling functions
				
				$('span').click(function(){
					//alert("Hello World!");
					setBodyScale2();
				});
			
			    $(window).resize(function(){
					setBodyScale();
					setBodyScale2();
				});
				 
				function setTxt() {
					//alert("Hello World!");
					setBodyScale();
					//setBodyScale2();
				};
				
				window.onload = setTxt;
				
			});