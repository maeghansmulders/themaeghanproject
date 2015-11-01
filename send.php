<?php 

	$to = "maeghansmulders@gmail.com"; // this is your Email address
	$from = $_POST['email']; // this is the sender's Email address
	$subject = "Message from your website";
	$message = $from . " wrote the following:" . "\n\n" . $_POST['content'];

	$headers = "From:" . $from;

	if(mail($to,$subject,$message,$headers)){
		echo "Sent"; 
	}else{
		http_response_code(500);
		echo "Error";
	}
?>