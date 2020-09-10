module.exports = {
  name: 'server',
  description: 'Gets server name and member count.',
  execute(message, args) {
    message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
}