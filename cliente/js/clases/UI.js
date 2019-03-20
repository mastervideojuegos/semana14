function UI()
{
  this.DibujarPuntos = function(ctx)
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

$(document).keydown(function(e)
{
    switch (e.which)
    {
        case 49:
            puntos_1++;
            console.log("1");
            break;
        case 50:
            puntos_2++;
            console.log("2");
            break;
    }
});
