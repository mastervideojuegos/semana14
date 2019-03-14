<?php
    class Sala{
        var $mysqli ;
        var $id;
        var $numJugadores;
        var $msg="";
        
        function obtenerSala($idUsr)
        {
            //echo "obtenemos sala... ";
           $this->conectar();
           
           $this->actualizarSalas();
           if(!$this->existeSala()){
               //echo "no encontre la sala...";
               if(!$this->crearSala()){
                    $this->msg .= "Error: JFRA no se puede crear la sala";
               }
           }
           //echo $this->msg;
           
           if($this->id != ""){
               //echo "bloqueamos sala...";
               $this->bloquearSala($idUsr);
               
           }
           //Asignamos la sala
           $this->desconectar();
        }
        
        function actualizarSalas(){
            $fecha = date('U') - 5;
            $consulta = "DELETE FROM salasUsuarios 
                        WHERE utc < ".$fecha;
            $resultado = $this->mysqli->query($consulta);
            $this->msg .= $consulta;
            $consulta = "SELECT idSala, count(idUsuario) as total 
                            FROM salasUsuarios ";
            $resultado = $this->mysqli->query($consulta);
            
            while ($fila = $resultado->fetch_assoc()){
                //echo $fila['idSala']." - ".$fila['total']."<br>";
            
               $cadena = "UPDATE  salas 
                            SET numJugadores = ".$fila['total']."
                            WHERE  id = ".$fila['idSala'];
                $result = $this->mysqli->query($cadena); 
            }
            
        }
        function existeSala(){
            $existe = false;
            //echo "existe sala... ";
            
            $consulta = "SELECT * FROM salas 
                            WHERE numJugadores < 5
                              and activo = 0
                        LIMIT 1";
            $resultado = $this->mysqli->query($consulta);
            $fila = $resultado->fetch_assoc();
            
            $this->id = $fila['id'];
            //echo "**".$this->id."**";
            if($this->id == ""){
                $existe = false;
            }else{
                $this->id = (int) $fila['id'];
                $this->numJugadores = (int) $fila['numJugadores'];
                
                $this->msg .= "**".$this->numJugadores."**";
                if($this->numJugadores <=1){
                    $this->borrarRecogibles();
                }
                
                $existe = true;
            }
            return $existe;
            
        }
        
        function crearSala(){
            $creado = false;
            $nombre = "";
            $consulta = "INSERT INTO salas(nombre, activo, numJugadores) 
                            VALUES ( '', 0,0 )";
            $resultado = $this->mysqli->query($consulta);
            if($this->mysqli->errno != 0){
                $creado = false;
            }else{
                if($this->existeSala()){
                    $creado = true;
                }else{
                    $creado = false;
                }
            }
            return $creado;
            
        }
        function borrarRecogibles(){
            $consulta = "DELETE FROM salasRecogibles WHERE idSala = ".$this->id;
            $this->msg .= $consulta;
            $resultado = $this->mysqli->query($consulta);
            
        }
        function bloquearSala($idUsr){
            //echo "bloqueando sala...".$this->id.",".$idUsr;
            $creado = false;
            $nombre = "";
            $consulta = "
            INSERT INTO salasUsuarios(idSala, idUsuario, utc) 
            VALUES (
            ".$this->id.",
            ".$idUsr.",
            ".date('U')."
            )";
            $resultado = $this->mysqli->query($consulta);
            //echo "**".$this->mysqli->errno."**";
            if($this->mysqli->errno != 0){
                $creado = false;
                $this->msg .= "Error: no se puede bloquear la sala";
            }else{
                if($this->existeSala($sala)){
                    $creado = true;
                }else{
                    $creado = false;
                    $this->msg .= "Error: Sigue sin existir la sala";
                }
            }
            return $creado;
            
        }
        function conectar(){
           include("datosConexion.php");
            $this->mysqli = new mysqli($sqlHost, $sqlUsuario, $sqlContrasena, $sqlBaseDatos);
        }
        function desconectar()
        {
           $this->mysqli->close();
        }
        
        
    }
?>