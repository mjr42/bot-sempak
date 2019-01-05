//const botconfig = require("./botconfig.json");
//const bot = new Discord.Client({disableEveryone: true});
//bot.on("ready", async () => {
//  console.log(`${bot.user.username} in online`);
//});

//bot.login(botconfig.token);


const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NTMwOTY1OTE2NjQ5OTE0Mzg4.DxHFEg.IcVT7Jy_crFmlHbeF4I_GCD75KI';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTMwOTY1OTE2NjQ5OTE0Mzg4.DxHFEg.IcVT7Jy_crFmlHbeF4I_GCD75KI');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === 'ready') {
    msg.reply('Go!');
  }
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Assalamualaikum wa Mabar teu, ${member}`);
});
