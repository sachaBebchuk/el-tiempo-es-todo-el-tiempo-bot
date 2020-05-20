let fs = require('fs');

let nuevoJoseRegex = /(nuevo jose del dia )(.*)/;
let mateAlJoseRegex = /^(mate al jose )([1-9]*)$/;

let dirFrases = "./comandos/data/joseDelDia.json";

let frases;

fs.readFile(dirFrases, (err, data) => {

	if(err){
		console.log(err);
		console.log("No se cargaron frases");
		frases = [];
		return;
	}

	frases = JSON.parse(data);

	if(Array.isArray(comandos)){
		frases = [];
		console.log("No se cargaron frases");
	}
});

function nuevoJoseDelDia(msg){

	let matches = msg.content.match(nuevoJoseRegex);

	frases.push(matches[2]);

	let callback = function(err){
		if(err){
			console.log(err);
			msg.reply("Error al agregar frase");
		}
		else{
			msg.reply("Agrego el jose del dia numero: " + frases.length);
		}
	}

	guardarFrases(callback);
}

function joseDelDia(msg){

	let fraseIndex = Math.floor(Math.random() * Math.floor(frases.length));
	let frase = frases[fraseIndex];

	msg.reply("el jose del dia es: \n" + frase);
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

function mateAlJose(msg){

	let matches = msg.content.match(mateAlJoseRegex);

	let indexAMatar = parseInt(matches[2]);

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
		regex: nuevoJoseRegex,
		titulo: "nuevo jose del dia",
		response: nuevoJoseDelDia
	},
	{
		regex: /^deme el jose del dia$/,
		titulo: "jose del dia",
		response: joseDelDia
	},
	{
		regex: /^deme todos los joseses de los dias$/,
		titulo: "todos los joseses",
		response: todosLosJoseses
	},
	{
		regex: mateAlJoseRegex,
		titulo: "mate al jose",
		response: mateAlJose
	}
];