
//funcion que reescala la ventana que ve el usuario
function reescalaVentana(){
	//console.log("reescalar1")

	    camara.anchuraPantalla = window.innerWidth;
		camara.alturaPantalla = window.innerHeight;
		
		$("#lienzoFondo").attr("width",camara.anchuraPantalla);
		$("#lienzoFondo").attr("height",camara.alturaPantalla);
		
	
}


//login
function enviarAjaxLogin(usr,psw){
	//console.log("login: "+nombre)
	if(banBD){
		banBD = false;
		$.ajax({
			async:true,
			type: "POST",
			dataType: "html",
			contentType: "application/x-www-form-urlencoded",
			url:"php/validarUsuario.php",
			data:"usuario="+usr+"&contrasena="+psw,
			//beforeSend:inicioEnvio,
			success:finRecibirLogin,
			timeout:4000,
			error:problemas
	     
	     });
		
	}

}

function finRecibirLogin(dato){
	console.log("respuesta",dato)
	if(dato[0]=="E"){
		$("#msgLogin").text(dato)
		$( "#btnListo" ).attr("disabled", "enable");
	}else{
		var datos = dato.split("|");
		var idUsr = parseInt(datos[0]);
		/*var idSala = parseInt(datos[1]);
		
		player[0] = new Player(usuario, idUsr, idSala);

		actualizarLista(usuario);
		*/
		$( "#contenedorInicio" ).hide()
		$( "#contenedorJuego" ).show()
		
		bucle();
		//lugar ajax
		//bucleespera();//ya no lo vamos a llamar, ajaxRecogibles. pasar idusuario e idsala	
	}
	banBD = true;

}


//Sign in
function enviarAjaxSignin(usr,psw,nombre,apellidos){
	//console.log("login: "+nombre)
	if(banBD){
		banBD = false;
		$.ajax({
			async:true,
			type: "POST",
			dataType: "html",
			contentType: "application/x-www-form-urlencoded",
			url:"php/signin.php",
			data:"usuario="+usr+
				"&contrasena="+psw+
				"&nombre="+nombre+
				"&apellidos="+apellidos,
			//beforeSend:inicioEnvio,
			success:finRecibirSignin,
			timeout:4000,
			error:problemas
	     
	     });
		
	}

}
function problemas(dato){
	console.log(dato)
}
function finRecibirSignin(dato){
	console.log("respuesta",dato)
	$("#msgSignin").text(dato)
	if(dato[0]=="E"){
	
	}else{
		
	}
	banBD = true;

}
