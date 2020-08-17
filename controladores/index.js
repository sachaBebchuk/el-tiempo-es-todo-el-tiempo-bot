let bot = require("../bot.js");

function controlador(req, res){

	let servers = [];

	bot.bot.guilds.cache.forEach(guild => {
		servers.push(guild.name);
	});

	let data = { "servers": servers, "diasSinPegar": 0 };

	res.render('index.pug', data);
}

module.exports = {
	"metodo": "get",
	"ruta": "/",
	"controlador": controlador
}