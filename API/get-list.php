<?php

$data = file_get_contents(__DIR__ . "/../data/disks.json");

header('Content-Type: application/json; charset=utf-8');
$data_decoded = json_decode($data);
//var_dump($data_decoded);

echo json_encode($data_decoded);