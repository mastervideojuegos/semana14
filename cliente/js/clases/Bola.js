function Bola()
{
    this.tamanio    = 16;
    this.posX       = Math.random()*512;
    this.posY       = Math.random()*512 ;
    
    this.avanceX = 5;
    this.avanceY = 5;
    
    this.colicionPared = function(px,py)
    {
        if(px <=-45 || px >=622)
        {
            this.avanceX *=-1;        
        }
        if(py <=65 || py >=720)
        {
            this.avanceY *=-1;        
        }
    }
    
    this.moverse = function()
    {
        var tmpX = this.posX + this.avanceX;
        var tmpY = this.posY + this.avanceY;
        this.colicionPared(tmpX,tmpY);
        
        this.posX += this.avanceX;
        this.posY += this.avanceY;
    }
    
    this.Dibujar = function(ctx,camara)
    {/*
        ctx.fillStyle="white";
        ctx.beginPath();
        ctx.arc(this.posX+camara.posX,this.posY+camara.posY,this.tamanio,0,Math.PI*2,true);
        ctx.fill();
        ctx.closePath();
        */
        ctx.drawImage(bolaActual, this.posX+camara.posX, this.posY+camara.posY, this.tamanio, this.tamanio);
    }   
}