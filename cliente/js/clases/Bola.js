function Bola()
{
  this.tamanio    = 8;
  this.tamanioOriginal = this.tamanio;

  this.posX       = Math.random()*512;
  this.posY       = Math.random()*512 ;

  this.velocidad  = 1;
  this.avanceX    = 5;
  this.avanceY    = 5;

  //this.poderes = new Poderes();

  this.pelotaRandom = function(){
    this.posX       = Math.random()*512;
    this.posY       = Math.random()*512
  }

  this.colicionPared = function(px,py){
    if(px <=-45 || px >=1300){
      this.pelotaRandom();

      //Punto!!!!!
		}
    if(py <=65 || py >=720){
      this.avanceY *=-1;
    }
  }
  this.colicionPersonajes = function(px,py){
    for (var x in jugadores){
      if( px >= jugadores[x].posX-jugadores[x].largo*.5-this.tamanio*.5 &&
        //console.log("validar colicion");
          px <= jugadores[x].posX+jugadores[x].largo*.5 +this.tamanio*.5&&
    			py >=(jugadores[x].posY -jugadores[x].largo*.5) -this.tamanio*.5&&
    			py <=(jugadores[x].posY +jugadores[x].largo*.5 +this.tamanio*.5)
    			){
    			     console.log("colicion fin")
               this.avanceX *=-1;
    		}
      }
    }

this.moverse = function(){
        //console.log("moviendose");
        var tmpX = this.posX + (this.avanceX * this.velocidad);
        var tmpY = this.posY + (this.avanceY * this.velocidad);

          this.colicionPared(tmpX,tmpY);
		      this.colicionPersonajes(tmpX,tmpY);

        this.posX += this.avanceX * this.velocidad;
        this.posY += this.avanceY * this.velocidad;

        //this.tamanio *= this.poderes(superbola)
    }

    this.dibujar = function(ctx,camara)
    {
        ctx.drawImage(bolaActual, this.posX+camara.posX, this.posY+camara.posY, this.tamanio, this.tamanio);
    }

}
