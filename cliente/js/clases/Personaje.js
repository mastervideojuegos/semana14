function Personaje()
{
    this.largo      = 32;
    this.posX       = 600;
    this.posY       = Math.random()*612+this.largo;
    this.vel = 10;
    this.direccion = 1;

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

    this.Dibujar = function(ctx,camara)
    {
        ctx.drawImage(personajeActual, this.posX+camara.posX, this.posY+camara.posY-this.largo*0.5, this.largo*0.5, this.largo);
    }
}
