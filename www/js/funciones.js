$("#miformulario").submit(function(evento){
	evento.preventDefault();
	console.info("activando formulario.....");
	var cadena=$(this).serializeArray();
	console.info(cadena);
	console.log('entre');
	$.ajax({
		url:"http://especialistasenlaweb.com/srvdatos.php",
		type:"post",
		data:cadena
	}).done(function(respuesta){

		$(".mensaje").html(respuesta);

	});
});