<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
	{
		echo "Thank you for signing up! You will hear from us when the next newsletter is released!";
		$name = $_POST["name"];
		$emailAddress = $_POST["emailAddress"];
		$subject = $name, "Wants to join the Xinyu Says mailing list!";
		$message = $emailAddress;

		$toEmail = "buscow@gmail.com";
		$mailHeaders = "From: Xinyusays.com <postmaster@Xinyusays.com>\r\n";
		$mailHeaders .= "Reply to: " . $name . "<". $emailAddress .">\r\n";
		mail($toEmail, $subject, $message, $mailHeaders);
}
?>