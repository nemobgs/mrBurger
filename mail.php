<?php
$recepient = "#"; // Введите ПОЧТУ
$sitename = "MrBurger";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$street = trim($_POST["street"]);
$house = trim($_POST["house"]);
$korp = trim($_POST["korp"]);
$kvart = trim($_POST["kvart"]);
$etaz = trim($_POST["etaz"]);
$comment = trim($_POST["comment"]);
$cahs = trim($_POST["cahs"]);
$perezvon = trim($_POST["perezvon"]);

$message = "Имя: $name \nТелефон: $tel \nУлица: $street \nДом: $house \nКорпус: $korp \nКвартира: $kvart  \nЭтаж: $etaz \nКоментарии: $comment \nОплата: $cash \nПерезвон: $perezvon";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n Form: $recepient");
?>