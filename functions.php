<?php

function GetAmountOfQuestions(){
    $path = 'vragen.json';
    $jsonString = file_get_contents($path);
    $jsonData = json_decode($jsonString, true);
    return count($jsonData['vragenlijst']);
}
function GetDataByCurrentQuestion($current){
    $path = 'vragen.json';
    $jsonString = file_get_contents($path);
    $jsonData = json_decode($jsonString, true);
    return $jsonData['vragenlijst'][$current - 1];
}