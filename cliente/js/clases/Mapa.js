function Mapa()
{
    this.DibujarEscenario = function(ctx,camara)
    {
        ctx.drawImage(mapaActual, 0, 100, 700, 700);
    }
}