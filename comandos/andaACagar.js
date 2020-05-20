const enviarDM = require("../enviarDM.js");

module.exports.regex = /manda a cagar a <@[\!]?([0-9]*)>/i;

module.exports.titulo = "anda a cagar";

module.exports.response = function(msg,match){

	let snowflake = match[1];

	enviarDM(msg.client.users,snowflake,"Anda a cagar");

	msg.reply("Mensaje enviado");
}