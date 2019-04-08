function inicio(){
	$( document ).ready(function() {
		reescalaVentana();
	});

	$(window).resize(function(){
		reescalaVentana();
	})
	controles();// controles del jugador

	$( "#idLogin" ).click(function() {
		$("#inUsuario").val("")
		$("#inContrasena").val("")

		$("#msgLogin").text("")
		$( "#contenedorLogin" ).show();
		$( "#contenedorSignin" ).hide();

	});
 //Boton SingIn
	$( "#idSignin" ).click(function() {

		$("#inUsuario2").val("")
		$("#inContrasena2").val("")
		$("#inNombre").val("")
		$("#inApellidos").val("")

		$( "#contenedorLogin" ).hide();
		$( "#contenedorSignin" ).show();
	});

 //Boton Entrar LogIn
	$( "#btnEntrarLogin" ).click(function() {
		if(online){
			if(banBD){
				usuario = $("#inUsuario").val();
				var contrasena = $("#inContrasena").val();
				enviarAjaxLogin(usuario,contrasena);
			}
			$( "#contenedorLogin" ).hide();
			$( "#contenedorMenu" ).hide()
			$( "#contenedorModalidades" ).show();
		}else{
			//nos saltamos validaciones:

			$( "#contenedorSala" ).hide();
			$( "#contenedorJuego" ).show();
			crearJugadores();
			bucle();
		}
	});


 //Boton Entrar SingIn
	$( "#btnEntrarSignin" ).click(function() {
		if(banBD){
			var usr = $("#inUsuario2").val();
			var psw = $("#inContrasena2").val();
			var nombre = $("#inNombre").val();
			var apellidos = $("#inApellidos").val();
			console.log(usr,psw,nombre,apellidos);
			enviarAjaxSignin(usr,psw,nombre,apellidos);
		}
	});

 //Boton Listo
	$( "#btnListo" ).click(function() {
    	$( "#btnListo" ).attr("disabled", "disabled");
		$( "#contenedorSala" ).hide();
    	jugadores[0].listo = 1;
	});

 //Boton cambiar equipo 1
	$( "#btnCambiarEquipo1" ).click(function() {
		jugadores[0].equipo = 1;
	});

//Boton cambiar equipo 2
	$( "#btnCambiarEquipo2" ).click(function() {
		jugadores[0].equipo = 2;
	});

//Boton Siguiente


//Boton 1vs1
	$( "#1vs1" ).click(function() {
		jugadoresEquipo1 = 1;
		jugadoresEquipo2 = 1;
	});

//Boton 1vs2
	$( "#1vs2" ).click(function() {
		jugadoresEquipo1 = 1;
		jugadoresEquipo2 = 2;
	});

//Boton 1vs3
	$( "#1vs3" ).click(function() {
		jugadoresEquipo1 = 1;
		jugadoresEquipo2 = 3;
	});

//Boton 2vs2
	$( "#2vs2" ).click(function() {
		jugadoresEquipo1 = 2;
		jugadoresEquipo2 = 2;
	});
}
