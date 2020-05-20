module.exports = [
	{
		"regex": /(1\b)|(uno\b)/,
		"titulo": "El uno",
		"response": function(msg){
			msg.reply("Cuatro ocho ocho");
		}
	},
	{
		"regex": /(3\b)|(tres\b)/,
		"titulo": "El tres",
		"response": function(msg){
			msg.reply("te la pongo al reves");
		}
	},
	{
		"regex": /(11\b)|(once\b)/,
		"titulo": "El once",
		"response": function(msg){
		  	msg.reply("el culo de bronce");
		}
	},
	{
		"regex": /(8\b)|(ocho\b)/,
		"titulo": "El ocho",
		"response": function(msg){
		  	msg.reply("el culo te abrocho");
		}
	},
	{
		"regex": /(9\b)|(nueve\b)/,
		"titulo": "El nueve",
		"response": function(msg){
		  	msg.reply("el culo te llueve");
		}
	},
	{
		"regex": /(5\b)|(cinco\b)/,
		"titulo": "El cinco",
		"response": function(mensaje){
		  	msg.reply("por el culo te la hinco");
		}
	},
	{
		"regex": /69\b/,
		"titulo": "69",
		"response": function(msg){
		  	msg.reply("nice");
		}
	}
]