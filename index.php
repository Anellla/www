<?php
header('Content-Type: text/html; charset=utf-8');
require_once('conf.php');
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale = 1.0"/>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="tablestyle.css">
    <script src="jquery.js"></script>
    <script src="mapscript.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDV7rL1rzcKwMcwg3BGGZWzAUgxJ8JtPdE&callback=initMap"
            async defer></script>
    <title>Map</title>
</head>
<body onload="init()" onload="initMap()"   onkeydown="moveKey()">

<?php require 'fifteen.html';?>

<div id="namemap" style="display: none"> <h3><strong>Мапа магазину</strong></h3></div>
<div id="map" style="display: none"></div>


<div id="autorisationBlock">
    <form method="post">
        <div id="result" style="color:red"></div>
        <input type="text" name="login" placeholder="login" id="login"/>
        <input type="password" name="password" placeholder="password" id="password"/>
        <hr>
        <input type="button" name="button" value="Send" onclick="showmap()"/>

    </form>
</div>

</body>
</html>