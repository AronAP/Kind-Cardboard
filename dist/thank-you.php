<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">

  <title>Спасибо!</title>

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

  <!-- Custom styles for this template -->
  <link rel="stylesheet" href="css/roboto.min.css">
  <link rel="stylesheet" href="css/thank-you.min.css">

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143071497-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-143071497-1');
  </script>

</head>

<body>

  <div class="thank-you">

    <header class="header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-3 col-md-3 col-lg-4">
            <div class="header-logo"></div>
            <!-- /.header-logo -->
          </div>
          <!-- /.col-4 -->
          <div class="col-9 col-md-9 col-lg-8">
            <div class="header-phone">
              <div class="header-phone_numbers">
                <div class="header-phone_number">
                  8 (347) 271-54-28
                </div>
                <!-- /.header-phone_number -->
                <div class="header-phone_number">
                  8 (937) 363-30-00
                </div>
                <!-- /.header-phone_number -->
              </div>
              <!-- /.header-phone_numbers -->
              <a href="index.html" class="header-phone_button button">
                <img src="img/logout.svg" alt="">
                <span class="hidden-mobile">Вернуться на сайт</span>
              </a>
            </div>
            <!-- /.header-phone -->
          </div>
          <!-- /.col-8 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </header>
    <!-- /.header -->

    <div class="letter">
      <?php
      $morning = "Доброе утро!";
      $day = "Добрый день!";
      $evening = "Добрый вечер!";
      $night = "Доброй ночи!";
      $worktime = "Мы перезвоним в течении 5-ти минут!";
      $notworktime = "Наш офис откроется в 10 утра <br> и менеджер сразу вас наберет!";

      $time = date("H");

      if($time >= 4) {$welcome = $morning;}
      if($time >= 10) {$welcome = $day;}
      if($time >= 19) {$welcome = $evening;}
      if($time >= 23 or $time < 04) {$welcome = $night;}

      if($time >= 10) {$callback = $worktime;}
      if($time >= 19 or $time < 10) {$callback = $notworktime;}
      ?>

      <?php echo $welcome; ?>
      <br>Ваша заявка принята.<br>

      <?php echo $callback; ?>
      <br>Спасибо!
    </div>

    <footer class="footer">
      <div class="footer-info">
        <div class="footer-info_text">
          &copy; <a href="index.html">www.kind-cardboard.ru</a> 2018, не являеться коммерческим образцом
        </div>
        <!-- /.footer-info_text -->
        <div class="footer-info_dev">
          Made by
          <div class="dev">
            <a href="https://github.com/AronAP" target="_blank"> AronAP</a>
          </div>
        </div>
        <!-- /.footer-info_dev -->
      </div>
      <!-- /.footer-info -->
    </footer>
    <!-- /.footer -->

  </div>

</body>

</html>
