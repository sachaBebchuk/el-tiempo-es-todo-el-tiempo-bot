const Discord = require("Discord.js");

module.exports.regex = /\.cita/;

module.exports.titulo = "cita";

module.exports.response = function(msg){

    getRandomPin(msg.channel.messages).then( pinnedMessage =>{

        if(pinnedMessage == undefined){
            msg.reply("No hay pines");
        }
        else{
            replyPinnedMessage(msg,pinnedMessage);
        }

    });
}

function getRandomPin(messages){
    return messages.fetchPinned(true)
        .then( messages =>{

            let keys = Array.from(messages.keys());

            let messageIndex = Math.floor(Math.random() * Math.floor(keys.length));

            let message = messages.get(keys[messageIndex]);

            return message;
    });
}

function replyPinnedMessage(msg,pinnedMessage){

    let reply = "como <@" + pinnedMessage.author.id + "> bien dijo una vez: "  + pinnedMessage.content;

    if(pinnedMessage.attachments.size != 0){

        pinnedMessage.attachments.forEach( attachment => {
            reply += "\n" + attachment.url;
        });
    }

    msg.reply(reply);    
}