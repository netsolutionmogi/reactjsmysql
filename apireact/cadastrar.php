<?php

error_reporting(E_ALL & ~ E_NOTICE);

date_default_timezone_set('America/Sao_Paulo');


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-type: text/html; charset=utf-8',TRUE);

include("conexao.php");

//$data = json_decode(file_get_contents("php://input"));

    	$nome = trim($_POST["nome"]);
		$endereco = trim($_POST["endereco"]);
		$cidade = trim($_POST["cidade"]);
	    $email = trim($_POST["email"]);
		
		$query_rs='INSERT INTO clientes(nome,endereco,cidade,email) 
	   VALUES ("'.$nome.'","'.$endereco.'","'.$cidade.'","'.$email.'")';
	   $resultado = mysqli_query($conexao,$query_rs);
	   
	   if($resultado){
		$last_id = mysqli_insert_id($conexao);   
		echo json_encode(["successo"=>1,"msg"=>"inserido.","id"=>$last_id]);
        }else{
            echo json_encode(["successo"=>0,"msg"=>"Erro"]);
        } 
		
		echo  json_encode($resultado);
		
?> 
   