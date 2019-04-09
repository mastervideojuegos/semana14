function Personaje(usuario, eq, principal, primero, idUsr, idSala)
{
	//Variables BD
	this.usuario 	= usuario;
  this.id 			= parseInt(idUsr);
  this.idSala 	= parseInt(idSala);
  this.listo 		= 0;

  this.posX       = 1350;
  this.posY       = 50;
  this.vel 				= 10;
	this.primero 		= primero;
	this.equipo			= eq;
	this.principal	= principal;
  this.direccion 	= 1;

	//Dimenciones de Barra
	this.alto     = 32;
	this.ladoAlto	= this.alto * 0.5;

	this.ancho 			= this.alto * 0.5;
	this.ladoAncho	= this.ancho * 0.5;

	this.colicionPared = function(mapa)
	{
		if(this.posY + this.ladoAlto > mapa.alto)
		{
			this.posY = mapa.alto - this.ladoAlto;
		}
		else if(this.posY - this.alto * 0.5 < 0)
		{
			this.posY = this.ladoAlto;
		}

		if(this.equipo == 1)
		{
			if(this.posX < mapa.ancho*0.5)
			{
				this.posX = mapa.ancho*0.5 + this.ladoAncho;
			}
			else if(this.posX + this.ladoAncho > mapa.ancho)
			{
				this.posX = mapa.ancho - this.ladoAncho;
			}
		}
		else
		{
			if(this.posX < 0)
			{
				this.posX = this.ladoAncho;
			}
			else if(this.posX + this.ladoAncho > mapa.ancho*0.5)
			{
				this.posX = mapa.ancho*0.5 - this.ladoAncho;
			}
		}
	}

	this.SuperJugador = function()
	{
		this.alto  = this.alto * SuperJugador();
	}

	this.MiniJugador = function()
	{
		this.alto  = this.alto * MiniJugador();
	}

	this.AceleraJugador = function()
	{
		this.vel  = this.vel * AceleraJugador();
	}

	this.DeceleraJugador = function()
	{
		this.vel  = this.vel * DeceleraJugador();
	}

	this.desactivarPoderes = function()
  {
		switch (poderUtilizado)
		{
			case 6:
				this.alto = 32;
				break;
			case 7:
				this.alto = 32;
				break;
			case 8:
				this.vel  = 10
				break;
			case 9:
				this.vel  = 10
				break;
			case 10:
				bCongelaJugador = false;
				break;
		}
  }

	this.moverse = function(mapa)
	{
		if(!bCongelaJugador)
		{
			if(this.direccion == 1 || this.direccion == -1)
			{
				this.posY += this.vel*this.direccion;
				this.colicionPared(mapa);
			}
			else
			{
				this.posX += this.vel*this.direccion*0.5;
				this.colicionPared(mapa);
			}
		}
		if(poderActivado == false)
    {
      this.desactivarPoderes();
    }
	}

  this.dibujar = function(ctx,camara)
  {
  	ctx.drawImage(personajeActual, this.posX + camara.posX - this.ladoAncho, this.posY + camara.posY - this.ladoAlto, this.ancho, this.alto);
    ctx.beginPath();
    ctx.arc(this.posX+camara.posX, this.posY+camara.posY,3,0,(Math.PI/180)*360,true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }

	this.envioSockets = function()
	{
		var cadena = 	"s|" + jugadores[0].usuario +
									"|" + jugadores[0].equipo
									"|" + jugadores[0].listo;
		socket.send(cadena)
	}
}
