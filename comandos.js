const fs        = require('fs');
const auth      = require("./auth.json");
const excluidos = require("./comandos/data/excluidos.json");

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

	let logLine = ("\tcarngado comando " + comando.titulo + "...").padEnd("60"," ");

	if(comando == undefined ||
	   comando.titulo == undefined ||
	   comando.regex == undefined ||
	   comando.response == undefined){

	   	console.log(logLine + "error");

		return;
	}

	for(var i = 0; i < excluidos.length; i++){
		if(excluidos[i] == comando.titulo){
	
			console.log(logLine + "excluido");

			return;
		}
	}

	commandArray.push(comando);
	console.log(logLine + "ok");
}

function handlerMensaje(msg){

	if(msg.author == auth.ID){
		return;
	}

	let d = new Date(Date.now());

	console.log("["+d.toLocaleString()+"]Recibido mensaje de: [" + msg.author.username + "] que dice : [" + msg.content + "]");

	commandArray.forEach( comando => evaluarComando(comando,msg));

}

function evaluarComando(comando,msg){

	let match = msg.content.match(comando.regex);

	if(!match){
		return;
	}

	console.log("\tRespondiendo al mensaje con el comando " + comando.titulo);

	comando.response(msg,match);
}

module.exports.commandArray   = commandArray;
module.exports.handlerMensaje = handlerMensaje;