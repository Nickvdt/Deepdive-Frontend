<?php

include('var_dump.php');
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    die();
}
$username = $_SESSION['username'];

?>
<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js" defer></script>
    <title>Doesburg Coaching</title>
</head>


<body>
    <header class="header">
        <nav class="header__nav">
            <figure class="header__figure">
                <a class="header__a" href=""><img class="header__img" src="img/logo.webp"
                        alt="Logo van doesburg coaching" href=""></a>
            </figure>
        </nav>
    </header>
    <ul class="cards">
        <li class="card card__first">
            <a href="dashboard.php" class="card__first--a">
                <figure>
                    <img class="img__card" src="img/lock.webp" alt="Afbeelding van een uitloggen icoon">
                </figure>
                <span>Dashboard</span>
            </a>
        </li>

        <li class="card card__second">
            <a href="results/vragenlijstResult.php" class="card__second--a">
                <figure>
                    <img class="img__card" src="img/writing_hand.webp" alt="Afbeelding van een checklist icoon">
                </figure>
                <span>Vragenlijst resultaten</span>
            </a>
        </li>
    </ul>
</body>

</html>