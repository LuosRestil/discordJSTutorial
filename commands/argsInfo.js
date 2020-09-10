module.exports = {
  name: 'args-info',
  args: true,
  description: 'Gets info on command arguments.',
  execute(message, args) {
    if (args.length === 0) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    } else if (args[0] === 'foo') {
      return message.channel.send('bar');
    } else {
      message.channel.send(`Arguments: [${args.join(", ")}]`);
    }
  }
}