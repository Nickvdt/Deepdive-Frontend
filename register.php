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
                <a class="header__a" href=""><img class="header__img" src="img/logo.webp" alt="Logo van doesburg coaching" href=""></a>
            </figure>
        </nav>
    </header>
    <main class="form__main">
        <form class="form__login" name="f1" action="controllers/createuser.php" method="POST">
            <h2 class="form__login--h2">Aanmelden</h2>
            <div class="form__login--div">
                <label for="username">Gebruikersnaam</label>
                <input class="input__veld" type="text" id="user" name="user" required>
            </div>
            <div class="form__login--div">
                <label for="password">Wachtwoord</label>
                <input class="input__veld" type="password" id="pass" name="pass" required>
            </div>
            <div class="form__login--div">
                <label for="password">Herhaal wachtwoord</label>
                <input class="input__veld" type="password" id="pass" name="pass2" required>
            </div>
            <div class="form__login--div">
                <input class="form__login--submit"type="submit" id="btn" value="Aanmelden">
            </div>
            <section class="form__login--section">
                <p class="form__login--p">al een account? klik <a href="./login.php">hier</a></p>
            </section>
            <p1 class=""><?php if(isset($_GET['error'])){ echo $_GET['error'];}?></p1>
        </form>
    </main>
</body>
</html>

