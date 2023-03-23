

<?php
include('../var_dump.php');
include('functions.php');

$one = $_GET['one'];
$two = $_GET['two'];
$three = $_GET['three'];
$four = $_GET['four'];
$five = $_GET['five'];
$six = $_GET['six'];
$seven = $_GET['seven'];
$eight = $_GET['eight'];
$nine = $_GET['nine'];
$ten = $_GET['ten'];
$eleven = $_GET['eleven'];
$twelve = $_GET['twelve'];
$thirteen = $_GET['thirteen'];
$fourteen = $_GET['fourteen'];
$fifteen = $_GET['fifteen'];
$sixteen = $_GET['sixteen'];
$seventeen = $_GET['seventeen'];
$eighteen = $_GET['eighteen'];
$nineteen = $_GET['nineteen'];
$twenty = $_GET['twenty'];
$twenty_one = $_GET['twentyone'];
$twenty_two = $_GET['twentytwo'];
$twenty_three = $_GET['twentythree'];
$twenty_four = $_GET['twentyfour'];
$twenty_five = $_GET['twentyfive'];
$twenty_six = $_GET['twentysix'];
$twenty_seven = $_GET['twentyseven'];
$twenty_eight = $_GET['twentyeight'];
$twenty_nine = $_GET['twentynine'];
$thirty = $_GET['thirty'];
$thirty_one = $_GET['thirtyone'];
$thirty_two = $_GET['thirtytwo'];
$thirty_three = $_GET['thirtythree'];
$thirty_four = $_GET['thirtyfour'];
$thirty_five = $_GET['thirtyfive'];
$thirty_six = $_GET['thirtysix'];
$thirty_seven = $_GET['thirtyseven'];
$thirty_eight = $_GET['thirtyeight'];
$thirty_nine = $_GET['thirtynine'];
$forty = $_GET['forty'];

session_start();
if (!isset($_SESSION['username'])) {
    header("Location: ../login.php");
    die();
}
$username = $_SESSION['username'];

$userid = GetUserIDByUsername($username, $mysqli);
$date = date("Y-m-d H:i:s");
$approved = 1;

$sql = "INSERT INTO `listanswers` (userid, approved, date, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twenty_one, twenty_two, twenty_three, twenty_four, twenty_five, twenty_six, twenty_seven, twenty_eight, twenty_nine, thirty, thirty_one, thirty_two, thirty_three, thirty_four, thirty_five, thirty_six, thirty_seven, thirty_eight, thirty_nine, forty) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("iisiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", $userid, $approved, $date, $one, $two, $three, $four, $five, $six, $seven, $eight, $nine, $ten, $eleven, $twelve, $thirteen, $fourteen, $fifteen, $sixteen, $seventeen, $eighteen, $nineteen, $twenty, $twenty_one, $twenty_two, $twenty_three, $twenty_four, $twenty_five, $twenty_six, $twenty_seven, $twenty_eight, $twenty_nine, $thirty, $thirty_one, $thirty_two, $thirty_three, $thirty_four, $thirty_five, $thirty_six, $thirty_seven, $thirty_eight, $thirty_nine, $forty);
$stmt->execute();

echo "<script defer>localStorage.clear(); window.location='http://localhost/Deepdive-Frontend/results.php';</script>";
die();
?>