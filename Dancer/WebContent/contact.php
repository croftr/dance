<?php
$to = "dance@knowsleyschoolofdance.co.uk";
$subject = $_REQUEST['Subject'] ;
$email = $_REQUEST['From'] ;
$message = $_REQUEST['Body'] . " From " .  $_REQUEST['From'];
$headers = "From: $email";

$sent = mail($to, $subject, $message, $headers);

header("Location: http://www.knowsleyschoolofdance.co.uk/contact.html"); 
?>

