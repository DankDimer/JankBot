const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login("NDUwMDM2Mjc0MjQ2NDUxMjIx.DetYxw.XwEk8MUqQi7YAXaVq1NPI0GrksU");

bot.on("ready", function() {
    console.log("JankBot is ready!");
});

bot.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "kick":
            if (!args[1]) {
                message.reply("You need argument: `name`")
            }
            break;
    }
})
