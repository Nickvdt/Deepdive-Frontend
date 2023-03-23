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
<a href="logout.php">uitloggen</a>
<br>
<a href="vragenlijst.php">vragenlijst</a>
<br>
<a href="results.php">resultaten</a>
</body>

</html>