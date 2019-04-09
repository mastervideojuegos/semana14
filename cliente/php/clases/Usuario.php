<?php
    class Usuario{

        //atributos de la clase
        var $usuario = "";
        var $mysqli ;
        var $id;
        var $msg="";


        //metodos
        function loginUsuario($usr,$psw) // funcion principal con login
        {
           $this->conectar();
           $this->msg = "u|";
           if(!$this->validarUsuario($usr,$psw,0)){ //el metodo encuentra el usuario?
               $this->msg .= "Error: Usuario no valido";
           }
           else{
               $this->msg .= $this->id;      //asignamos el id al msg, el echo se hace en otro lado
           }
           //echo $this-> msg;
           $this->desconectar();
        }

        function validarUsuario($usr,$psw,$modo){
            $existe = false;

            //validamos si existe el usuairo con su contraseña
            $consulta = "SELECT * FROM usuarios
                            WHERE usuario = '".$usr."'
                        LIMIT 1";
            $resultado = $this->mysqli->query($consulta);

            $fila = $resultado->fetch_assoc();
            $this->id = $fila['id'];

            if($this->id == ""){
                $existe = false;
            }else{
              if($modo == 0){ //validamos contraseña
                if($fila["contrasena"] ==$psw){
                  $existe = true;
                }else{
                  $existe = false;
                }
              }else{// no necesitamos la contraseña
                $existe = true;
              }
            }
            return $existe;
        }


        //metodo principal para hacer el signin
        function crearUsuario($usr,$psw,$nombre,$apellidos){
           $this->conectar();
            if(!$this->validarUsuario($usr,"",1)){
                if($this->altaUsuario($usr,$psw,$nombre,$apellidos)){
                    $this->msg = "Ok: Se creó el usuario.";
                }else{
                    $this->msg += "Error: No se puede crear el usuario.";
                }
            }else{
                $this->msg = "Error: El usuario ya existe.";
            }
           $this->desconectar();
        }

        //insertamos el usuario en la tabla
        function altaUsuario($usr,$psw,$nombre,$apellidos){
            $creado = false;
            $pendiente = 0;
            $consulta = "INSERT INTO usuarios(usuario, contrasena, nombre, apellidos,utc)
                            VALUES ( '".$usr."',
                            '".$psw."',
                            '".$nombre."',
                            '".$apellidos."',
                            '".date('U')."'
                            )";
            $resultado = $this->mysqli->query($consulta);
            if($this->mysqli->errno == 0){
                $creado = true;
            }else{
                $this->msg +="nanais ";
                $creado = false;
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
