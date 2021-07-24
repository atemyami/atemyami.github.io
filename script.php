<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Input sanitation omitted

    // Send the email
    mail("asilseeds@gmail.com", "Message from {$name} - {$email}", $message);
}
