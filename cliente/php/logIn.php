<?php
  // Se conecta a la base de datos
  session_start();
  $_SESSION["usr"]="";
  include("clases/Usuario.php");
  include("clases/Modo.php");

  $usuario = new Usuario();
  $modo = new Modo();

  $nombre = $_POST['usuario'];
  $contrasena = $_POST['contrasena'];

  $usuario->loginUsuario($nombre,$contrasena);

  if($usuario->id == ""){
    $longaniza = $usuario->msg;
  }else{
    $longaniza = $usuario->msg;
    $_SESSION["usr"]=$usuario->id;
    $modo->obtenerModos();
    $longaniza.= "&".$modo->lista;
  }
  echo $longaniza;


?>
