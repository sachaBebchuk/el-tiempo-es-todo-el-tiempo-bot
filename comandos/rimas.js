const fs = require('fs');
let dirRimas = "./comandos/data/rimas.json";
let idRegex = /<@[\!]?([0-9]*)>/g;
let urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
let rimas;
let comandos = [];

function devolverRima(msg,matches,regex,respuestaIngeniosa){

	let mensaje = msg.content;

	mensaje = limpiarString(mensaje,idRegex);
	mensaje = limpiarString(mensaje,urlRegex);

	if(mensaje.match(regex)){
		msg.reply(respuestaIngeniosa);
	}
}

function limpiarString(s,regex){
	
	let matches = s.match(regex);

	if(!matches){
		return s;
	}

	for(var i = 0; i < matches.length; i++){
		s = s.replace(matches[i],"");
	}

	return s;
}

let dataJSON = fs.readFileSync(dirRimas);

rimas = JSON.parse(dataJSON);

rimas.forEach( rima => {
	comandos.push({
		"regex":    new RegExp(rima.regex,"i"),
		"titulo":   rima.titulo,
		"response": function(msg,matches){ devolverRima(msg,matches,rima.regex,rima.respuesta) }
	});
});

module.exports = comandos;