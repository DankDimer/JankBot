const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login("NDUwMDM2Mjc0MjQ2NDUxMjIx.DetYxw.XwEk8MUqQi7YAXaVq1NPI0GrksU");
bot.on('ready', () => {

  })
bot.on("ready", function() {
    console.log("JankBot is ready!");

});

bot.on("message", message => {
    if (message.content === "kill me") {
        message.reply("Here are the nearest bridges: https://www.google.com/maps/search/bridge/");
    }
    if (message.content === "this server sucks") {
        message.reply("And you swallow, dipshit.");
    }
    if (message.content === "daddy") {
        message.reply("I'm daddy you fool.");
    }
    if (message.content === "Knoddy is cool.") {
        message.reply("True.");
    }
    if (message.content === "DankDimer sucks.") {
        message.reply("Fuck you.");
    }
    if (message.content === "DankDimer is cool.") {
        message.reply("True.");
    }
    if (message.content === "Knoddy sucks.") {
        message.reply("Fuck you.");
    }
})
