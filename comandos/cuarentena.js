
module.exports.regex = /cuantos dias de cuarentena pasaron/;

module.exports.titulo = "cuantos dias de cuarentena";

module.exports.response = function(msg){

	let hoy = new Date(Date.now());

	let primerDiaCuarentena = new Date("03/20/2020");

	let diffTime = Math.abs(hoy - primerDiaCuarentena);

	let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	msg.reply("son " + diffDays + " dias de cuarentena");
}