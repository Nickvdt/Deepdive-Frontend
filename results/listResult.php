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
    <link rel="stylesheet" href="../css/style.css">
    <title>Doesburg Coaching</title>
    <script src="js/main.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
    <script>
        fetch("../vragen.json")
            .then((response) => response.json())
            .then((json) => {

                for (var k in json['vragenlijst']) {
                    console.log(json['vragenlijst'][k]['question'])
                    document.getElementById(`js__question${String(k)}`).innerText = json['vragenlijst'][k]['question']
                }
            });
    </script>

<body>
    <header class="header">
        <nav class="header__nav">
            <figure class="header__figure">
                <a class="header__a" href=""><img class="header__img" src="../img/logo.webp" alt="Logo van doesburg coaching" href=""></a>
            </figure>
            <ul class="header__ul">
                <li class="header__ul--li">
                    <a class="header__ul--a" href="./vragenlijstResult.php">Resultaten</a>
                </li>
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
                    <th>Vraag</th>
                    <th>Antwoord</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id="js__question0">Vraag 1</td>
                    <td><?php echo $results['one'] ?></td>
                </tr>
                <tr>
                    <td id="js__question1">Vraag 2</td>
                    <td><?php echo $results['two'] ?></td>
                </tr>
                <tr>
                    <td id="js__question2">Vraag 3</td>
                    <td><?php echo $results['three'] ?></td>
                </tr>
                <tr>
                    <td id="js__question3">Vraag 4</td>
                    <td><?php echo $results['four'] ?></td>
                </tr>
                <tr>
                    <td id="js__question4">Vraag 5</td>
                    <td><?php echo $results['five'] ?></td>
                </tr>
                <tr>
                    <td id="js__question5">Vraag 6</td>
                    <td><?php echo $results['six'] ?></td>
                </tr>
                <tr>
                    <td id="js__question6">Vraag 7</td>
                    <td><?php echo $results['seven'] ?></td>
                </tr>
                <tr>
                    <td id="js__question7">Vraag 8</td>
                    <td><?php echo $results['eight'] ?></td>
                </tr>
                <tr>
                    <td id="js__question8">Vraag 9</td>
                    <td><?php echo $results['nine'] ?></td>
                </tr>
                <tr>
                    <td id="js__question9">Vraag 10</td>
                    <td><?php echo $results['ten'] ?></td>
                </tr>
                <tr>
                    <td id="js__question10">Vraag 11</td>
                    <td><?php echo $results['eleven'] ?></td>
                </tr>
                <tr>
                    <td id="js__question11">Vraag 12</td>
                    <td><?php echo $results['twelve'] ?></td>
                </tr>
                <tr>
                    <td id="js__question12">Vraag 13</td>
                    <td><?php echo $results['thirteen'] ?></td>
                </tr>
                <tr>
                    <td id="js__question13">Vraag 14</td>
                    <td><?php echo $results['fourteen'] ?></td>
                </tr>
                <tr>
                    <td id="js__question14">Vraag 15</td>
                    <td><?php echo $results['fifteen'] ?></td>
                </tr>
                <tr>
                    <td id="js__question15">Vraag 16</td>
                    <td><?php echo $results['sixteen'] ?></td>
                </tr>
                <tr>
                    <td id="js__question16">Vraag 17</td>
                    <td><?php echo $results['seventeen'] ?></td>
                </tr>
                <tr>
                    <td id="js__question17">Vraag 18</td>
                    <td><?php echo $results['eighteen'] ?></td>
                </tr>
                <tr>
                    <td id="js__question18">Vraag 19</td>
                    <td><?php echo $results['nineteen'] ?></td>
                </tr>
                <tr>
                    <td id="js__question19">Vraag 20</td>
                    <td><?php echo $results['twenty'] ?></td>
                </tr>
                <tr>
                    <td id="js__question20">Vraag 21</td>
                    <td><?php echo $results['twenty_one'] ?></td>
                </tr>
                <tr>
                    <td id="js__question21">Vraag 22</td>
                    <td><?php echo $results['twenty_two'] ?></td>
                </tr>
                <tr>
                    <td id="js__question22">Vraag 23</td>
                    <td><?php echo $results['twenty_three'] ?></td>
                </tr>
                <tr>
                    <td id="js__question23">Vraag 24</td>
                    <td><?php echo $results['twenty_four'] ?></td>
                </tr>
                <tr>
                    <td id="js__question24">Vraag 25</td>
                    <td><?php echo $results['twenty_five'] ?></td>
                </tr>
                <tr>
                    <td id="js__question25">Vraag 26</td>
                    <td><?php echo $results['twenty_six'] ?></td>
                </tr>
                <tr>
                    <td id="js__question26">Vraag 27</td>
                    <td><?php echo $results['twenty_seven'] ?></td>
                </tr>
                <tr>
                    <td id="js__question27">Vraag 28</td>
                    <td><?php echo $results['twenty_eight'] ?></td>
                </tr>
                <tr>
                    <td id="js__question28">Vraag 29</td>
                    <td><?php echo $results['twenty_nine'] ?></td>
                </tr>
                <tr>
                    <td id="js__question29">Vraag 30</td>
                    <td><?php echo $results['thirty'] ?></td>
                </tr>
                <tr>
                    <td id="js__question30">Vraag 31</td>
                    <td><?php echo $results['thirty_one'] ?></td>
                </tr>
                <tr>
                    <td id="js__question31">Vraag 32</td>
                    <td><?php echo $results['thirty_two'] ?></td>
                </tr>
                <tr>
                    <td id="js__question32">Vraag 33</td>
                    <td><?php echo $results['thirty_three'] ?></td>
                </tr>
                <tr>
                    <td id="js__question33">Vraag 34</td>
                    <td><?php echo $results['thirty_four'] ?></td>
                </tr>
                <tr>
                    <td id="js__question34">Vraag 35</td>
                    <td><?php echo $results['thirty_five'] ?></td>
                </tr>
                <tr>
                    <td id="js__question35">Vraag 36</td>
                    <td><?php echo $results['thirty_six'] ?></td>
                </tr>
                <tr>
                    <td id="js__question36">Vraag 37</td>
                    <td><?php echo $results['thirty_seven'] ?></td>
                </tr>
                <tr>
                    <td id="js__question37">Vraag 38</td>
                    <td><?php echo $results['thirty_eight'] ?></td>
                </tr>
                <tr>
                    <td id="js__question38">Vraag 39</td>
                    <td><?php echo $results['thirty_nine'] ?></td>
                </tr>
                <tr>
                    <td id="js__question39">Vraag 40</td>

                    <td><?php echo $results['forty'] ?></td>
                </tr>
            </tbody>
        </table>
    </section>
    <section class="Grafiek">
        <canvas id="myChart"></canvas>
    </section>
    <script>
        const labels = ['Vraag 1', 'Vraag 2', 'Vraag 3', 'Vraag 4', 'Vraag 5', 'Vraag 6', 'Vraag 7', 'Vraag 8', 'Vraag 9', 'Vraag 10', 'Vraag 11', 'Vraag 12', 'Vraag 13', 'Vraag 14', 'Vraag 15', 'Vraag 16', 'Vraag 17', 'Vraag 18', 'Vraag 19', 'Vraag 20', 'Vraag 21', 'Vraag 22', 'Vraag 23', 'Vraag 24', 'Vraag 25', 'Vraag 26', 'Vraag 27', 'Vraag 28', 'Vraag 29', 'Vraag 30', 'Vraag 31', 'Vraag 32', 'Vraag 33', 'Vraag 34', 'Vraag 35', 'Vraag 36', 'Vraag 37', 'Vraag 38', 'Vraag 39', 'Vraag 40']
        const data = {
            labels: labels,
            datasets: [{
                label: 'Resultaten',
                backgroundColor: 'rgb(25,174,170)',
                borderColor: 'rgb(255, 99, 132)',
                data: [<?php echo $results['one'] ?>, <?php echo $results['two'] ?>, <?php echo $results['three'] ?>, <?php echo $results['four'] ?>, <?php echo $results['five'] ?>, <?php echo $results['six'] ?>, <?php echo $results['seven'] ?>, <?php echo $results['eight'] ?>, <?php echo $results['nine'] ?>, <?php echo $results['ten'] ?>, <?php echo $results['eleven'] ?>, <?php echo $results['twelve'] ?>, <?php echo $results['thirteen'] ?>, <?php echo $results['fourteen'] ?>, <?php echo $results['fifteen'] ?>, <?php echo $results['sixteen'] ?>, <?php echo $results['seventeen'] ?>, <?php echo $results['eighteen'] ?>, <?php echo $results['nineteen'] ?>, <?php echo $results['twenty'] ?>, <?php echo $results['twenty_one'] ?>, <?php echo $results['twenty_two'] ?>, <?php echo $results['twenty_three'] ?>, <?php echo $results['twenty_four'] ?>, <?php echo $results['twenty_five'] ?>, <?php echo $results['twenty_six'] ?>, <?php echo $results['twenty_seven'] ?>, <?php echo $results['twenty_eight'] ?>, <?php echo $results['twenty_nine'] ?>, <?php echo $results['thirty'] ?>, <?php echo $results['thirty_one'] ?>, <?php echo $results['thirty_two'] ?>, <?php echo $results['thirty_three'] ?>, <?php echo $results['thirty_four'] ?>, <?php echo $results['thirty_five'] ?>, <?php echo $results['thirty_six'] ?>, <?php echo $results['thirty_seven'] ?>, <?php echo $results['thirty_eight'] ?>, <?php echo $results['thirty_nine'] ?>, <?php echo $results['forty'] ?>]
            }]
        };

        const config = {
            type: 'bar',
            data,
            options: {}
        };

        var myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    </script>
</body>

</html>