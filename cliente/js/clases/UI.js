function UI()
{
  this.dibujarPuntos = function(ctx)
  {
    ctx.clearRect(0,0,1400,1000);
    ctx.font = '20px pixeledregular';
    ctx.fillStyle = "orange";

    //Equipo 1
    ctx.fillText("EQUIPO 1", 300, 50);
    ctx.fillText(+ puntos_1, 350, 80);

    //Equipo 2
    ctx.fillText("EQUIPO 2", 1000, 50);
    ctx.fillText(+ puntos_2, 1050, 80);
  }
}
