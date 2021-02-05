const Discord = require('discord.js');
const { prototype } = require('events');
const client = new Discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./config.json"));
Array.prototype.random = function(){ return this[Math.floor(Math.random() * this.length)]}
const meigen = ["社会的に殺される", "おらいぐよ！！！！", "IMIちゃん"];


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply(meigen.random());
        msg.react('🤔')
        msg.pin({ reason: 'important' });
    }
});

client.login(config.token);