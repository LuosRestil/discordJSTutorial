module.exports = {
  name: 'kick',
  description: 'Simulates request to kick tagged user.',
  execute(message, args) {
    if (message.mentions.users.size === 0) {
      return message.reply('you need to tag a user in order to kick them!')
    }
    const taggedUser = message.mentions.users.first();
    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
  }
}