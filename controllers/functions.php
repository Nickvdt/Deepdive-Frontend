<?php
function GetUserIDByUsername($username, $mysqli){
    $sql = "SELECT * FROM `users` WHERE `username` = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $endresult = $result->fetch_assoc();
    return $endresult['id'];

};

?>