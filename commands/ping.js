module.exports = {
  name: 'ping',
  description: 'Test bot function. Should reply with "Pong."',
  execute(message, args) {
    message.channel.send('Pong.')
  }
}