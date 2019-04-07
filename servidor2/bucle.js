 socket();
temporizador = setTimeout("bucle()",1000);
function bucle(){
    
   
	//console.log("hola")
	
		
    //prueba socket
     // En primer lugar creo la longaniza para enviar mensaje a servidor
       //var msg = idj+","+posX+","+posY+","+puntos+","+dibimg+","+cincopunto+","+NameUsuario+"|";
       var msg = idj+","+posX+","+posY+"|";
       //console.log(msg)
        
        
        try { 
            // Le envia la longaniza al socket
    		socket.send(msg);
    		//console.log("hola")
    		
    		log('Sent: '+msg); 
    	} catch(ex) { 
    	 console.log("mal")
    		log(ex); 
    	}
    
    //

    
   
	clearTimeout(temporizador);
	temporizador = setTimeout("bucle()", 62);
}