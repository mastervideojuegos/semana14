<?php
    // Se conecta a la base de datos
    
    include("clases/Usuario.php");
    
    $usuario = new Usuario();
    
    $usr = $_POST['usuario'];
    $psw = $_POST['contrasena'];
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    
    $usuario->crearUsuario($usr,$psw,$nombre,$apellidos);
    echo $usuario->msg;
    
?>