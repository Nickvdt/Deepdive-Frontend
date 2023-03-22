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
</head>


<body>
    <?php
    while ($row = $results->fetch_assoc()) {
        ?>
<a href="listResult.php?list=<?php echo $row['id']?>"><?php echo $row['date']?></a> <br>
    <?php

    }
        ?>
    
</body>

</html>