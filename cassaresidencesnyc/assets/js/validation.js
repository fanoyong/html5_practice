

$(document).ready(function(){
	//global vars
	var form = $("#customForm");
	var name = $("#name");
	var email = $("#email");
	var required = $("#required");
	var sameName =$("#name");

	
	//On blur
	name.blur(validateName);
	email.blur(validateEmail);
	sameName.blur(validateSameName);
	//On key press
	name.keyup(validateName);
	//On Submitting
	form.submit(function(){
		if(validateName() & validateEmail() & validateSameName())
		{
			return true;
		}else{
			return false;
		}
	});
	
	//validation functions
	function validateEmail(){
		//testing regular expression
		var a = $("#email").val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]$/;
		//if it's valid email
		if(filter.test(a)){
			email.removeClass("error");
			required.removeClass("error");
			return true;
		}
		//if it's NOT valid
		else{
			email.addClass("error");
			required.addClass("error");
			return false;
		}
	}
	
	function validateName(){
		//if it's NOT valid
		if(name.val().length < 4){
			name.addClass("error");
			required.addClass("error");
			return false;
		}
		//if it's valid
		else{
			name.removeClass("error");
			required.removeClass("error");
			return true;
		}
	}
	
	function validateSameName(){
		//if it's NOT valid
		if(sameName.val() == "Name"){
			sameName.addClass("error");
			sameName.addClass("error");
			return false;
		}
		//if it's valid
		else{
			sameName.removeClass("error");
			sameName.removeClass("error");
			return true;
		}
	}
});