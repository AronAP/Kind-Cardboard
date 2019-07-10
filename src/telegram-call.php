<?php

include ('variable-call.php.php');

if($name == "") {
	$name = "НЕИЗВЕСТНО";
};

if($phone == "") {
	$phone = "НЕИЗВЕСТЕН";
} else {
	$phone = urlencode("+").$phone;
}

$arr = array(
  "Имя: " => $name,
  "Телефон: " => $phone
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
