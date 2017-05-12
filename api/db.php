<?php
$mysqli = new mysqli('localhost', 'root', 'root', 'tp');

if($mysqli->connect_errno) {
	echo "connection failed";
	die;
}

// echo "<pre>";
// var_dump($mysqli);