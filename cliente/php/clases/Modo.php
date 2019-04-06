<?php
    class Modo{

        //atributos de la clase
        var $mysqli ;
        var $msg="";
        var $lista = "";


        //metodos
        function obtenerModos() // obtenemos los modos
        {
           $this->conectar();
           if(!$this->generarLista()){ //generamos lista
               $this->msg = "Error: No hay lista";
           }
           else{
               $this->msg = $this->lista;      //enviamos la lista
           }
           $this->desconectar();
        }

        function generarLista(){
            $existe = false;

            //validamos si existe el usuairo con su contraseña
            $consulta = "SELECT * FROM modos";

            $resultado = $this->mysqli->query($consulta);

            $fila;
            $this->lista = "";
            $carSep = "";
            $inicio = true;
            while ($fila = $resultado->fetch_assoc()){
              $this->lista.= $carSep."m|".$fila['id'].
              "|".$fila['descripcion'].
              "|".$fila['equipo1'].
              "|".$fila['equipo2'];
              if($inicio){$inicio = false; $carSep = ";";}
            }

            if($this->lista == ""){
              $existe = false;
            }else{
              $existe = true;
            }

            return $existe;
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
