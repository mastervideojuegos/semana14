function inicio(){
	$( document ).ready(function() {
		reescalaVentana();
	});

	$(window).resize(function(){
		reescalaVentana();
	})
	controles();

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
		if(banBD){
			usuario = $("#inUsuario").val();
			var contrasena = $("#inContrasena").val();
			enviarAjaxLogin(usuario,contrasena);
		}
		$( "#contenedorLogin" ).hide();
		$( "#contenedorMenu" ).hide()
		$( "#contenedorSala" ).show();
		
		
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
    	personaje[0].listo = 1;
	});
	
 //Boton cambiar equipo
	$( "#btnCambiarEquipo" ).click(function() {
	});
	
	
}
