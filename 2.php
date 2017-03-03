<?php
$user = $_POST['login'];
$password = $_POST['password'];
header('Content-Type: application/json; charset=utf-8');
$isValidUser = $user=='Lena' && $password=="1";
echo $isValidUser? '{"error":null}': '{"error":"Incorrect user or password"}'; 
?>