function calcularMovBola(){
		for(var i=0;i<pelotas.length;i++){
      pelotas[i].moverse();
		}
  }

function dibujarBolas(ctx,camara){
	for(var i=0;i<pelotas.length;i++){
		pelotas[i].dibujar(contextoFondo,camara);
	}
}

function crearBolas(){
	pelotas[0]=new Bola();
	pelotas[1]=new Bola();
	pelotas[2]=new Bola();
	pelotas[3]=new Bola();
}
