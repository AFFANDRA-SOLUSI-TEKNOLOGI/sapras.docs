#!/usr/bin/env php
<?php

if (count($argv) == 1) {
  throw new InvalidArgumentException('Missing tables');
}

$tables = array_slice($argv, 1);

$db = new PDO('mysql:dbname=sarpras;host=127.0.0.1;charset=utf8mb4', 'root', '');

foreach ($tables as $table) {
  $query = $db->query("SELECT tipes.name, tipes.code, tipes.jenis_name, jenis.code AS jenis_code FROM tipes INNER JOIN jenis ON tipes.jenis_name = jenis.name; ");
  echo "# $table\n";
  echo "| **Nama** | **Kode** | **Nama/Kode Jenis** |\n";
  echo "| --- | --- | --- |\n";
  while (($row = $query->fetch(PDO::FETCH_NUM))) {
    list($name, $code, $parent_name, $parent_code) = $row;

    $capitalized = ucwords($name);
    $capitalizedP = ucwords($parent_name);
    echo "| $capitalized | `$code` | `$capitalizedP/$parent_code` |\n";
  }
  echo "\n\n";
}