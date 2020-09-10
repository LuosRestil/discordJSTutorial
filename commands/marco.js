module.exports = {
  name: 'marco',
  description: 'Test bot function. Should reply with "Polo."',
  execute(message, args) {
    message.channel.send('Polo.')
  }
}