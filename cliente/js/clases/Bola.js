function Bola()
{
    this.tamanio    = 16;
    this.posX       = Math.random()*512;
    this.posY       = Math.random()*512 ;

    this.velocidad  = 1;
    this.avanceX    = 5;
    this.avanceY    = 5;

  this.pelotaRandom = function(){
      this.posX       = Math.random()*512;
      this.posY       = Math.random()*512 ;

  }
    this.colicionPared = function(px,py)
    {
        if(px <=-45 || px >=1300)
        {
            this.pelotaRandom();
			//this.avanceX *=-1;
        }
        if(py <=65 || py >=720)
        {
            this.avanceY *=-1;
        }
    }

    this.colicionPersonajes = function(px,py){
		if( px >= personaje.posX &&
			py >=(personaje.posY -personaje.largo) &&
			py <=(personaje.posY +personaje.largo)
			){
			console.log("colicion")
			this.avanceX *=-1;
		}

	}

    this.moverse = function()
    {
        var tmpX = this.posX + (this.avanceX * this.velocidad);
        var tmpY = this.posY + (this.avanceY * this.velocidad);

        this.colicionPared(tmpX,tmpY);
		this.colicionPersonajes(tmpX,tmpY);

        this.posX += this.avanceX * this.velocidad;
        this.posY += this.avanceY * this.velocidad;
    }

    this.Dibujar = function(ctx,camara)
    {
        ctx.drawImage(bolaActual, this.posX+camara.posX, this.posY+camara.posY, this.tamanio, this.tamanio);
    }
}
