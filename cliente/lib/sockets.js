function socket(){
    // Apunto al servidor
    var host = "wss://sims-aulatematica.c9users.io:8082/echobot"; // SET THIS TO YOUR SERVER
	// Estructura de control para ver si da error o no
	try {
	    // Creo una nueva instancia de un websocket
		socket = new WebSocket(host);
		// Hace un log en la consola
		log('WebSocket - status '+socket.readyState);
		// Cuando el servidor da respuesta (ok, te has conectado)
		socket.onopen    = function(msg) { 
							   //log("Welcome - status "+this.readyState);
							   console.log("Socket Open")
								init();
								animate();
						   };
		// Cuando el servidor te devuelve un mensaje, vamos a ver que hacemos con ese mensaje
		socket.onmessage = function(msg) { 
			//4.- Recibimos en cliente 
			
			//console.log(msg.data);
			//Recibimos la cadena con personajes.
			var personajes = msg.data.split(";");
	        for (let i = 0; i < personajes.length; i++) { 
					var personajeCaract = personajes[i].split("|");
					
					if(personajeCaract[0] != loginUsuario){
					
						var object = scene.getObjectByName( personajeCaract[0] );
						if (object === undefined){
							if (objCargando==false){
								objCargando = true;
								miobjeto = new Jugador()
								miobjeto.cargarObjeto(personajeCaract[0]);
							}	
						}else{
							object.position.x = parseFloat(personajeCaract[1]) ;
							object.position.y = parseFloat(personajeCaract[2]) ;
							object.position.z = parseFloat(personajeCaract[3]) ;
							object.rotation.x = parseFloat(personajeCaract[4]) ;
							object.rotation.y = parseFloat(personajeCaract[5]) ;
							object.rotation.z = parseFloat(personajeCaract[6]) ;
							
						}
						
					
						
						
						
					}
			}
	 
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