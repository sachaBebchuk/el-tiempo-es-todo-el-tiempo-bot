const fs = require('fs');

let controladoresDir = './controladores/';
let files = fs.readdirSync(controladoresDir);
let controladores = [];

files.forEach( file => {

	let controlador = require(controladoresDir + file);

	controladores.push(controlador);
});

function cargar(server){
	controladores.forEach( controlador => {
		server[controlador.metodo](controlador.ruta,controlador.controlador);
	});
}

module.exports = {
	"cargar": cargar
}