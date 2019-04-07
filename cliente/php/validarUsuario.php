<?php
    // Se conecta a la base de datos
    
    include("clases/Usuario.php");
    include("clases/Sala.php");
    
    $usuario = new Usuario();
    $sala = new Sala();
    
    $nombre = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    
    $usuario->loginUsuario($nombre,$contrasena);
    
    if($usuario->id == ""){
        echo $usuario->msg;
    }else{
        $sala->obtenerSala($usuario->id);
        
        if($sala->id == ""){
            echo $sala->msg;
        }else{
            $longaniza = $usuario->id."|".$sala->id;
            echo $longaniza;
            echo "&".$sala->msg;
        }
    }
    
    
?>