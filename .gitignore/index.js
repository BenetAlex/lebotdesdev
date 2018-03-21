const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = "-";

  bot.on('guildMemberAdd', member => {
  bot.channels.get  ("423910982373343233").send("salut à "+ member.displayName + "  Sur le serveur Dev");
  bot.channels.get ("423910982373343233").send("id :" + member.id)
  member.createDM().then(channel => {
    return channel.send('bvn sur les dev ' + member.displayName)
  }).catch(console.error)
 
})
bot.on('ready', () => {
  
  console.log("Je suis connecté !")
  bot.channels.get("424561776902930452").send("Je suis ready!");
})
bot.on('message', message => {
  if (message.content[0] === PREFIX) {
    if (message.content === "-slt") {
      message.channel.send("salut mon pote");
      bot.channels.get  ("424561776902930452").send("Commande de : "+ message.author.createdAt);
      bot.channels.get  ("424561776902930452").send("Commande de : "+ message.author.username);
          }
    if (message.content === "-msgp") {
            message.author.createDM().then(channel =>{
              channel.send("test message private")
            })
              }
     }
});

bot.login(process.env.TOKEN);
