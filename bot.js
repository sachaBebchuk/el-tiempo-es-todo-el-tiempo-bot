//Dependencias
const Discord  = require('discord.js');
const auth     = require("./auth.json");
const comandos = require("./comandos.js");

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

	if(msg.author == auth.ID){
		return;
	}

	console.log("Recibido mensaje de: [" + msg.author.username + "] que dice : [" + msg.content + "]");

	for(let i = 0; i < comandos.length; i++){
		evaluarComando(comandos[i],msg);
	}

});

function evaluarComando(comando,msg){

	if(!msg.content.match(comando.regex)){
		return;
	}

	console.log("\tRespondiendo al mensaje con el comando " + comando.titulo + "\n");

	comando.response(msg);
}

client.login(auth.token);