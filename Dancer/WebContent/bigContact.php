<?php

$EmailFrom = "robin@croft6942.freeserve.co.uk";
$EmailTo = "angelajanecroft@gmail.com";
$Subject = "online form";
$Name = Trim(stripslashes($_POST['Name']));
$Email = Trim(stripslashes($_POST['Email']));
$Tel = Trim(stripslashes($_POST['Tel']));
$Message = Trim(stripslashes($_POST['Message']));
// validation
$validationOK=true;
if (!$validationOK) {
  echo "please check your details";
  header("Location: http://www.knowsleyschoolofdance.co.uk/contact.html");
  exit;
}

// prepare email body text

$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Tel: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"1;URL=contact.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"1;URL=contact.html\">";
}
?>
