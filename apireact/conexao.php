<?php

error_reporting(E_ALL & ~ E_NOTICE);

date_default_timezone_set('America/Sao_Paulo');

header("access-control-allow-origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
header('content-type: application/json; charset=utf-8');


$localhost="localhost";
$root="root";
$senha="123456";
$database="react";


$conexao = mysqli_connect($localhost,$root,$senha);
if($conexao){
mysqli_select_db($conexao,$database);
}else{
echo 'Não foi possivel conectar: ' ;
}


?>
