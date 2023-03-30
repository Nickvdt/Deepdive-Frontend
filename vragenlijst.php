
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js" defer></script>
    <title>Vragenlijst</title>
</head>
<body>
  
    <header class="header">
        <nav class="header__nav">
            <figure class="header__figure">
                <a class="header__a" href=""><img class="header__img" src="img/logo.png" alt="Logo van doesburg coaching" href=""></a>
            </figure>
        </nav>
    </header>
    <section class="vragenlijst">
        <h1 id="js--vraag" class="vragenlijst__h1">Vraag: 1. Ik droom ervan zo goed te zijn in wat ik doe dat er voortdurend om mijn deskundige advies wordt gevraagd?</h1>
        <section class="vragenlijst__labels">
            <p class="vragenlijst__label"> 1</p>
            <p class="vragenlijst__label"> 2</p>
            <p class="vragenlijst__label"> 3</p>
            <p class="vragenlijst__label"> 4</p>
            <p class="vragenlijst__label"> 5</p>
            <p class="vragenlijst__label"> 6</p>
        </section>
        <section class="vragenlijst__slider">
          
            <input onChange=UpdateData() id="js--updatedata" type="range" min="1" max="6" step="1" value="2">
        </section>
        <section class="vragenlijst__tabel vragenlijst__tabel--desktop">
          <table>
            <thead>
              <tr>
                <th>Nooit op mijn van toepassing</th>
                <th>Is zo nu en dan op mijn van toepassing</th>
                <th>Is vaak op mij van toepassing</th>
                <th>Is altijd op mij van toepassing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2/3</td>
                <td>4/5</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section class="vragenlijst__tabel vragenlijst__tabel--responsive">
          <table>
            <tbody>
              <tr>
                <td >Nooit op mijn van toepassing</td>
                <td >1</td>
              </tr>
              <tr>
                <td >Is zo nu en dan op mijn van toepassing</td>
                <td >2/3</td>
              </tr>
              <tr>
                <td >Is vaak op mij van toepassing</td>
                <td >4/5</td>
              </tr>
              <tr>
                <td >Is altijd op mij van toepassing</td>
                <td >6</td>
              </tr>
            </tbody>
          </table>
          </section>     
          <section id="js--nextbuttons" class="vragenlijst__buttons">
            <button id="js--previousbutton" class="vragenlijst__button--previous">< Vorige</button>
            <button id="js--nextbutton" class="vragenlijst__button--next">Volgende ></button>
          </section>
    </section>
</body>

<script>
  function UpdateData(){
    localStorage.setItem(parseInt(localStorage.getItem("currentquestion")), document.getElementById('js--updatedata').value)
  }
  </script>
</html>