<?php

include('../var_dump.php');
include('../controllers/resultcontroller.php');
include('../controllers/functions.php');


$username = $_SESSION['username'];
$list = $_GET['list'];
$userid = GetUserIDByUsername($username, $mysqli);
$results = GetListAnswersByID($list, $mysqli);

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
        
        for(var k in json['vragenlijst']) {
            console.log(json['vragenlijst'][k]['question'])
            document.getElementById(`js__question${String(k)}`).innerText = json['vragenlijst'][k]['question']
        }
});
    </script>
</head>


<body>
<p id="js__question0">Vraag: 1".</p>
<p><?php echo $results['one']?></p>

<p id="js__question1">Vraag: 2".</p>
<p><?php echo $results['two']?></p>

<p id="js__question2">Vraag: 3".</p>
<p><?php echo $results['three']?></p>

<p id="js__question3">Vraag: 4".</p>
<p><?php echo $results['four']?></p>

<p id="js__question4">Vraag: 5".</p>
<p><?php echo $results['five']?></p>

<p id="js__question5">Vraag: 6".</p>
<p><?php echo $results['six']?></p>

<p id="js__question6">Vraag: 7".</p>
<p><?php echo $results['seven']?></p>

<p id="js__question7">Vraag: 8".</p>
<p><?php echo $results['eight']?></p>

<p id="js__question8">Vraag: 9".</p>
<p><?php echo $results['nine']?></p>

<p id="js__question9">Vraag: 10".</p>
<p><?php echo $results['ten']?></p>

<p id="js__question10">Vraag: 11".</p>
<p><?php echo $results['eleven']?></p>

<p id="js__question11">Vraag: 12".</p>
<p><?php echo $results['twelve']?></p>

<p id="js__question12">Vraag: 13".</p>
<p><?php echo $results['thirteen']?></p>

<p id="js__question13">Vraag: 14".</p>
<p><?php echo $results['fourteen']?></p>

<p id="js__question14">Vraag: 15".</p>
<p><?php echo $results['fifteen']?></p>

<p id="js__question15">Vraag: 16".</p>
<p><?php echo $results['sixteen']?></p>

<p id="js__question16">Vraag: 17".</p>
<p><?php echo $results['seventeen']?></p>

<p id="js__question17">Vraag: 18".</p>
<p><?php echo $results['eighteen']?></p>

<p id="js__question18">Vraag: 19".</p>
<p><?php echo $results['nineteen']?></p>

<p id="js__question19">Vraag: 20".</p>
<p><?php echo $results['twenty']?></p>

<p id="js__question20">Vraag: 21".</p>
<p><?php echo $results['twenty_one']?></p>

<p id="js__question21">Vraag: 22".</p>
<p><?php echo $results['twenty_two']?></p>

<p id="js__question22">Vraag: 23".</p>
<p><?php echo $results['twenty_three']?></p>

<p id="js__question23">Vraag: 24".</p>
<p><?php echo $results['twenty_four']?></p>

<p id="js__question24">Vraag: 25".</p>
<p><?php echo $results['twenty_five']?></p>

<p id="js__question25">Vraag: 26".</p>
<p><?php echo $results['twenty_six']?></p>

<p id="js__question26">Vraag: 27".</p>
<p><?php echo $results['twenty_seven']?></p>

<p id="js__question27">Vraag: 28".</p>
<p><?php echo $results['twenty_eight']?></p>

<p id="js__question28">Vraag: 29".</p>
<p><?php echo $results['twenty_nine']?></p>

<p id="js__question29">Vraag: 30".</p>
<p><?php echo $results['thirty']?></p>

<p id="js__question30">Vraag: 31".</p>
<p><?php echo $results['thirty_one']?></p>

<p id="js__question31">Vraag: 32".</p>
<p><?php echo $results['thirty_two']?></p>

<p id="js__question32">Vraag: 33".</p>
<p><?php echo $results['thirty_three']?></p>

<p id="js__question33">Vraag: 34".</p>
<p><?php echo $results['thirty_four']?></p>

<p id="js__question34">Vraag: 35".</p>
<p><?php echo $results['thirty_five']?></p>

<p id="js__question35">Vraag: 36".</p>
<p><?php echo $results['thirty_six']?></p>

<p id="js__question36">Vraag: 37".</p>
<p><?php echo $results['thirty_seven']?></p>

<p id="js__question37">Vraag: 38".</p>
<p><?php echo $results['thirty_eight']?></p>

<p id="js__question38">Vraag: 39".</p>
<p><?php echo $results['thirty_nine']?></p>

<p id="js__question39">Vraag: 40".</p>
<p><?php echo $results['forty']?></p>
</body>

</html>