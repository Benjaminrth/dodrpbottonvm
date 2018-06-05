exports.run = (client, message, args) => {
  let toStrike = message.mentions.members.first();
  if(!toStrike) return message.reply("User not found or specified!");
          if(args[0] === '1'){
          let strikeRole1 = message.guild.roles.find('name', "Strike 1");
          toStrike.addRole(strikeRole1)
          message.reply(`${toStrike.user} Was Given Strike 1!`)
          }
          if(args[0] === '2'){
          let strikeRole2 = message.guild.roles.find('name', "Strike 2");
          toStrike.addRole(strikeRole2)          
          message.reply(`${toStrike.user} Was Given Strike 2!`)
          }
          if(args[0] === '3'){
          let strikeRole2 = message.guild.roles.find('name', "Strike 2");
          toStrike.addRole(strikeRole3)
          message.reply(`${toStrike.user} Was Given Strike 3!`)
          }
  }
  
exports.conf = {
  aliases: [],
  permLevel: 2
};
    
exports.help = {
  name: 'Strike',
  description: 'Gives Member Strike Role',
  usage: 'Strike [Number 1 to 3]'
}