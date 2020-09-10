module.exports = {
  name: 'avatar',
  description: 'Gets avatar links of tagged users.',
  execute(message, args) {
    if (message.mentions.users.size === 0)  {
      return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({format: "png", dynamic: true})}>`);
    }
    const avatarList = message.mentions.users.map(user => `${user.username}'s avatar: <${user.displayAvatarURL({format: "png", dynamic: true})}>`);
    message.channel.send(avatarList);
  }
}