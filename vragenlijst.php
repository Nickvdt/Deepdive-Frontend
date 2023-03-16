<?php
include("functions.php");

if(isset($_GET['question'])){
  $current = $_GET['question'];
}
else
{
  $current = 1;
}
$question = GetDataByCurrentQuestion($current)['question'];

$amountofquestion = GetAmountOfQuestions();
?>
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
    <?php

  ?>
    <section class="vragenlijst">
        <h1 class="vragenlijst__h1"><?php echo $question?></h1>
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

        <section class="vragenlijst__tabel">
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
          <section class="vragenlijst__buttons">
            <?php
            if($current > 1){
            ?>
            <a href="vragenlijst.php?question=<?php echo $current - 1?>" class="vragenlijst__button--previous">< Vorige</a>
            <?php
            }
            ?>
            <?php
            if($amountofquestion != $current){
            ?>
            <a href="vragenlijst.php?question=<?php echo $current + 1?>" class="vragenlijst__button--next">Volgende ></a>
            <?php
            }
            ?>
          </section>
    </section>
</body>

<script>
  if(localStorage.getItem(<?php echo $current?>) == null){
    localStorage.setItem(<?php echo $current?>, 1)
  }
  document.getElementById("js--updatedata").value = localStorage.getItem(<?php echo $current?>);
  function GetSetData(){
    console.log(localStorage.getItem(<?php echo $current?>))
    return localStorage.getItem(<?php echo $current?>)
  }
  function UpdateData(){
    localStorage.setItem(<?php echo $current?>, document.getElementById('js--updatedata').value)
  }
  </script>
</html>