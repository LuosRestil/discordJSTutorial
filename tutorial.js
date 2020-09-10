require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const {prefix, generalChannelId} = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
  let now = new Date();
  client.channels.cache.get(generalChannelId).send(`The time is: ${now.toLocaleTimeString('en-US')}`);
  fs.writeFile("/Users/luosrestil/Desktop/working.txt", `${new Date().toLocaleTimeString()}: working`, {flag: "a"}, (err) => {
    if (err) {
      console.error(err);
    }
  })
  setTimeout(() => client.destroy(), 3000);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);
  
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!')
  }
})


client.login(process.env.TOKEN);
