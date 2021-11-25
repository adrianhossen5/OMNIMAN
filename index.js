const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fetch = require('node-fetch');

require('dotenv').config()
client.on('message', gotMessage);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  client.on('messageCreate', message => {

    if (message.content === '!plshelp') 
    message.channel.send('!Omniman for a treat\n!ight for ight bet\n!takemicheeks for ass\n!killua for killua\n!daira for short midget\n!milk for almond milk tiddy udders\n!pls [parameter] for a gif you want\nUse !quote for a random quote:D\n');

    if (message.content === '!omniman') 
      message.channel.send('https://tenor.com/view/invincible-omniman-twerk-thicc-booty-gif-22139528');
  
    if (message.content === '!aight')
      message.channel.send('https://tenor.com/view/aight-cool-beans-fasho-oh-gif-15793623');
    
    if (message.content === ('!takemicheeks')) 
      message.channel.send('https://tenor.com/view/tokyo-revengers-takemichi-takemitchy-takemichi-ass-gif-23078919');
  
    if (message.content === ('!killua')) 
      message.channel.send('https://tenor.com/view/killua-killua-zoldyck-head-shake-shrug-hunter-x-hunter-gif-16776768');
   
    if (message.content === ('!milk')) 
      message.channel.send('https://tenor.com/view/hannahhillam-almondmilk-gif-14949930');
  
  });

async function gotMessage(msg){

  const tokens = msg.content.split(' ');
  console.log(msg.content);
  let keywords = 'keywords';
  if (tokens[0] === '!pls'){

    if(tokens.length > 1){

      keywords = tokens.slice(1, tokens.length).join(" ");

    }

    const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`
    const response = await fetch(url);
    const json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.reply(json.results[index].url)
    
  }

  console.log(msg.content);
  if(msg.content === ("!quote")){

    const res = await fetch('https://api.quotable.io/random')
    const j = await res.json()
    await msg.reply(j['content']);

  }

}

client.login(process.env.TOKEN);