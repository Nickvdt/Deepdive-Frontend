<?php

include('../var_dump.php');
include('../controllers/resultcontroller.php');
include('../controllers/functions.php');


$username = $_SESSION['username'];

$userid = GetUserIDByUsername($username, $mysqli);
$results = GetQuestionListResultsByUserID($userid, $mysqli);

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
    <script defer>

fetch("http://localhost/Deepdive-Frontend/vragen.json")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
});
    </script>
</head>


<body>
<p>Vraag: 1. Ik droom ervan zo goed te zijn in wat ik doe dat er voortdurend om mijn deskundige advies wordt gevraagd?:</p>
<p>Antwoord hier</p>
    
</body>

</html>