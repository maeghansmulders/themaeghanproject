$(document).ready(function(){
	var contactForm = $("#contact-form");
	var emailInput = contactForm.find("[name=email]");
	var contentInput = contactForm.find("[name=content]");

	contactForm.on('submit', function(e){
		e.preventDefault();
		var dataString = 'email=' + emailInput.val() + '&content=' + contentInput.val();

		$.ajax({
			type: "POST",
            url: "send.php",
            data: dataString,
            success: function(){
            	alert('Message sent, thank you!');
            }
		});
	});
});