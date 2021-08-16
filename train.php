<?php

require("/phpmailer/phpmailer/src/PHPMailer.php");
  require("/phpmailer/phpmailer/src/SMTP.php");
require_once('phpmailer/phpmailer/src/Autoload.php');

$mail = new PHPMailer();

    $mail->IsSMTP(); // enable SMTP
try {
    $mail->SMTPDebug = 2;                                      
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gfg.com;';                    
    $mail->SMTPAuth   = true;                             
    $mail->Username   = 'olaadases@gmail.com';                 
    $mail->Password   = 'Qt1AY39.0';                        
    $mail->SMTPSecure = 'tls';                              
    $mail->Port       = 587;  
  
    $mail->setFrom('olaadases@gmail.com');           
    $mail->addAddress('olaadases@gmail.com');
    $mail->addAddress('olaadases@gmail.com');
       
    $mail->isHTML(true);                                  
    $mail->Subject = 'Subject';
    $mail->Body    = 'HTML message body in <b>bold</b> ';
    $mail->AltBody = 'Body in plain text for non-HTML mail clients';
    $mail->send();
    echo "Mail has been sent successfully!";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
  
