let fs = require('fs');
let comandosDir = './comandos/';
let files = fs.readdirSync(comandosDir);

let commandArray = [];

files.forEach( file => {

	if(file == "data"){
		return;
	}

	let comandos = require(comandosDir + file);

	if(Array.isArray(comandos)){
		comandos.forEach( comando => {
			agregarComando(comando);
		});
	}
	else{
		agregarComando(comandos);
	}

});

function agregarComando(comando){
	commandArray.push(comando);
	console.log("Cargando comando: "+ comando.titulo);
}

module.exports = commandArray;