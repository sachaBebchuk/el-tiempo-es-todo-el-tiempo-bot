
module.exports.regex = /cuantos dias faltan/;

module.exports.titulo = "cuantos dias";

module.exports.response = function(msg){

	let hoy = new Date(Date.now());
  	
  	let mesUltimo = new Date(hoy.getFullYear(),hoy.getMonth() + 1,0);

  	let diasRestantes = mesUltimo.getDate() - hoy.getDate();

  	let respuesta

  	if(diasRestantes > 19){
  		respuesta  = 'faltan ' + diasRestantes + " dias, fuaaaa un monton";
  	}
  	else if(diasRestantes > 10){
  		respuesta  = 'faltan ' + diasRestantes + " dias";	
  	}
  	else{
  		respuesta  = 'faltan ' + diasRestantes + " dias nomas";	
  	}

  	msg.reply(respuesta);
}