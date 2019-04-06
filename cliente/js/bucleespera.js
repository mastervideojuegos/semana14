function bucleespera(){
  console.log("bucle espera");
    JugadorEnSala();

    banConfirmacion= true;

	jugadoresActuales1 = 0;
	jugadoresActuales2 = 0;
    for(var i = 0; i<jugadores.length;i++){
		if(jugadores[i].equipo == 1){
			jugadoresActuales1++;
		}else if(jugadores[i].equipo == 2){
			jugadoresActuales2++;
		}
        if(jugadores[i].listo== 0){
            banConfirmacion= false;
        }
    }
	if(jugadoresActuales1 != jugadoresEquipo1 && jugadoresActuales2 != jugadoresEquipo2){
		banConfirmacion = false;
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
