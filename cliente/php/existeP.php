<?php

    // Creo una conexion a una base de datos
    $mysqli = new mysqli("localhost", "pong", "pong", "pong");
  
    //obtenemos variables POST
    $idSala = $_POST['idSala'];
    $idUsr = $_POST['idUsr'];
    $posX = $_POST['posX'];
    $posY = $_POST['posY'];
    $listo = $_POST['listo'];
    $sala = $_POST['sala'];
    
    //cerramos sala
     $cadena = "UPDATE salas SET activo= ".$sala." WHERE id = ".$idSala;
     
    $result = $mysqli->query($cadena);
    
    
    
    
    //actualizamos salasUsuarios con las posiciones iniciales del juego  
     $cadena = "UPDATE salasUsuarios SET posX = ".$posX.",
            posY =".$posY.",
            listo =".$listo.",
            utc =".date('U')." WHERE 
            idSala =".$idSala." and
            idUsuario = ".$idUsr;
            //echo $cadena;
    $result = $mysqli->query($cadena);
    
    //echo $cadena;
    //traemso los usuarios en la sala con y su nombre de usuario
    $cadena = "
        SELECT * FROM  usuarios
            JOIN salasUsuarios ON usuarios.id = salasUsuarios.idUsuario
        WHERE salasUsuarios.idSala =  ".$idSala;
    $result = $mysqli->query($cadena);

    //creamos longaniza
    $longaniza = "";
    $inicio = true;
    $carSep = "";
     while ($fila = $result->fetch_assoc()) {
       //echo "**". $fila['usuario']."**";
       $longaniza .=$carSep. $fila['usuario']
                    ."|".$fila['idSala']
                    ."|".$fila['idUsuario']
                    ."|".$fila['listo']
                    ."|".$fila['posX']
                    ."|".$fila['posY'];
                    
        if($inicio){$inicio = false; $carSep = ";";}    
    }
    //$longaniza.= "&";
    //Raul;
    //logica de actualizar recogibles.
    /*
    select a los recogibles de la sala.    
    
    */
    
    //$longaniza.= "&";
    //fran;
    
    //imprimimos longaniza para enviarla de retorno
       echo $longaniza ;
      $mysqli->close();
    
?>
