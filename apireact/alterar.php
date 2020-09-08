<?php
error_reporting(E_ALL & ~ E_NOTICE);

date_default_timezone_set('America/Sao_Paulo');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header('Content-type: text/html; charset=utf-8',TRUE);
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


include_once('conexao.php');

 	
	 	 $id = trim($_POST["id"]);
		 $nome = trim($_POST["nome"]);
		 $endereco = trim($_POST["endereco"]);
		 $cidade = trim($_POST["cidade"]);
		 $email = trim($_POST["email"]);
	 
		
	    $sql = "UPDATE clientes set nome='".$nome."',endereco='".$endereco."',
	  cidade='".$cidade."',email='".$email."' where id= '".$id."' ";
	   $resultado = mysqli_query($conexao,$sql);

	   
	   if($resultado){
		$last_id = mysqli_insert_id($conexao);   
		echo json_encode(["successo"=>1,"msg"=>"alterado.","id"=>$last_id]);
        }else{
            echo json_encode(["successo"=>0,"msg"=>"Erro!"]);
        } 
		
		echo  json_encode($resultado);
