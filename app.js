const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./config.json"));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login(config.token);