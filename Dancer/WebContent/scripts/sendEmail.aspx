<%


System.Net.Mail.MailMessage message = new System.Net.Mail.MailMessage();
message.From = new MailAddress("robin@croft6942.freeserve.co.uk");
 
message.To.Add(new MailAddress("angelajanecroft@gmail.com"));
message.To.Add(new MailAddress("ajanecroft@gmail.com"));
 

message.Subject = "This is my subject";
message.Body = "This is the content";
 
System.Net.Mail.SmtpClient client = new System.Net.Mail.SmtpClient();
client.Send(message);
%>