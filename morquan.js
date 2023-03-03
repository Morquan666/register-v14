global.__baseDir = __dirname
const main = require("./function/login")
const client = main.getClient()
const moment = require("moment")
const Discord = require("discord.js")
const { Collection } = require("discord.js");
const Handle = require('./function/Handler.js')
const { token, url, setting } = require("./settings.json")
const wm = new Map();

client.channelLimit = new Map();
client.commands = new Collection();
client.aliases = new Collection();

let chaos = new Handle()
chaos.GetEvents(client)
chaos.GetCommands(client)
main.botLogin(token)
main.connectMongo(url);

client.createBar =  async (current, required, total) => {
    let percentage = (100 * current) / required;
    percentage = percentage > 100 ? 100 : percentage;
    const Fill = `${client.emojis.cache.find(chaos => chaos.name === "fill")}`;
    const Empty = `${client.emojis.cache.find(chaos => chaos.name === "empty")}`;
    let str = "";
    const progress = Math.round((percentage / 100) * total);
    str += percentage > 0 ? `${client.emojis.cache.find(chaos => chaos.name === "fillstart")}` : `${client.emojis.cache.find(chaos => chaos.name === "empty")}`;
    str += Fill.repeat(progress);
    str += Empty.repeat(8 - progress);
    str += percentage === 100 ? `${client.emojis.cache.find(chaos => chaos.name === "fillend")}` : `${client.emojis.cache.find(chaos => chaos.name === "emptyend")}` ;
    return str; 
    }
    var prefix = "."

    client.on("message", async message => {
        if (message.content === prefix + "fakekatıl") {
          // . yerine prefixi yaz
          client.emit(
            "guildMemberAdd",
            message.member || (await message.guild.fetchMember(message.author))
          );
        }
      });
	  
	  client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const tag = '⚝'
  const sunucu = '786251968808353822'
  const kanal = '1064490814958481458'
  const rol = '1064490647073071187'

  try {

  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${newUser} ${tag} Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim \n Aileye Hoşgeldin Dostum!`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser.username}, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Sana Verdim!`)
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("RED").setDescription(`${newUser} ${tag} Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam **${newUser.username}**, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Senden Aldım!`)
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});




	  client.on("ready", () => {
    client.user.setActivity("#2016");
    console.log(client.user.tag)
})