const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = "-";
const low = require('lowdb')
const FileSync = require("lowdb/adapters/fileSync")

const adapter = new FileSync("database.json");
const dp = low(adapter);
db.defaults({ histoire: [], xp: []}).write

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
            var msgauthor = message.author.id;

    if(message.author.bot)return;
    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp : 1}).write();

    }else{
      var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
      console.log(userxpdb);
      var userxp = object.values(userxpdb)
      console.log(userxp)
      console.log('xp:  ${userxp[1]}')
      db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();

if (message.content === PREFIX + "xp"){
  var xp = db.get("xp").filter({user: msgauthor}).find("xp").value()
  var xpfinal = object.values(xp);
  var xp_embed = new Discord.RichEmbed()
  .setTitle('stat des xp de ${message.getauthor.username}')
  .setColor('#F4D03F')
  .setDescription('Affichage des xp')
  .addField("XP:", '${xpfinal[1]} xp')
  .setFooter("Voilà :p ")
  message.channel.send({embed: xp_embed});  
}

    }

          }
     }
});

bot.login(process.env.TOKEN);
