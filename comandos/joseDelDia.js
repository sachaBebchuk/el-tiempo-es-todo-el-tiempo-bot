const fs = require('fs');

let dirFrases = "./comandos/data/joseDelDia.json";
let dirUltimoJose = "./comandos/data/ultimoJose.json";
let joseDeHoy = null;
let fechaUltimoJose = null;
let frases;

fs.readFile(dirFrases, (err, data) => {

	let ok = true;

	if(err){
		console.log(err);
		ok = false;
	}
	else{

		frases = JSON.parse(data);

		if(!Array.isArray(frases)){
			ok = false;
		}
	}

	if(ok){
		fetchJoseDelDia();
	}
	else{
		
		frases = [];
		
		console.log("No se cargaron frases");

		joseDeHoy = "";

		fechaUltimoJose = Date.now();
		fechaUltimoJose.setHours(0,0,0,0);

		guardarJoseDeHoy();
	}

});

function fetchJoseDelDia(){

	fs.readFile(dirUltimoJose, (err, data) => {

		if(err){
			console.log("No se encontro ultimo jose del dia");
		}
		else{
			let objUltimoJose = JSON.parse(data);

			fechaUltimoJose = objUltimoJose.fechaUltimoJose;
			joseDeHoy = objUltimoJose.joseDeHoy;
		}

		actualizarJoseDeHoy();
	});
}

function actualizarJoseDeHoy(){

	let hoy = new Date(Date.now());
	hoy.setHours(0,0,0,0);

	if(hoy == fechaUltimoJose){
		return;
	}
		
	let fraseIndex;
	
	do{
		fraseIndex = Math.floor(Math.random() * Math.floor(frases.length));
	}while(joseDeHoy == frases[fraseIndex]);

	joseDeHoy = frases[fraseIndex];

	fechaUltimoJose = hoy;

	console.log("El jose de hoy es: " + joseDeHoy);

	guardarJoseDeHoy();

}

function guardarJoseDeHoy(){

	let dataJoseDeHoy = {
		"fechaUltimoJose": fechaUltimoJose,
		"joseDeHoy": joseDeHoy
	};

	fs.writeFile(dirUltimoJose, JSON.stringify(dataJoseDeHoy), err => {
		if(err){
			console.log("Error al guardar jose de hoy");
		}
	});
}

function nuevoJoseDelDia(msg,match){

	frases.push(match[1]);

	let callback = function(err){
		if(err){
			console.log(err);
			msg.reply("Error al agregar frase");
		}
		else{
			msg.reply("Agrego el jose del dia numero: " + (frases.length - 1));
		}
	}

	guardarFrases(callback);
}

function joseDelDia(msg){
	msg.reply("el jose del dia es: \n" + joseDeHoy);
}

function todosLosJoseses(msg){
	
	let respuesta = "";

	if(frases.length == 0){
		msg.reply("No hay joseses )):");
		return;
	}

	for(var i = 0; i < frases.length; i++){
		respuesta += i + " - " + frases[i] + "\n";
	}

	respuesta = "```" + respuesta + "```";

	msg.reply(respuesta);
}

function mateAlJose(msg,match){

	let indexAMatar = parseInt(match[1]);

	if(indexAMatar < 0 || indexAMatar >= frases.length){

		msg.reply("Ese no vale, solamente tengo hasta el: " + (frases.length - 1));

		return;
	}

	let nuevasFrases = [];
	let viejasFrases = frases;

	frases.forEach( (frase, index) => {
		if(index != indexAMatar){
			nuevasFrases.push(frase);
		}
	});

	frases = nuevasFrases;

	let callback = function(err){
		if(err){
			console.log(err);
			msg.reply("Error al borrar frase");
			frases = viejasFrases;
		}
		else{
			msg.reply("Jose matado con exito, ahora solo quedan " + frases.length);
		}
	}

	guardarFrases(callback);
}

function guardarFrases(callback){
	fs.writeFile(dirFrases, JSON.stringify(frases),callback);
}

module.exports = [
	{
		regex:    /^nuevo jose del dia (.*)$/,
		titulo:   "nuevo jose del dia",
		response: nuevoJoseDelDia
	},
	{
		regex:    /^deme el jose del dia$/,
		titulo:   "jose del dia",
		response: joseDelDia
	},
	{
		regex:    /^deme todos los joseses de los dias$/,
		titulo:   "todos los joseses",
		response: todosLosJoseses
	},
	{
		regex:    /^mate al jose ([1-9]*)$/,
		titulo:   "mate al jose",
		response: mateAlJose
	}
];