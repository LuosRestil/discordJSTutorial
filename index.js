require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
  
  // client.destroy();
});

client.on('message', message => {
  if (message.content === '!marco') {
    message.channel.send("Polo.");
  }
})

// bot.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('pong');
//     msg.channel.send('pong');

//   } else if (msg.content.startsWith('!kick')) {
//     if (msg.mentions.users.size) {
//       const taggedUser = msg.mentions.users.first();
//       msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
//     } else {
//       msg.reply('Please tag a valid user!');
//     }
//   }
// });

client.login(process.env.TOKEN);
