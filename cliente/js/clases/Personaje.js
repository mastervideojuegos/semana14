function Personaje(usr,eq,principal, primero)
{
    this.largo      = 32;
    this.posX       = 1250;
    this.posY       = 50;
    this.vel = 10;
    this.direccion = 0;
    this.primero = primero;
    this.usuario = usr;


	this.ID=1;
	this.equipo=eq;
	this.principal=principal;

    this.colicionPared = function()
    {
        if(this.posY + this.largo/2 > 725)
        {
            this.posY = 725 - this.largo/2;
        }
        else if(this.posY - this.largo/2 <65)
        {
            this.posY = 65 + this.largo/2;
        }
    }

    this.moverse = function()
    {
        if(!bCongelaJugador)
        {
            this.posY += this.vel*this.direccion;
            this.colicionPared();
        }
    }

    this.dibujar = function(ctx,camara)
    {
        ctx.drawImage(personajeActual, this.posX+camara.posX-this.largo*0.25, this.posY+camara.posY-this.largo*0.5, this.largo*0.5, this.largo);
        ctx.beginPath();
        ctx.arc(this.posX+camara.posX, this.posY+camara.posY,3,0,(Math.PI/180)*360,true);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
}
