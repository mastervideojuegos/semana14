function controles()
{
	$(document).keydown(function(event)
	{
		// Esto es lo que pasa cuando suelto la W
		if (event.which == 87)
		{
  		jugadores[0].direccion=-1;
		}
		if (event.which == 83)
		{
    	jugadores[0].direccion=1;
		}
		if(event.which == 65)
		{
			jugadores[0].direccion = -2;
		}
		if(event.which == 68)
		{
			jugadores[0].direccion = 2;
		}
  });

	$(document).keyup(function(event)
	{
		// Esto es lo que pasa cuando suelto la W
		if ( event.which == 87 )
		{
			jugadores[0].direccion = 0;
		}
		// Esto es lo que pasa cuando suelto la S
		if ( event.which == 83 )
		{
			jugadores[0].direccion = 0;
		}

		if(event.which == 65)
		{
			jugadores[0].direccion = 0;
		}
		if(event.which == 68)
		{
			jugadores[0].direccion = 0;
		}
	});
}
