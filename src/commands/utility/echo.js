export default {
  name: 'echo',
  description: 'Echo the message!',
  args: true,
  usage: '<command-name>',
  chatAction: 'typing',
  execute(ctx, args, commands) {
    ctx.reply(args.join(" "));
  }, 
}