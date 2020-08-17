//Dependencias
const Discord  = require('discord.js');
const auth     = require("./auth.json");
const comandos = require("./comandos.js");

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', comandos.handlerMensaje);

client.login(auth.token);

module.exports = {
	"bot":      client,
	"comandos": comandos
}