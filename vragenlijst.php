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
        <a class="header__a" href=""><img class="header__img" src="img/logo.webp" alt="Logo van doesburg coaching"
            href=""></a>
      </figure>
    </nav>
  </header>
  <article class="vragenlijst__popup" id="js--popup">
    <h2>Vragenlijst informatie</h2>
    <br>
    <p>
      IC4 Vragenlijst Loopbaanankers (Schein)
      De meeste mensen volgen een opleiding, vinden een baan, doen allerlei cursussen en
      veranderen van baan zonder dat ze systematisch kijken naar hun drijfveren. Hierdoor komt
      het regelmatig voor dat mensen, ondanks hun opleiding en ervaring, toch niet gelukkig zijn
      in hun werk.
    </p>
    <br>
    <p>
      Schein noemt deze drijfveren carrièreankers. Carrièreankers zeggen iets over je motivatie,
      houding, voorkeur en waarden. Ben je bijvoorbeeld meer geïnteresseerd in individuele
      vrijheid of ga je meer voor macht en status?
    </p>
    <br>
    <p>
      Je loopbaananker is een combinatie van waargenomen competentieterreinen, drijfveren en
      waarden die je niet wilt opgeven; het staat voor je werkelijke zelf. Zonder kennis van deze
      ankers, zouden externe prikkels je kunnen brengen in situaties of banen die uiteindelijk niet
      bevredigend zijn, omdat je voelt dat je "dit niet werkelijk bent"
    </p>
    <br>
    <p> Schein onderscheidt acht carrièreankers; technisch/functioneel (TF), algemeen management
      (AM), autonomie/onafhankelijkheid (AU), zekerheid en stabiliteit (ZE),
      ondernemingsgerichte creativiteit (OC), dienstverlening/toewijding aan de zaak (DV), zuivere
      uitdaging (UI) en levensstijl (LS).
    </p>
    <br>
    <p>Om erachter te komen welke loopbaanankers voor jou leidend zijn, kun je de test op de
      volgende pagina doen. Aldaar zie je een aantal beweringen (1 tot 40).
      De beweringen beschrijven een activiteit, waarde of een eigenschap.
      Geef per keer aan in hoeverre deze bewering op jou van toepassing is. Ook als deze minder
      of niet op je van toepassing is. Maak dus altijd een keuze.
    </p>
    <button class="vragenlijst__button--popup" id="js--closeButton">Sluiten</button>
  </article>


  <section class="vragenlijst">
    <div class="vragenlijst__buttons">
      <button class="vragenlijst__button--info" id="js--infoButton">Informatie</button>
      <button class="vragenlijst__button--bonus">Geef extra punten</button>
    </div>

    <h1 id="js--vraag" class="vragenlijst__h1">Vraag: 1. Ik droom ervan zo goed te zijn in wat ik doe dat er voortdurend
      om mijn deskundige advies wordt gevraagd?</h1>
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
            <td>Nooit op mijn van toepassing</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Is zo nu en dan op mijn van toepassing</td>
            <td>2/3</td>
          </tr>
          <tr>
            <td>Is vaak op mij van toepassing</td>
            <td>4/5</td>
          </tr>
          <tr>
            <td>Is altijd op mij van toepassing</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section id="js--nextbuttons" class="vragenlijst__buttons">
      <button id="js--previousbutton" class="vragenlijst__button--previous">
        < Vorige</button>
          <button id="js--nextbutton" class="vragenlijst__button--next">Volgende ></button>
    </section>
  </section>
</body>

<script>
  function UpdateData() {
    localStorage.setItem(parseInt(localStorage.getItem("currentquestion")), document.getElementById('js--updatedata').value)
  }
</script>

</html>