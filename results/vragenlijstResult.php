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
    <link rel="stylesheet" href="../css/style.css">
    <script src="js/main.js" defer></script>
    <title>Doesburg Coaching</title>
</head>


<body>
    <header class="header">
        <nav class="header__nav">
            <figure class="header__figure">
                <a class="header__a" href=""><img class="header__img" src="../img/logo.webp" alt="Logo van doesburg coaching" href=""></a>
            </figure>
            <ul class="header__ul">
                <li class="header__ul--li">
                    <a class="header__ul--a" href="../dashboard.php">Dashboard</a>
                </li>
            </ul>
        </nav>
    </header>
    <section class="resultaten__tabel">
        <table class="resultaten__tabel--table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Datum</th>
                </tr>
            </thead>
            <tbody>

                <?php while ($row = $results->fetch_assoc()) { ?>
                    <tr>

                        <td><?php echo $row['id']; ?></td>
                        <td><a href="listResult.php?list=<?php echo $row['id']; ?>"><?php echo $row['date']; ?></a></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </section>

</body>

</html>