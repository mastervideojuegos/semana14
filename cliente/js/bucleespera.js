function bucleespera(){
    console.log("Hola")
    JugadorEnSala();

    banConfirmacion= true;
    
    for(var i = 0; i<personaje.length;i++){
        if(personaje[i].listo== 0){
            banConfirmacion= false;        
        }
    }
    if(banConfirmacion){
        
    	$( "#contenedorSala" ).hide()
    	$( "#contenedorInicio" ).hide()
		$( "#contenedorMenu" ).hide()
    	$( "#contenedorJuego" ).show()
        bucle();
    }else{
        clearTimeout(temporizador);
    	temporizador = setTimeout("bucleespera()", 60);
    }
}