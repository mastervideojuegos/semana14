function socket(){
    // Apunto al servidor
    var host = "wss://jfra2019-jorgefernandez.c9users.io:8082/echobot"; // SET THIS TO YOUR SERVER
	// Estructura de control para ver si da error o no
	try {
		//console.log("prueba")
	    // Creo una nueva instancia de un websocket
		socket = new WebSocket(host);
		// Hace un log en la consola
		log('WebSocket - status '+socket.readyState);
		// Cuando el servidor da respuesta (ok, te has conectado)
		socket.onopen    = function(msg) { 
							   //log("Welcome - status "+this.readyState);
							   temporizador = setTimeout("bucle()",1000)
							   console.log("vamos al bucle")
						   };
		// Cuando el servidor te devuelve un mensaje, vamos a ver que hacemos con ese mensaje
		socket.onmessage = function(msg) { 
			//console.log(msg.data)
					//funciones que uso despues de recibir el mensaje, lo que se puede hacer es usar el mensaje, dividirlo y utilizar las variables que manda
                        //console.log("hola2")
                       
                       console.log(msg.data);//en .data esta la info de la longaniza
                            	
						   };
		socket.onclose   = function(msg) { 
							   //log("Disconnected - status "+this.readyState); 
						   };
	}
	catch(ex){ 
		console.log("remal")
		log(ex); 
	}
	$("msg").focus();
    
}
function log(msg){ 
    //$("log").innerHTML+="<br>"+msg; 
    }