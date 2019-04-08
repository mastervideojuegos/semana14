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
		console.log("enviar login");
	//console.log("login: "+nombre)
	if(banBD){
		banBD = false;
		$.ajax({
			async:true,
			type: "POST",
			dataType: "html",
			contentType: "application/x-www-form-urlencoded",
			url:"php/logIn.php",
			data:"usuario="+usr+"&contrasena="+psw,
			//beforeSend:inicioEnvio,
			success:finRecibirLogin,
			timeout:4000,
			error:problemas

	     });

	}

}

function finRecibirLogin(dato){
	console.log("fin login:"+dato);
	if(dato[0]=="E"){
		$("#msgLogin").text(dato)
		$( "#btnListo" ).attr("disabled", "enable");
	}else{
		var usrDatos =  dato.split("&")[0];
		var modoDatos = dato.split("&")[1];
		var idUsr = parseInt(usrDatos.split("|")[1]);
		datos = modoDatos.split(";")
		for(var x in datos){
			var id = datos[x].split("|")[3]+"a"+datos[x].split("|")[4]
			var texto =datos[x].split("|")[2];
			var cadena = "<button id=\""+ id+
				"\" type=\"button\" class=\"btn btn-danger btnModo\">"+texto+"</button><br>";
			$( "#lgModoItem	" ).append(cadena);
			$( "#"+id ).click(function() {
				btnModoClick(id);
			});
			//$('#'+id).click('click', '.'+id, btnModoClick(id));

		}
		jugadores[0] = new Personaje(usuario,1,0,0, idUsr, 0);



		$( "#contenedorInicio" ).hide()
		$( "#contenedorModalidades" ).show()

		//bucleespera();
		//lugar ajax
		//bucleespera();//ya no lo vamos a llamar, ajaxRecogibles. pasar idusuario e idsala
	}
	banBD = true;

}
function btnModoClick(id) {
	console.log("btnModo: "+id);
	jugadoresEquipo1 = parseInt(id.split("a")[0]);
	jugadoresEquipo2 =  parseInt(id.split("a")[1]);


	actualizarLista(usuario);

	$( "#contenedorModalidades" ).hide();
	$( "#contenedorSala" ).show();
	bucleespera();
}

function actualizarLista(usr) {
	console.log("actualizar lista");
	for(i=0;i<jugadores.length;i++){
		var i = 0;
			if(jugadores[i].equipo == 1){
				var cadena = "<li class=\"list-group-item1 listaEspera\"><h3>"+usr+"</h3></li>";
				$( "#lgEspera1" ).append(cadena);
			}else if(jugadores[i].equipo == 2){
				var cadena = "<li class=\"list-group-item2 listaEspera\"><h3>"+usr+"</h3></li>";
				$( "#lgEspera2" ).append(cadena);
			}

	}
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
//console.log(personaje[0]);
var textochat="";
	if(banBD){
		banBD = false;
		$.ajax({
				async:true,
	            type: "POST",
	            dataType: "html",
				url:"php/existeP.php",
				data:"idSala="+jugadores[0].idSala
					+"&idUsr="+jugadores[0].id
					+"&posX="+jugadores[0].posX
					+"&posY="+jugadores[0].posY
					+"&listo="+jugadores[0].listo
					+"&equipo="+jugadores[0].equipo
					+"&sala=0",
				//beforeSend:inicioEnvio,
				success:actualizaExitoP
				//timeout:4000,
				//error:problemaRecibe

		     });
	}

}

function actualizaExitoP(dato){
//console.log("fin sala de espera:"+dato)

	$( ".listaEspera" ).remove();
	var banEncontrado = false;
	var datos = dato.split(";");
	for (var i = 0; i < datos.length; i++){
		var fila = datos[i].split("|");
		actualizarLista(fila[0]);

		//si el id de Usr == id del jugador principal
		if(parseInt(fila[2])!=jugadores[0].id){ //fila 2 tiene el id de usuario
			banEncontrado = false;

			//barrido del jugador--> recogibles
			for(var j =0;j<jugadores.length;j++){
				//console.log(personaje[j].nombre, fila[0])

				//si el id de usuario cuadra con alguno personaje ya creado actualizamos
				if(jugadores[j].id == parseInt(fila[2])){
					jugadores[j].listo = parseInt(fila[3]);
					jugadores[j].posX = parseFloat(fila[4]);
					jugadores[j].posY = parseFloat(fila[5]);
					jugadores[j].equipo = parseInt(fila[6]);

					banEncontrado=true;
					break;
				}
			}

			//si no cuadro, creamos uno nuevo
			if(!banEncontrado){
				var equipo = 1;
				if(jugadoresActuales1 >= jugadoresEquipo1){
					equipo = 2
				}
				var tmpPlayer = new Personaje(fila[0],equipo,1,1,parseInt(fila[2]),parseInt(fila[1]));
				tmpPlayer.listo = parseInt(fila[3]);
				tmpPlayer.posX = parseFloat(fila[4]);
				tmpPlayer.posY = parseFloat(fila[5]);
				tmpPlayer.equipo = parseInt(fila[6]);
				jugadores.push(tmpPlayer);
			}
		}
	}


	banBD = true;
}
