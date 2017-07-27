<?php
// 
// //check for captcha first if error we echo bak
// function rpHash($value) {
// 	$hash = 5381;
// 	$value = strtoupper($value);
// 	for($i = 0; $i < strlen($value); $i++) {
// 		$hash = (($hash << 5) + $hash) + ord(substr($value, $i));
// 	}
// 	return $hash;
// }
// 
// if(rpHash($_POST['defaultReal']) == $_POST['defaultRealHash'])
// {
	$to = 'indah@educa8.info';//$_POST['email'];

	$subject = $_POST['subject'];

	$dmsg = $_POST['msg'];
	$message = base64_decode($dmsg);

	//$from = $_POST['from'];

	$headers = "From: " . strip_tags($_POST['from']) . "\r\n";
	//$headers .= "Reply-To: ". strip_tags($_POST['req-email']) . "\r\n";
	$headers .= "CC: nando@educa8.info\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// Sending email

	if(mail($to, $subject, $message, $headers)){

	  echo 'Thank you for contacting us, we will reply to your email within 1-2 business day.';

	} else{

	  echo 'Unable to send email!\nPlease try again later or contact us via phone number at +62-21-2942493';

	}
// }
// else
// {
// 	echo rpHash($_POST['defaultReal']);//'Incorrect Captcha!';
// }
?>