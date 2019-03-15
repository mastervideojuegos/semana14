function Mapa()
{
    this.x = 1400;
    this.y = 700;
    
    this.DibujarEscenario = function(ctx,camara)
    {
        ctx.drawImage(mapaActual, 0, 100, this.x, this.y);
    }
}