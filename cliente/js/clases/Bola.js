function Bola(mapa,id)
{
  this.radio    = 8;
  this.radioMax = this.radio;

  this.posX       = 0;
  this.posY       = 0;

  this.velocidad  = 1;
  this.avanceX    = 0;
  this.avanceY    = 0;
  
  this.id=id;  

  //this.poderes = new Poderes();

  this.pelotaRandom = function(mapa)
  {
    //iniciar posicion
    this.posX       = Math.random()*(mapa.ancho*0.33)+mapa.ancho*0.33;
    this.posY       = Math.random()*(mapa.alto*0.33)+mapa.alto*0.33;

    //iniciar direccion
    console.log(parseInt(Math.random()*2));
    this.avanceX = parseInt(Math.random()*2)*10-5;
    this.avanceY = parseInt(Math.random()*2)*10-5;
  }

  this.colicionPared = function(mapa,px,py)
  {
    if(px-this.radio <=0 || px+this.radio >=mapa.ancho)
    {
	  jugadorGolpeaBola[this.id].jugador="h";
      this.pelotaRandom(mapa);
        //Punto!!!!!
		}
    if(py-this.radio <=0 || py+this.radio >=mapa.alto)
    {
      this.avanceY *=-1;
    }
  }

  this.colicionPersonajes = function(listaJugadores,px,py)
  {
    for (var x in jugadores)
    {
		
		if(jugadorGolpeaBola[this.id].jugador!=jugadores[x].usuario){
		  if(px+this.radio >= jugadores[x].posX-jugadores[x].ladoAncho &&
			  px-this.radio <= jugadores[x].posX+jugadores[x].ladoAncho &&
			  py+this.radio >= jugadores[x].posY-jugadores[x].ladoAlto &&
					py-this.radio <= jugadores[x].posY+jugadores[x].ladoAlto
					)
			{
				jugadorGolpeaBola[this.id].jugador=jugadores[x].usuario;
				//jugadorGolpeaBola[this.id].bolaId=this.id;
				
			   console.log("colicion fin")
			 this.avanceX *=-1;
			}
		}
		
	}
  }

  this.colisionPoderes = function()
  {
    if(Math.abs(this.posX+camara.posX - poderes.centroX) <= 16 && Math.abs(this.posY+camara.posY - poderes.centroY) <= 16 && bPoderVisible)
    {
      puntos_1++;
      bPoderVisible = false;
      switch (poderUtilizado)
      {
        case 0:
          this.radio = this.radio * SuperBola();
          break;
        case 1:
          this.radio = this.radio * MiniBola();
          break;
        case 2:
          this.velocidad = this.velocidad * AceleraBola();
          break;
        case 3:
          this.velocidad = this.velocidad * DeceleraBola();
          break;
        case 4:
          console.log("MultiBola");
          break;
        case 5:
          console.log("TeleBola");
          break;
        default:
      }
		}
  }

  this.moverse = function(mapa,listaJugadores)
  {
        //console.log("moviendose");
        var tmpX = this.posX + (this.avanceX * this.velocidad);
        var tmpY = this.posY + (this.avanceY * this.velocidad);

        this.colicionPared(mapa,tmpX,tmpY);
		    this.colicionPersonajes(listaJugadores,tmpX,tmpY);
        this.colisionPoderes();

        this.posX += this.avanceX * this.velocidad;
        this.posY += this.avanceY * this.velocidad;

        //this.radio *= this.poderes(superbola)*/
  }

  this.dibujar = function(ctx,camara)
  {
      /*ctx.beginPath();
      ctx.moveTo(this.posX+camara.posX, this.posY+camara.posY);
      ctx.lineTo(poderes.centroX, poderes.centroY);
      ctx.lineWidth = 1;
  	  ctx.strokeStyle = 'orange';
      ctx.stroke();*/
      ctx.drawImage(bolaActual, this.posX+camara.posX-this.radio, this.posY+camara.posY-this.radio, this.radio*2, this.radio*2);
    }

    this.pelotaRandom(mapa);
}
