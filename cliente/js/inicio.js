function inicio(){
	$( document ).ready(function() {
		reescalaVentana();
		//bucle();
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
		//if(banBD){
			//enviarAjaxLogin($("#inUsuario").val(),$("#inContrasena").val());
		$( "#contenedorLogin" ).hide();
		$( "#contenedorJuego" ).show();
			//DK//
		bucle();
		//}
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


}
