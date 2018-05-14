//const botconfig = require("./botconfig.json");
//const bot = new Discord.Client({disableEveryone: true});
//bot.on("ready", async () => {
//  console.log(`${bot.user.username} in online`);
//});

//bot.login(botconfig.token);


const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDQ0ODAwNjUzMDM1MDQ0ODY1.DdhRtg.EPN_ggOT5Z9-lhAWCuSQWdLrfNs';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDQ0ODAwNjUzMDM1MDQ0ODY1.DdhRtg.EPN_ggOT5Z9-lhAWCuSQWdLrfNs');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === 'mabar') {
    msg.reply('Kuy lah masa diem diem bae!');
  }
});

client.on('message', msg => {
  if (msg.content === 'eta') {
    msg.reply('eta!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sayidal') {
    msg.reply('Amin Lagi..... SYEKHHHHHH!');
  }
});

client.on('message', message => {
  if (message.content === 'rhana') {
    message.channel.send('Goceng sia');
  }
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Assalamualaikum wa Mabar teu, ${member}`);
});
