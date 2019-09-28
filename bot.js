const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("627452206626504705")
setInterval(function() {
channel.send(`w5445454545`);
}, 100000000)
})

client2.on("ready", () => {
let channel =     client.channels.get("627452206626504705")
setInterval(function() {
channel.send(`w5445454545`);
}, 100000000)
})


client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN2);
