<?php
include('../var_dump.php');

session_start();
if (!isset($_SESSION['username'])) {
    header("Location: ../login.php");
    die();
}

function GetQuestionListResultsByUserID($userid, $mysqli) {
    $sql = "SELECT * FROM `listanswers` WHERE `userid` = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s", $userid);
    $stmt->execute();
    $result = $stmt->get_result();
    return $result;

}

function GetListAnswersByID($id, $mysqli){
    $sql = "SELECT * FROM `listanswers` WHERE `id` = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $endresult = $result->fetch_assoc();
    return $endresult;

}