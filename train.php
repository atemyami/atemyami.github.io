<?php
ini_set('display_errors', 1);
error_reporting( E_ALL );
/*
curl --request POST \
--url https://api.sendgrid.com/v3/mail/send \
--header 'Authorization: Bearer <<YOUR_API_KEY>>' \                                                                                                                                                                                                                                                                                                                                                                                                                                               
--header 'Content-Type: application/json' \
--data '{"personalizations":[{"to":[{"email":"john.doe@example.com","name":"John Doe"}]
,"subject":"Hello, World!"}],
"content": [{"type": "text/plain", 
    "value": "Heya!"}],"
    from":{"email":"sam.smith@example.com","name":"Sam Smith"},"reply_to":{"email
        ":"sam.smith@example.com","name":"Sam Smith"}}'
*/
    if(isset($_POST['submit'])){
        $name=$_POST['name'];
        $adress=$_POST['adres'];
        $email=$_POST['email'];
        $pasword=$_POST['password'];
        $itemsbought="<script>document.getElementById('myField').value </script>";

        $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    
        $headers='from: ' . $mail . '\r\n';

        if(empty($formErrors)){
            mail('asilseeds@yahoo.com', 'contact form', $itemsbought, $headers);
        }
        else echo 'didnt work';
    }// api=AIzaSyAs35nDJb3VHBpP5kbJlj9gd3CWW_RVrT8
?>
