<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$file = $_FILES['myfile'];
$number = $_POST['phone']

$title = "Новая заявка";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br>
<b>Телефон:</b> $number<br><br>
<b>Сообщение:</b><br>$text";

$mail = new PHPMailer\PHPMailer\PHPMailer(true);
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host       = 'smtp.gmail.com';
    $mail->Username   = 'sanekoir2015@gmail.com';
    $mail->Password   = 'vjjbyhpcwfgemhle';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('sanekoir2015@gmail.com');

    $mail->addAddress('vasyrin1312@gmail.com');   

if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }   
}

$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);