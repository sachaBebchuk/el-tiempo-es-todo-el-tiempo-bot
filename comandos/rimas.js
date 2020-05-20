function devolverRima(msg,matches,respuestaIngeniosa){
	msg.reply(respuestaIngeniosa);
}

module.exports = [
	{
		"regex": /(1\b)|(uno\b)/i,
		"titulo": "El uno",
		"response": function(msg,matches){ devolverRima(msg,matches,"Cuatro ocho ocho"); }
	},
	{
		"regex": /(3\b)|(tres\b)/i,
		"titulo": "El tres",
		"response": function(msg,matches){ devolverRima(msg,matches,"te la pongo al reves"); }
	},
	{
		"regex": /(11\b)|(once\b)/i,
		"titulo": "El once",
		"response": function(msg,matches){ devolverRima(msg,matches,"el culo de bronce"); }
	},
	{
		"regex": /(8\b)|(ocho\b)/i,
		"titulo": "El ocho",
		"response": function(msg,matches){ devolverRima(msg,matches,"el culo te abrocho"); }
	},
	{
		"regex": /(9\b)|(nueve\b)/i,
		"titulo": "El nueve",
		"response": function(msg,matches){ devolverRima(msg,matches,"el culo te llueve"); }
	},
	{
		"regex": /(5\b)|(cinco\b)/i,
		"titulo": "El cinco",
		"response": function(msg,matches){ devolverRima(msg,matches,"por el culo te la hinco"); }
	},
	{
		"regex": /69\b/i,
		"titulo": "69",
		"response": function(msg,matches){ devolverRima(msg,matches,"nice"); }
	},
	{
		"regex": /\b((tengo hambre)|(que hambre)|(me quede con hambre))\b/i,
		"titulo": "comete esta",
		"response": function(msg,matches){ devolverRima(msg,matches,"comete esta"); }
	}
]