const fs   = require('fs');
const auth = require("./auth.json");

let comandosDir = './comandos/';
let files = fs.readdirSync(comandosDir);

let commandArray = [];

files.forEach( file => {

	if(file == "data"){
		return;
	}

	let comandos = require(comandosDir + file);

	console.log("Leyendo directorio: " + comandosDir + file);

	if(Array.isArray(comandos)){
		comandos.forEach( comando => {
			cargarComando(comando);
		});
	}
	else{
		cargarComando(comandos);
	}

});

function cargarComando(comando){
	
	if(comando == undefined ||
	   comando.titulo == undefined ||
	   comando.regex == undefined ||
	   comando.response == undefined){

	   	console.log("\tcomando "+ comando.titulo + "... error");

		return;
	}
	commandArray.push(comando);
	console.log("\tcomando "+ comando.titulo + "... ok");
}

function handlerMensaje(msg){

	if(msg.author == auth.ID){
		return;
	}

	console.log("Recibido mensaje de: [" + msg.author.username + "] que dice : [" + msg.content + "]");

	commandArray.forEach( comando => evaluarComando(comando,msg));

}

function evaluarComando(comando,msg){

	let match = msg.content.match(comando.regex);

	if(!match){
		return;
	}

	console.log("\tRespondiendo al mensaje con el comando " + comando.titulo + "\n");

	comando.response(msg,match);
}

module.exports.commandArray   = commandArray;
module.exports.handlerMensaje = handlerMensaje;