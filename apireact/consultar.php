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

$sql = "Select * from clientes";
$resultados  = mysqli_query($conexao,$sql);

//echo $sql;
function limitarTexto($texto, $limite){
		  $contador = strlen($texto);
		  if ( $contador >= $limite ) {      
			  $texto = substr($texto, 0, strrpos(substr($texto, 0, $limite), ' ')) . '...';
			  return $texto;
		  }
		  else{
			return $texto;
		  }
		} 

     if(mysqli_num_rows ($resultados)>=0)
		{	
		$clientes = array(); 
			while ($row=mysqli_fetch_array($resultados))
			{
			  $row_array['id'] = $row['id']; 
			  $row_array['nome'] = $row["nome"]; 
			  $row_array['endereco'] = $row["endereco"]; 
			  $row_array['cidade'] = $row["cidade"]; 
			  $row_array['email'] = $row["email"]; 
			  $row_array["sucesso"] = 1;
				
				array_push($clientes,$row_array); 
			
            }
			
			
			// echo json_encode($arr);
			echo json_encode($clientes);
		}
		else
		{
		
			 $erro["erro"] = 0;
			$arr = array(
				 $erro
			);
			
				
		   echo json_encode($arr);
		}

?>