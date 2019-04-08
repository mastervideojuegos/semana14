function socket(){
    // Apunto al servidor
    var host = "wss://jfra2019-jorgefernandez.c9users.io:8082/echobot"; // SET THIS TO YOUR SERVER
	// Estructura de control para ver si da error o no
	try {
	    // Creo una nueva instancia de un websocket
		socket = new WebSocket(host);
		// Hace un log en la consola
		//log('WebSocket - status '+socket.readyState);
		// Cuando el servidor da respuesta (ok, te has conectado)
		socket.onopen    = function(msg) {
		   //log("Welcome - status "+this.readyState);
		   console.log("Socket Open")
			bucleespera();
	   };
		// Cuando el servidor te devuelve un mensaje, vamos a ver que hacemos con ese mensaje
		socket.onmessage = function(msg) {
      console.log(msg.data);

		};
		socket.onclose   = function(msg) {
			console.log("Socket Close")
		};
	}
	catch(ex){
		log(ex);
	}
	$("msg").focus();

}

function log(msg){
    $("log").innerHTML+="<br>"+msg;
}
