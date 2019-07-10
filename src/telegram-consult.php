<?php

include ('variable-consult.php');

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
