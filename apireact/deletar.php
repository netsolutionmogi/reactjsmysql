<?php
error_reporting(E_ALL & ~ E_NOTICE);

date_default_timezone_set('America/Sao_Paulo');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header('Content-type: text/html; charset=utf-8',TRUE);
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    include_once('conexao.php');

    $id = trim($_GET["id"]);
		     	
	$sql = "delete FROM clientes where id= '$id' ";
	$resultados = mysqli_query($conexao,$sql);
			 
			 //echo $sql;
			
			 if($resultado){
				echo json_encode(["successo"=>1]);
				}else{
					echo json_encode(["successo"=>0,"msg"=>"Erro!"]);
				} 
				
				echo  json_encode($resultado);
