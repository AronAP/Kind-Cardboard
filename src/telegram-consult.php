<?php

/* https://api.telegram.org/bot881409762:AAFi4yWk4qvT1CDo1tJOA7XwlZ6igAEH6VY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$length = $_POST['product_length'];
$width = $_POST['product_width'];
$height = $_POST['product_height'];
$number = $_POST['product_number'];
$token = "881409762:AAFi4yWk4qvT1CDo1tJOA7XwlZ6igAEH6VY";
$chat_id = "-1001187871232";
$separator = "";

if($phone == "") {
	$phone = "НЕИЗВЕСТЕН";
} else {
	$phone = urlencode("+").$phone;
}

$arr = array(
  "Имя: " => $name,
	"Телефон: " => $phone,
	"_____________" => $separator,
	"Длина изделия (м): " => $length . "м",
	"Ширина изделия (м): " => $width . "м",
	"Высота изделия (м): " => $height . "м",
	"Количество изделий (штук): " => $number . " штук"
);

foreach($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
	header('Location: thank-you.php');
} else {
	header('Location: error.html');
}

?>
