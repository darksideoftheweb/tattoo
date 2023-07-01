<?php
if(isset($_POST['submit'])) {
    $to = "ilovepoker07@gmail.com"; // email получателя
    $subject = "Новое сообщение с сайта"; // тема письма

    // данные с формы
    $name = $_POST['name'];
    $second__name = $_POST['second__name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // заголовки письма
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-type: text/html\r\n";

    // тело письма
    $body = "<p>Им`я: " . $name . "</p>";
    $body = "<p>По Батькові: " . $second__name . "</p>";
    $body = "<p>Мобільний: " . $phone . "</p>";
    $body .= "<p>Email: " . $email . "</p>";
    $body .= "<p>Повідомлення: " . $message . "</p>";

    // отправка письма
    if(mail($to, $subject, $body, $headers)) {
        echo "Ваше сообщение отправлено";
    } else {
        echo "Ошибка отправки сообщения";
    }
}
?>
