
function Personaje(usuario,eq,principal, primero,idUsr,idSala)
{
	//Variables BD
	this.usuario = usuario;
  this.id = parseInt(idUsr);
  this.idSala = parseInt(idSala);
  this.listo = 0;

  this.posX       = 1250;
  this.posY       = 50;
  this.vel = 10;
	this.primero = primero;
	this.equipo=eq;
	this.principal=principal;
  this.direccion = 1;

	//Dimecniones de Barra
	this.largo      = 32;
	this.ladoLargo	= this.largo * 0.5;
	this.largoMax 	= this.largo;

	this.ancho 			= this.largo * 0.5;
	this.ladoAncho	= this.ancho * 0.5;
	this.anchoMax 	= this.ancho;

	this.colicionPared = function(mapa){
		if(this.posY + this.ladoLargo > mapa.ancho){
			this.posY = mapa.ancho - this.ladoLargo;
		}
		else if(this.posY - this.largo/2 <0){
			this.posY = this.ladoLargo;
		}
	}

	this.moverse = function(mapa){
		if(!bCongelaJugador){
			this.posY += this.vel*this.direccion;
			this.colicionPared(mapa);
		}
	}

    this.dibujar = function(ctx,camara)
    {
        ctx.drawImage(personajeActual, this.posX+camara.posX-this.ladoAncho, this.posY+camara.posY-this.ladoLargo, this.ancho, this.largo);
        ctx.beginPath();
        ctx.arc(this.posX+camara.posX, this.posY+camara.posY,3,0,(Math.PI/180)*360,true);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
}
