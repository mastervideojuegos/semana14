function Bola(mapa)
{
  this.radio      = 8;
  this.posX       = 0;
  this.posY       = 0;
  this.velocidad  = 1;
  this.avanceX    = 0;
  this.avanceY    = 0;
  this.id         = id;

  this.pelotaRandom = function(mapa)
  {
    //iniciar posicion
    this.posX       = Math.random()*(mapa.ancho*0.33)+mapa.ancho*0.33;
    this.posY       = Math.random()*(mapa.alto*0.33)+mapa.alto*0.33;

    //iniciar direccion
    this.avanceX = parseInt(Math.random()*2)*10-5;
    this.avanceY = parseInt(Math.random()*2)*10-5;
  }

  this.colicionPared = function(mapa,px,py)
  {
    if(px - this.radio <= 0)                                                    // Punto Jugador Derecha
    {
      puntos_2++;
		}
    if(px + this.radio >= mapa.ancho)                                           // Punto Jugador Izquierda
    {
      puntos_1++;
		}

    if(px-this.radio <=0 || px+this.radio >=mapa.ancho)
    {
      jugadorGolpeaBola[this.id].jugador="h";
      //this.pelotaRandom(mapa);
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
      if(px+this.radio >= jugadores[x].posX-jugadores[x].ladoAncho &&
          px-this.radio <= jugadores[x].posX+jugadores[x].ladoAncho &&
          py+this.radio >= jugadores[x].posY-jugadores[x].ladoAlto &&
    			py-this.radio <= jugadores[x].posY+jugadores[x].ladoAlto
    			)
      {
        jugadorGolpeaBola[this.id].jugador=jugadores[x].usuario;
    	   console.log("colicion fin")
         this.avanceX *=-1;
    	}
    }
  }

  this.colisionPoderes = function()
  {
    if(Math.abs(this.posX+camara.posX - poderes.centroX) <= 16 && Math.abs(this.posY+camara.posY - poderes.centroY) <= 16 && bPoderVisible)
    {
      poderActivado = true;
      bPoderVisible = false;
      switch (poderDibujado)
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
          MultiBola();
          break;
        case 5:
          this.pelotaRandom(mapa);
          break;
        case 6:

          break;
        case 7:

          break;
        case 8:

          break;
        case 9:

          break;
        case 10:

          break;
        case 11:

          break;
      }
		}
  }

  this.desactivarPoderes = function()
  {
    switch (poderUtilizado)
    {
      case 0:
        this.radio = 8;
        break;
      case 1:
        this.radio = 8;
        break;
      case 2:
        this.velocidad = 1;
        break;
      case 3:
        this.velocidad = 1;
        break;
      case 4:
        MultiBola();
        break;
      case 5:
        console.log("TeleBola");
        break;
      default:
    }
  }

  this.moverse = function(mapa, listaJugadores)
  {
    var tmpX = this.posX + (this.avanceX * this.velocidad);
    var tmpY = this.posY + (this.avanceY * this.velocidad);

    this.colicionPared(mapa, tmpX, tmpY);
		this.colicionPersonajes(listaJugadores, tmpX, tmpY);
    this.colisionPoderes();
    if(poderActivado == false)
    {
      this.desactivarPoderes();
    }
    this.posX += this.avanceX * this.velocidad;
    this.posY += this.avanceY * this.velocidad;
  }

  this.dibujar = function(ctx,camara)
  {
    ctx.drawImage(bolaActual, this.posX+camara.posX-this.radio, this.posY+camara.posY-this.radio, this.radio*2, this.radio*2);
  }

  this.pelotaRandom(mapa);
}
