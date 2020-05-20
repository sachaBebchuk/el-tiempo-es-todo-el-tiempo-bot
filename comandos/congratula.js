const enviarDM = require("../enviarDM.js");

module.exports.regex = /^(felicita)|(congratula) a <@[\!]?([0-9]*)> (.*)$/i;

module.exports.titulo = "congratulaciones";

module.exports.response = function(msg,match){

	let snowflake = match[3];
	let congratulacion = match[4];

	enviarDM(msg.client.users,snowflake,"Congratulaciones " + congratulacion);

	msg.reply("Mensaje enviado");
}