<?php
if (isset($_POST['email'])) {
    $to = "hello@brandux.agency";
    $from = "hello@brandux.agency";
    $subject = "Новая заявка с сайта ". $_SERVER['HTTP_REFERER'];
    $message = "Email: " . $_POST['email'];

    if (isset($_POST['firstname']) && !empty($_POST['firstname'])) {
        $message .= "\nИмя: " . $_POST['firstname'];
    }
    if (isset($_POST['phone']) && !empty($_POST['phone'])) {
        $message .= "\nТелефон: " . $_POST['phone'];
    }
    if (isset($_POST['message']) && !empty($_POST['message'])) {
        $message .= "\nКомметарий: " . $_POST['message'];
    }

    $boundary = md5(date('r', time()));
    $filesize = '';
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"
 
--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit
 
$message";
    if(is_uploaded_file($_FILES['file']['tmp_name'])) {
        $attachment = chunk_split(base64_encode(file_get_contents($_FILES['file']['tmp_name'])));
        $filename = $_FILES['file']['name'];
        $filetype = $_FILES['file']['type'];
        $filesize = $_FILES['file']['size'];
        $message.="
 
--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"
 
$attachment";
    }
    $message.="
--$boundary--";

    if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
        mail($to, $subject, $message, $headers);
        return true;
    } else {
        return false;
    }
}
?>