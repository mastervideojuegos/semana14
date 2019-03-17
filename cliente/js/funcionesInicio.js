
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

//Sala de espera
function JugadorEnSala(){
console.log(personaje[0].usuario);
var textochat=""
	if(banBD){
		banBD = false;
		$.ajax({
				async:true,
	            type: "POST",
	            dataType: "html",
				url:"php/existeP.php",
				data:"idSala="+personaje[0].idSala
					+"&idUsr="+personaje[0].id
					+"&posX="+personaje[0].posX
					+"&posY="+personaje[0].posY
					+"&listo="+personaje[0].listo
				//beforeSend:inicioEnvio,
				success:actualizaExitoP
				//timeout:4000,
				//error:problemaRecibe
		     
		     });
	}
    
}
function actualizaExitoP(dato){
console.log("fin sala de espera:"+dato)
	
	$( ".listaEspera" ).remove();
	var banEncontrado = false;
	var datos = dato.split(";");
	for (var i = 0; i < datos.length; i++){
		var fila = datos[i].split("|");
		actualizarLista(fila[0]);
		
		//si el id de Usr == id del jugador principal
		if(parseInt(fila[2])!=personaje[0].id){ //fila 2 tiene el id de usuario
			banEncontrado = false;
			
			//barrido del jugador--> recogibles
			for(var j =0;j<personaje.length;j++){
				//console.log(player[j].nombre, fila[0])
				
				//si el id de usuario cuadra con alguno player ya creado actualizamos
				if(personaje[j].id == parseInt(fila[2])){
					personaje[j].listo = parseInt(fila[3]);
					personaje[j].posX = parseFloat(fila[4]);
					personaje[j].posY = parseFloat(fila[5]);

					banEncontrado=true;					
					break;
				}
			}
			
			//si no cuadro, creamos uno nuevo
			if(!banEncontrado){
				var tmpPlayer = new Personaje();
				tmpPlayer.listo = parseInt(fila[3]);
				tmpPlayer.posX = parseFloat(fila[4]);
				tmpPlayer.posY = parseFloat(fila[5]);
				personaje.push(tmpPlayer);
			}
		}
	}
	
	
	banBD = true;
}