<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/js/slick/slick.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/js/slick/slick-theme.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/normalize.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url') ?>">
    <title>Piretta</title>
    <?php wp_head(); ?>
</head>
<body>

    <nav class="nav">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-2">
                    <div class="nav_logo">
                        <img src="img/pirreta-logo.png" alt="">
                    </div>

                </div>
                <div class="col-md-8">
                    <div class="nav_menu">
                       <ul>
                           <li class="decorate_link"><a href="#">Новости</a></li>
                           <li class="decorate_link"><a href="#">Услуги</a></li>
                           <li class="decorate_link"><a href="#">О компании</a></li>
                           <li class="decorate_link"><a href="#">Контакты</a></li>
                           <li class="decorate_link"><a href="#">Учебный центр</a></li>
                       </ul>
                    </div>

                </div>
                <div class="col-md-2">
                    <div class="nav_login">
                        <button class="button_red">Вход</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>