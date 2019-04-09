<?php

require_once('websockets.php');
class echoServer extends WebSocketServer {
    public $contador = 0;
    public $usuario;

    public function process ($user, $message) {
        echo "process\n";
       //mensaje recibido, explode en php es el split de js
        $explotado = explode("|",$message);
        
        //$this->usuario[$user->id]['idj'] = explode(",",$explotado[0])[0];              //id personaje
        $this->usuario[$user->id]['idj'] = $user->id;              //id personaje
        $this->usuario[$user->id]['px'] = explode(",",$explotado[0])[1];             // Posicion x
        $this->usuario[$user->id]['py'] = explode(",",$explotado[0])[2];             // pos y
        //$this->usuario[$user->id]['puntos'] = explode(",",$explotado[0])[3];           // puntos
        //$this->usuario[$user->id]['dibig'] = explode(",",$explotado[0])[4];
        //$this->usuario[$user->id]['especial'] = explode(",",$explotado[0])[5];
        //$this->usuario[$user->id]['usuario2'] = explode(",",$explotado[0])[6];
        $this->usuario[$user->id]['utc'] = date('U');
        //el date es para no mandar mensajes que superen ese tiempo
        $longaniza = "";
        foreach ($this->usuario as &$valor) {
           if($valor['utc'] > date('U') - 15){
               //aqui uno los mensajes de cada cliente, y los vuelvo una mega longaniza
                //$longaniza .= $valor['idj'].",".$valor['px'].",".$valor['py'].",".$valor['puntos'].",".$valor['dibig'].",".$valor['especial'].",".$valor['usuario2']."|";
                 $longaniza .= $valor['idj'].",".$valor['px'].",".$valor['py']."|";
                }
            
        }
        $this->send($user,$longaniza);
        //mando la mega longaniza
    }
      
      
    protected function connected ($user) {
       echo "conectado\n";
    }
  
    protected function closed ($user) {
        echo "cerrado\n";
    }
}

$echo = new echoServer("0.0.0.0","8082");//puerto del servidor, debe ser igual al de sockets.js

try {
  $echo->run();
}
catch (Exception $e) {
  $echo->stdout($e->getMessage());
}
