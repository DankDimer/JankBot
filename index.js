const Discord = requre("discord.js");
const bot = new Discord.Client();

bot.login("NDUwMDM2Mjc0MjQ2NDUxMjIx.DetYxw.XwEk8MUqQi7YAXaVq1NPI0GrksU");

bot.on("ready", function() {
    console.log("JankBot is ready!");
});

bot.on("message", message => {
    if (message.content === "kill me") {
        message.reply("Here are the nearest bridges:");
    }
})
