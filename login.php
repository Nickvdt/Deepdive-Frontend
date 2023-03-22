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
<section class="">

<div id="frm" class="form">
    <h1 class="">Login :</h1>
    <form name="f1" action="controllers/authentication.php" method="POST">
        <p>
            <br>
            <label class=""> Username: </label>
            <br>
            <input class="" type="text" id="user" name="user" />
        </p>
        <p>
            <br>
            <label class=""> Password: </label>
            <br>
            <input class="" type="password" id="pass" name="pass" />
        </p>
        <p class="">
            <br>
            <br>
            <input class="" type="submit" id="btn" value="Login" />
        </p>
    </form>
    <br>
    <p1 class=""><?php if(isset($_GET['error'])){ echo $_GET['error'];}?></p1>
</div>

</section>
</body>
</html>