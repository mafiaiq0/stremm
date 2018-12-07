const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";
var adminprefix = '.'

const developers = ["353708472690540564","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅}**`)
  } else 
     if (message.content === (adminprefix + "lea")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'na')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**✅** `)
} else
if (message.content.startsWith(adminprefix + 'av')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**✅**`);
}
});


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
