<?php
require_once('conf.php');
$user = $_POST['login'];
$password = $_POST['password'];
$zapyt = "select username ,password1 FROM proba WHERE username  = '".$user."' and password1 = '".$password."' "
$result = mysqli_query($con, $zapyt );
if ($result) {
   $row = mysqli_fetch_row($result);
    $nam = $row[0];
    //echo $row[0];
    $passw = $row[1];
header('Content-Type: application/json; charset=utf-8');

$isValidUser = $user == $nam && $password == $passw;
echo $isValidUser? '{"error":null}': '{"error":"Incorrect user or password"}'; 
   mysqli_free_result($result);
} else {
   echo 'Bad zapyt'.$zapyt.mysqli_error($con);
}
mysqli_close($con);
?>