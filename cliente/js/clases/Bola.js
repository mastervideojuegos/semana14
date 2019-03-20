function Bola(mapa)
{
  this.radio    = 8;
  this.radioMax = this.radio;

  this.posX       = 0;
  this.posY       = 0;

  this.velocidad  = 1;
  this.avanceX    = 0;
  this.avanceY    = 0;

  //this.poderes = new Poderes();

  this.pelotaRandom = function(mapa){

    //iniciar posicion
    this.posX       = Math.random()*(mapa.largo*0.33)+mapa.largo*0.33;
    this.posY       = Math.random()*(mapa.ancho*0.33)+mapa.ancho*0.33

    //iniciar direccion
    console.log(parseInt(Math.random()*2));
    this.avanceX = parseInt(Math.random()*2)*10-5;
    this.avanceY = parseInt(Math.random()*2)*10-5;
  }

  this.colicionPared = function(mapa,px,py){
    if(px-this.radio <=0 || px+this.radio >=mapa.largo){
      this.pelotaRandom(mapa);
        //Punto!!!!!
		}
    if(py-this.radio <=0 || py+this.radio >=mapa.ancho){
      this.avanceY *=-1;
    }
  }
  this.colicionPersonajes = function(listaJugadores,px,py){
    for (var x in jugadores){
      if( px+this.radio >= jugadores[x].posX-jugadores[x].ladoAncho &&
          px-this.radio <= jugadores[x].posX+jugadores[x].ladoAncho &&
          py+this.radio >= jugadores[x].posY-jugadores[x].ladoLargo &&
    			py-this.radio <= jugadores[x].posY+jugadores[x].ladoLargo
    			){
    			     console.log("colicion fin")
               this.avanceX *=-1;
    		}
      }
    }

this.moverse = function(mapa,listaJugadores){
        //console.log("moviendose");
        var tmpX = this.posX + (this.avanceX * this.velocidad);
        var tmpY = this.posY + (this.avanceY * this.velocidad);

          this.colicionPared(mapa,tmpX,tmpY);
		      this.colicionPersonajes(listaJugadores,tmpX,tmpY);

        this.posX += this.avanceX * this.velocidad;
        this.posY += this.avanceY * this.velocidad;

        //this.tamanio *= this.poderes(superbola)
    }

    this.dibujar = function(ctx,camara)
    {
        ctx.drawImage(bolaActual, this.posX+camara.posX-this.radio, this.posY+camara.posY-this.radio, this.radio*2, this.radio*2);
    }

    this.pelotaRandom(mapa);
}
