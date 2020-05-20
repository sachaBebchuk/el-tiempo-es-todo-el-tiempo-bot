let arrayNombres = require("./data/dataNombres.json");

let exp = [];

arrayNombres.forEach( datosNombre => {

	let objExport = {};

	objExport.regex = new RegExp( "\\." + datosNombre.nombre, "i" );

	objExport.titulo = datosNombre.nombre;

	objExport.response = msg => {

		let indexRespuesta =  Math.floor(Math.random() * Math.floor(datosNombre.respuestas.length));
		let respuesta = datosNombre.respuestas[indexRespuesta];

		msg.reply(respuesta);
	};

	exp.push(objExport);

});

module.exports = exp;