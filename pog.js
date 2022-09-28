const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const doAsync = require('doasync');
const discordTTS = require("discord-tts");

client.once('ready', () => {
	console.log('Pog');
	client.user.setActivity('the British', { type: 'WATCHING' });
  });
  
  
 client.login('OTI2OTQwOTQ3MTgxMzY3MzQ2.GitDs0.9EC1LV6ssdwy_tB9QgmKTOB94t5gADMWfodFjI');
 

client.on('message', async message => {
const split = message.content.trim().split(' ');
const command = split.shift().toLowerCase();
//if(message.guild.id != 758884221200367656) {
if(command === '$t')
{
	const emc = require('earthmc');
	var town = await emc.getTown(split[0]);
	var array = Object.values(town);
	var res = array[2].toString();
	var resCount = res.split(',');
	
	for (let i = 0; i < resCount.length; i++) {
		//var on = emc.getOnlinePlayer(resCount)
		//if(on == true) console.log(o)
	}
	//message.channel.send("Town: " + array[0] + "\n" + "Nation: " + array[1] + "\n" + "Mayor: " + array[5] + "\n" + "Chunks: " + array[4] + "\n" + "Residents: " + array[2]);
	
	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(array[0])
	.setURL('https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + array[12] + '&y=64&z=' + array[13])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Mayor', value: array[5] },
		{ name: 'Nation', value: array[1] },
		{ name: 'Chunks', value: array[4] },
		{ name: 'Public Spawn', value: array[8] },
		{ name: 'Explosions', value: array[9] },
		//{ name: 'Online Residents', value: online },
		{ name: 'Residents [' + resCount.length + ']', value: '`' + array[2] + '`' },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	//const townless = emc.townlessPlayers;
	//message.channel.send(emc.emcData["online"]);
  }

  if(command === '$timerz')
{
  message.channel.send("Aight bruddas lets see what towns we got");
  setInterval(async function() {
	  const emc = require('earthmc');
	const players = split.join(" ");
	console.log("Bruh")
	var array = await emc.getTowns2();
	
	fs.writeFile('latesttowns.txt', '', function (err) {
			if (err) return console.log(err)
			});
		
	fs.writeFile('latestmayors.txt', '', function (err) {
			if (err) return console.log(err)
			});

	for (let i = 0; i < array.length; i++) {
		var arrayi = array[i] 
		var town = Object.values(arrayi);
		var towni = town[0].toString();
		var towni2 = town[1].toString();
		var towni3 = town[2].toString();
		var towni4 = town[3].toString();
		var towni5 = town[4].toString();
		var towni6 = town[5].toString();
		var townSplit = towni.split(',');
		var townSplit2 = towni2.split(',');
		var townSplit3 = towni3.split(',');
		var townSplit4 = towni4.split(',');
		var townSplit5 = towni5.split(',');
		var townSplit6 = towni6.split(',');
		fs.appendFile('latesttowns.txt', townSplit + '\n', function (err) {
		if (err) return console.log(err)
	});
		fs.appendFile('latestmayors.txt', townSplit5 + '\n', function (err) {
		if (err) return console.log(err)
	});
	}
	fs.readFile('current.txt', 'utf8', function(err, current) {
			if (err) {
				console.log(err);
			}
	fs.readFile('latesttowns.txt', 'utf8', function(err, towns) {
			if (err) {
				console.log(err);
			}
	fs.readFile('latestmayors.txt', 'utf8', function(err, mayors) {
			if (err) {
				console.log(err);
			}
			var currentSplit = current.split('\n');
			var mayorsSplit = mayors.split('\n');
			var townsSplit = towns.split('\n');
			console.log(townsSplit)
			
			
			for (let i = 0; i < currentSplit.length; i++) {
				var currentInfo = currentSplit[i].split('|');
				//console.log(currentInfo[0])
				if(!townsSplit.includes(currentInfo[0])) {
					if(!mayorsSplit.includes(currentInfo[4])) {
					const townEmbed = new Discord.MessageEmbed()
					.setColor('#008b8b')
					.setTitle(currentInfo[0] + " has fallen!")
					.setURL('https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + currentInfo[2] + '&y=64&z=' + currentInfo[3])
					.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
					.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
					.addFields(
						{ name: 'Mayor', value: currentInfo[4] },
						{ name: 'Chunks', value: currentInfo[1] },
						{ name: 'Nation', value: currentInfo[5] },
						{ name: 'Location', value: '[' + currentInfo[2] + ', ' + currentInfo[3] + '](https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + currentInfo[2] + '&y=64&z=' + currentInfo[3] + ')' },				
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	const chan = client.channels.cache.get("977708833168306257");
	message.channel.send("<@&977708490938282086>")
	message.channel.send(townEmbed);
				}
			}
			}
			})
			})
			})

	for (let i = 0; i < array.length; i++) {
		var arrayii = array[i] 
		var towni = Object.values(arrayii);
		var town1 = towni[0].toString();
		var town2 = towni[1].toString();
		var town3 = towni[2].toString();
		var town4 = towni[3].toString();
		var towniSplit = town1.split(',');
		var towniSplit2 = town2.split(',');
		var towniSplit3 = town3.split(',');
		var towniSplit4 = town4.split(',');
	}
	
	function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

	await sleep(30000);
	
	console.log("Bruh2")
	
	fs.writeFile('current.txt', '', function (err) {
			if (err) return console.log(err)
			});
		
	for (let i = 0; i < array.length; i++) {
		var arrayii = array[i] 
		var towni = Object.values(arrayii);
		var town1 = towni[0].toString();
		var town2 = towni[1].toString();
		var town3 = towni[2].toString();
		var town4 = towni[3].toString();
		var town5 = towni[4].toString();
		var town6 = towni[5].toString();
		var town7 = towni[6].toString();
		var towniSplit = town1.split(',');
		var towniSplit2 = town2.split(',');
		var towniSplit3 = town3.split(',');
		var towniSplit4 = town4.split(',');
		var towniSplit5 = town5.split(',');
		var towniSplit6 = town6.split(',');
		var towniSplit7 = town7.split(',');
	
		fs.appendFile('current.txt', towniSplit + '|' + towniSplit2 + '|' + towniSplit3 + '|' + towniSplit4 + '|' + towniSplit5 + '|' + towniSplit6 + '|' + towniSplit7 + '\n', function (err) {
			if (err) return console.log(err)
			});
		}
  }, 60000);
 }
  
  fs.readFile('sm.txt', 'utf8', function(err, data) {
			if (err) {
				console.log(err);
			}
		fs.writeFile('sm.txt', '', function (err) {
		if (err) return console.log(err)
	});
    });
	if(command === '$update') {
		const emc = require('earthmc');
	const players = split.join(" ");
	console.log("Bruh")
	var array = await emc.getTowns2();
	
	fs.writeFile('current.txt', '', function (err) {
			if (err) return console.log(err)
			});
		
	for (let i = 0; i < array.length; i++) {
		var arrayii = array[i] 
		var towni = Object.values(arrayii);
		var town1 = towni[0].toString();
		var town2 = towni[1].toString();
		var town3 = towni[2].toString();
		var town4 = towni[3].toString();
		var town5 = towni[4].toString();
		var town6 = towni[5].toString();
		var town7 = towni[6].toString();
		var towniSplit = town1.split(',');
		var towniSplit2 = town2.split(',');
		var towniSplit3 = town3.split(',');
		var towniSplit4 = town4.split(',');
		var towniSplit5 = town5.split(',');
		var towniSplit6 = town6.split(',');
		var towniSplit7 = town7.split(',');
	
		fs.appendFile('current.txt', towniSplit + '|' + towniSplit2 + '|' + towniSplit3 + '|' + towniSplit4 + '|' + towniSplit5 + '|' + towniSplit6 + '|' + towniSplit7 + '\n', function (err) {
			if (err) return console.log(err)
			});
		}
		message.channel.send("Town list updated!")
	}
  if(command === '$fallen') {
	const emc = require('earthmc');
	const players = split.join(" ");
	console.log("Bruh")
	var array = await emc.getTowns2();
	
	fs.writeFile('latesttowns.txt', '', function (err) {
			if (err) return console.log(err)
			});
		
		fs.writeFile('latestmayors.txt', '', function (err) {
			if (err) return console.log(err)
			});

	for (let i = 0; i < array.length; i++) {
		var arrayi = array[i] 
		var town = Object.values(arrayi);
		var towni = town[0].toString();
		var towni2 = town[1].toString();
		var towni3 = town[2].toString();
		var towni4 = town[3].toString();
		var towni5 = town[4].toString();
		var towni6 = town[5].toString();
		var townSplit = towni.split(',');
		var townSplit2 = towni2.split(',');
		var townSplit3 = towni3.split(',');
		var townSplit4 = towni4.split(',');
		var townSplit5 = towni5.split(',');
		var townSplit6 = towni6.split(',');
		fs.appendFile('latesttowns.txt', townSplit + '\n', function (err) {
		if (err) return console.log(err)
	});

		fs.appendFile('latestmayors.txt', townSplit5 + '\n', function (err) {
		if (err) return console.log(err)
	});
	}
	fs.readFile('current.txt', 'utf8', function(err, current) {
			if (err) {
				console.log(err);
			}
	fs.readFile('latesttowns.txt', 'utf8', function(err, towns) {
			if (err) {
				console.log(err);
			}
	fs.readFile('latestmayors.txt', 'utf8', function(err, mayors) {
			if (err) {
				console.log(err);
			}
			var currentSplit = current.split('\n');
			var townsSplit = towns.split('\n');
			var mayorsSplit = mayors.split('\n');
			console.log(townsSplit)
			
			message.channel.send("Searching for fallen towns...")
			
			for (let i = 0; i < currentSplit.length; i++) {
				var currentInfo = currentSplit[i].split('|');
				//console.log(currentInfo[0])
				if(!townsSplit.includes(currentInfo[0])) {
					if(!mayorsSplit.includes(currentInfo[4])) {
					const townEmbed = new Discord.MessageEmbed()
					.setColor('#008b8b')
					.setTitle(currentInfo[0] + " has fallen!")
					.setURL('https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + currentInfo[2] + '&y=64&z=' + currentInfo[3])
					.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
					.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
					.addFields(
						{ name: 'Chunks', value: currentInfo[1] },
						{ name: 'Nation', value: currentInfo[5] },
						{ name: 'Location', value: '[' + currentInfo[2] + ', ' + currentInfo[3] + '](https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + currentInfo[2] + '&y=64&z=' + currentInfo[3] + ')' },				
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	const chan = client.channels.cache.get("195668419805315072");
	message.channel.send(townEmbed);
				}
				}
			}
			message.channel.send("If no towns were posted by now then nothing fell or the bot is broken")
			})
			})
			})

	for (let i = 0; i < array.length; i++) {
		var arrayii = array[i] 
		var towni = Object.values(arrayii);
		var town1 = towni[0].toString();
		var town2 = towni[1].toString();
		var town3 = towni[2].toString();
		var town4 = towni[3].toString();
		var towniSplit = town1.split(',');
		var towniSplit2 = town2.split(',');
		var towniSplit3 = town3.split(',');
		var towniSplit4 = town4.split(',');
	}
	//const townless = emc.townlessPlayers;
	//message.channel.send(emc.emcData["online"]);
  }

    if(command === '$allies') {
  message.channel.send("Aight bruddas lets see what nations we got");
  setInterval(async function() {
	const emc = require('earthmc');
	const players = split.join(" ");
	var online = await emc.getOnlinePlayers();
	console.log('Ayo');
	
	fs.readFile('irelandneeds.txt', 'utf8', function(err, baffin) {
			if (err) {
				console.log(err);
			}
			
	var baffinSplit = baffin.split('\n');
	
	for (let i = 0; i < baffinSplit.length; i++) {
		var baffinInfo = baffinSplit[i].split('|');
		if(online.includes(baffinInfo[1])) {
					const townEmbed = new Discord.MessageEmbed()
					.setColor('#008b8b')
					.setTitle("Ally " + baffinInfo[0] + " Yo!")
					.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
					.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
					.addFields(
						{ name: 'Leader', value: baffinInfo[1] },				
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	const chan = client.channels.cache.get("195668419805315072");
	message.channel.send(townEmbed);
	}
	}
	})
	function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
	await sleep(75000);
	
	console.log('Ayo2');
	
	var nation = await emc.getNations();
	
	fs.writeFile('irelandneeds.txt', '', function (err) {
			if (err) return console.log(err)
			});
	
	fs.readFile('allies.txt', 'utf8', function(err, allies) {
			if (err) {
				console.log(err);
			}
	for (let i = 0; i < nation.length; i++) {
		var array = Object.values(nation[i]);
			var alliesSplit = allies.split('\n');
			if(!alliesSplit.includes(array[0])) {
				
				fs.appendFile('irelandneeds.txt', array[0] + '|' + array[3] + '\n', function (err) {
			if (err) return console.log(err)
			});
		
				}
				}
				})
	}, 150000);
	}

if(command === '$explosion') {
	const emc = require('earthmc');
	const players = split.join(" ");
	console.log("Bruh")
	var array = await emc.getTowns2();

	fs.readFile('current.txt', 'utf8', function(err, current) {
			if (err) {
				console.log(err);
			}
			var currentSplit = current.split('\n');
			
			for (let i = 0; i < currentSplit.length; i++) {
				var currentInfo = currentSplit[i].split('|');
				//console.log(currentInfo[0])
					if(currentInfo[6] == 'true') {
						if(!currentInfo[4].startsWith('NPC')) {
					const townEmbed = new Discord.MessageEmbed()
					.setColor('#008b8b')
					.setTitle(currentInfo[0] + " has explosions on!")
					.setURL('https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + currentInfo[2] + '&y=64&z=' + currentInfo[3])
					.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
					.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
					.addFields(
						{ name: 'Chunks', value: currentInfo[1] },
						{ name: 'Nation', value: currentInfo[5] },
						{ name: 'Location', value: '[' + currentInfo[2] + ', ' + currentInfo[3] + '](https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + currentInfo[2] + '&y=64&z=' + currentInfo[3] + ')' },				
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	const chan = client.channels.cache.get("195668419805315072");
	message.channel.send(townEmbed);
			}
  }
  }
  message.channel.send("done");
})
}

const vc = client.channels.cache.get("974694199993720892")

if(command === '$join') {
message.member.voice.channel.join()
}

if(command === '$play') {
const ytdl = require('ytdl-core');

message.member.voice.channel.join().then(connection => {
	const stream = ytdl(split[0], { filter: 'audioonly' });
	const dispatcher = connection.play(stream);
	
	dispatcher.on('finish', () => message.channel.send('im gay'));
})
}

//if(command === '$tts')
//{
//		const broadcast = client.voice.createBroadcast();
//
//vc.join().then(connection => {
//	broadcast.play(discordTTS.getVoiceStream("yigga yigga"));
//        const dispatcher=connection.play(broadcast);
//	
//	dispatcher.on('finish', () => message.channel.send('im gay'));
//})
//}

  if(command === '$pop')
{
	const emc = require('earthmc');
	const players = split.join(" ");
	var nation = await emc.getNation(split[0]).catch(e => { console.log(e) }).then(nation => { return nation });
	var array = Object.values(nation);
	var res = array[2].toString();
	var resCount = res.split(',');
	//message.channel.send("Town: " + array[0] + "\n" + "Nation: " + array[1] + "\n" + "Mayor: " + array[5] + "\n" + "Chunks: " + array[4] + "\n" + "Residents: " + array[2]);
	
	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle('Residents in ' + array[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://crusade-craft.com')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < resCount.length; i++) {
		var resCount2 = resCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		townEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(townEmbed);
  }
  
  if(command === '$chunks')
{
	const emc = require('earthmc');
	const players = split.join(" ");
	var nation = await emc.getNation(split[0]).catch(e => { console.log(e) }).then(nation => { return nation });
	var array = Object.values(nation);
	var res = array[2].toString();
	var resCount = res.split(',');
	//message.channel.send("Town: " + array[0] + "\n" + "Nation: " + array[1] + "\n" + "Mayor: " + array[5] + "\n" + "Chunks: " + array[4] + "\n" + "Residents: " + array[2]);
	
	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle('Chunks in ' + array[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://crusade-craft.com')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < resCount.length; i++) {
		var resCount2 = resCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[4].toString();
		var resCount3 = res.split(',');
		townEmbed.addField(array[0], '`' + resCount3 + '`' )
		console.log(resCount3)
	}
	message.channel.send(townEmbed);
  }
  
  if(command === '$census')
{
	const emc = require('earthmc');
	const players = split.join(" ");
	var nation = await emc.getNation('Quebec').catch(e => { console.log(e) }).then(nation => { return nation });
	var baffin = await emc.getNation('Baffin').catch(e => { console.log(e) }).then(nation => { return nation });
	var vinland = await emc.getNation('Vinland').catch(e => { console.log(e) }).then(nation => { return nation });
	var france = await emc.getNation('Nouvelle-France').catch(e => { console.log(e) }).then(nation => { return nation });
	var kingston = await emc.getNation('Kingston').catch(e => { console.log(e) }).then(nation => { return nation });
	var maine = await emc.getNation('Maine').catch(e => { console.log(e) }).then(nation => { return nation });
	var canada = await emc.getNation('Canada').catch(e => { console.log(e) }).then(nation => { return nation });
	var algonquia = await emc.getNation('Algonquia').catch(e => { console.log(e) }).then(nation => { return nation });
	var hall = await emc.getNation('Hall').catch(e => { console.log(e) }).then(nation => { return nation });
	var iroquois = await emc.getNation('Iroquois').catch(e => { console.log(e) }).then(nation => { return nation });
	var avalon = await emc.getNation('Avalon').catch(e => { console.log(e) }).then(nation => { return nation });
	var ontario = await emc.getNation('Ontario').catch(e => { console.log(e) }).then(nation => { return nation });
	var hyperborea = await emc.getNation('Hyperborea').catch(e => { console.log(e) }).then(nation => { return nation });
	var hbc = await emc.getNation('HBC').catch(e => { console.log(e) }).then(nation => { return nation });
	var partridge = await emc.getNation('Partridge').catch(e => { console.log(e) }).then(nation => { return nation });
	var avannaa = await emc.getNation('Avannaa').catch(e => { console.log(e) }).then(nation => { return nation });
	var hre = await emc.getNation('H.R.E.').catch(e => { console.log(e) }).then(nation => { return nation });
	var chungus = await emc.getNation('DoMan_Butte').catch(e => { console.log(e) }).then(nation => { return nation });
	var array = Object.values(nation);
	var res = array[2].toString();
	var resCount = res.split(',');
	resCount.push(' Bermuda');
	console.log(resCount);
	
	var baffin2 = Object.values(baffin);
	var baffinres = baffin2[2].toString();
	var baffinCount = baffinres.split(',');
	
	var vinland2 = Object.values(vinland);
	var vinlandres = vinland2[2].toString();
	var vinlandCount = vinlandres.split(',');
	
	var france2 = Object.values(france);
	var franceres = france2[2].toString();
	var franceCount = franceres.split(',');
	
	var kingston2 = Object.values(kingston);
	var kingstonres = kingston2[2].toString();
	var kingstonCount = kingstonres.split(',');
	
	var maine2 = Object.values(maine);
	var maineres = maine2[2].toString();
	var maineCount = maineres.split(',');
	
	var canada2 = Object.values(canada);
	var canadares = canada2[2].toString();
	var canadaCount = canadares.split(',');
	
	var algonquia2 = Object.values(algonquia);
	var algonquiares = algonquia2[2].toString();
	var algonquiaCount = algonquiares.split(',');
	
	var hall2 = Object.values(hall);
	var hallres = hall2[2].toString();
	var hallCount = hallres.split(',');
	
	var iroquois2 = Object.values(iroquois);
	var iroquoisres = iroquois2[2].toString();
	var iroquoisCount = iroquoisres.split(',');
	
	var avalon2 = Object.values(avalon);
	var avalonres = avalon2[2].toString();
	var avalonCount = avalonres.split(',');
	
	var ontario2 = Object.values(ontario);
	var ontariores = ontario2[2].toString();
	var ontarioCount = ontariores.split(',');
	
	var hyperborea2 = Object.values(hyperborea);
	var hyperboreares = hyperborea2[2].toString();
	var hyperboreaCount = hyperboreares.split(',');
	
	var hbc2 = Object.values(hbc);
	var hbcres = hbc2[2].toString();
	var hbcCount = hbcres.split(',');
	
	var partridge2 = Object.values(partridge);
	var partridgeres = partridge2[2].toString();
	var partridgeCount = partridgeres.split(',');
	
	var avannaa2 = Object.values(avannaa);
	var avannaares = avannaa2[2].toString();
	var avannaaCount = avannaares.split(',');
	
	var hre2 = Object.values(hre);
	var hreres = hre2[2].toString();
	var hreCount = hreres.split(',');
	
	var chungus2 = Object.values(chungus);
	var chungusres = chungus2[2].toString();
	var chungusCount = chungusres.split(',');
	
	console.log(resCount);
	//message.channel.send("Town: " + array[0] + "\n" + "Nation: " + array[1] + "\n" + "Mayor: " + array[5] + "\n" + "Chunks: " + array[4] + "\n" + "Residents: " + array[2]);
	
	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(array[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < resCount.length - 3; i++) {
		var resCount2 = resCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		townEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(townEmbed);
	
	const townEmbed2 = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle('Quebec Continued')
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = resCount.length - 3; i < resCount.length; i++) {
		var resCount2 = resCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		townEmbed2.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(townEmbed2);
	console.log(' ')
	
	

	const baffinEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(baffin2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < baffinCount.length; i++) {
		var resCount2 = baffinCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		baffinEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(baffinEmbed);
	console.log(' ')
	
	const vinlandEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(vinland2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < vinlandCount.length; i++) {
		var resCount2 = vinlandCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		vinlandEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(vinlandEmbed);
	console.log(' ')
	
	const franceEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(france2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < franceCount.length; i++) {
		var resCount2 = franceCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		franceEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(franceEmbed);
	console.log(' ')
	
	const kingstonEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(kingston2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < kingstonCount.length; i++) {
		var resCount2 = kingstonCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		kingstonEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(kingstonEmbed);
	console.log(' ')
	
	const maineEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(maine2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < maineCount.length; i++) {
		var resCount2 = maineCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		maineEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(maineEmbed);
	console.log(' ')
	
	const canadaEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(canada2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < canadaCount.length; i++) {
		var resCount2 = canadaCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		canadaEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(canadaEmbed);
	console.log(' ')
	
	const algonquiaEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(algonquia2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < algonquiaCount.length; i++) {
		var resCount2 = algonquiaCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		algonquiaEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(algonquiaEmbed);
	console.log(' ')
	
	const hallEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(hall2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < hallCount.length; i++) {
		var resCount2 = hallCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		hallEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(hallEmbed);
	console.log(' ')
	
	const iroquoisEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(iroquois2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < iroquoisCount.length; i++) {
		var resCount2 = iroquoisCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		iroquoisEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(iroquoisEmbed);
	console.log(' ')
	
	const avalonEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(avalon2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < avalonCount.length; i++) {
		var resCount2 = avalonCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		avalonEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(avalonEmbed);
	console.log(' ')
	
	const ontarioEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(ontario2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < ontarioCount.length; i++) {
		var resCount2 = ontarioCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		ontarioEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(ontarioEmbed);
	console.log(' ')
	
	const hyperboreaEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(hyperborea2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < hyperboreaCount.length; i++) {
		var resCount2 = hyperboreaCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		hyperboreaEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(hyperboreaEmbed);
	console.log(' ')
	
	const hbcEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(hbc2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < hbcCount.length; i++) {
		var resCount2 = hbcCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		hbcEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(hbcEmbed);
	console.log(' ')

	const partridgeEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(partridge2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < partridgeCount.length; i++) {
		var resCount2 = partridgeCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		partridgeEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(partridgeEmbed);
	console.log(' ')
	
	const avannaaEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(avannaa2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < avannaaCount.length; i++) {
		var resCount2 = avannaaCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		avannaaEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(avannaaEmbed);
	console.log(' ')
	
	const hreEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(hre2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < hreCount.length; i++) {
		var resCount2 = hreCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		hreEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(hreEmbed);
	console.log(' ')
	
	const chungusEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(chungus2[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	for (let i = 0; i < chungusCount.length; i++) {
		var resCount2 = chungusCount[i].split(' ');
		var town = await emc.getTown(resCount2[1]);
		var array = Object.values(town);
		var res = array[2].toString();
		var resCount3 = res.split(',');
		chungusEmbed.addField(array[0], '`' + resCount3.length + '`' )
		console.log(resCount3.length)
	}
	message.channel.send(chungusEmbed);
	console.log(' ')
	
  }
  
  if(command === '$ping') {
	  message.channel.send("Pong!");
  }
  
  if(command === '$n')
{
	const emc = require('earthmc');
	const players = split.join(" ");
	var nation = await emc.getNation(split[0]).catch(e => { console.log(e) }).then(nation => { return nation });
	var array = Object.values(nation);
	var res = array[2].toString();
	var resCount = res.split(',');
	//message.channel.send("Town: " + array[0] + "\n" + "Nation: " + array[1] + "\n" + "Mayor: " + array[5] + "\n" + "Chunks: " + array[4] + "\n" + "Residents: " + array[2]);
	
	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(array[0])
	.setURL('https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + array[5] + '&y=64&z=' + array[6])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://crusade-craft.com')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'King', value: array[3] },
		{ name: 'Capital', value: array[4] },
		{ name: 'Chunks', value: array[7] },
		{ name: 'Towns [' + resCount.length + ']', value: '`' + array[2] + '`' },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	message.channel.send(townEmbed);
	//const townless = emc.townlessPlayers;
	//message.channel.send(emc.emcData["online"]);
  }
  if(command === '$res')
{
	const emc = require('earthmc');
	const players = split.join(" ");
	var res = await emc.getResident(split[0]).catch(e => { console.log(e) }).then(resident => { return resident });
	var array = Object.values(res);
	
	var town = await emc.getTown(array[1]);
	var arrayt = Object.values(town);
	//message.channel.send("Town: " + array[0] + "\n" + "Nation: " + array[1] + "\n" + "Mayor: " + array[5] + "\n" + "Chunks: " + array[4] + "\n" + "Residents: " + array[2]);
	
	//if(array[1] = null) {
	//array[1] = "None";
	//array[2] = "None";
	//array[3] = "Townless";
	//}
	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(array[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://minotar.net/helm/' + array[0].replace(/\s/g, '') + '.png')
	.addFields(
		{ name: 'Town', value: '[' + array[1] + '](https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + arrayt[12] + '&y=64&z=' + arrayt[13] + ')' },
		{ name: 'Nation', value: array[2] },
		{ name: 'Rank', value: array[3] },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	message.channel.send(townEmbed);
	//const townless = emc.townlessPlayers;
	//message.channel.send(emc.emcData["online"]);
  }
  
  if(command === '$nether')
{
	const emc = require('earthmc');
	const players = split.join(" ");
	const fast = await emc.getFastPlayerData();
	var tarray = Object.values(fast);
	var garray = Object.values(tarray[1]);
	var farray = Object.values(garray);
	
	
	for (let i = 0; i < farray.length; i++) {
	var parray = Object.values(farray[i]);
	if(parray[0] === 'earth_nether') {
		console.log(parray[1]);
	
	var res = await emc.getResident(parray[1]).catch(e => { console.log(e) }).then(resident => { return resident });
	var array = Object.values(res);
	
	var town = await emc.getTown(array[1]);
	var arrayt = Object.values(town);

	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle(array[0] + ' is in the Nether!')
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://minotar.net/helm/' + array[0].replace(/\s/g, '') + '.png')
	.addFields(
		{ name: 'Town', value: '[' + array[1] + '](https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + arrayt[12] + '&y=64&z=' + arrayt[13] + ')' },
		{ name: 'Nation', value: array[2] },
		{ name: 'Rank', value: array[3] },
		{ name: 'Town Coords', value: '[' + arrayt[12] + ' ' + arrayt[13] + '](https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + arrayt[12] + '&y=64&z=' + arrayt[13] + ')' },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	
	message.channel.send(townEmbed);
	 }
	}
	message.channel.send("If nothing was posted by now then nobody's in the nether")
  }
  
    if(command === '$nrange2')
{
	const emc = require('earthmc');
	var town = await emc.getInvitableTowns(split[0], true);

fs.writeFile('range.txt', '', function (err) {
			if (err) return console.log(err)
			});

	for (let i = 0; i < town.length; i++) {
		var array = Object.values(town[i]);
		fs.appendFile('range.txt', array[0] + " (" + array[1] + ") \n", function (err) {
		if (err) return console.log(err)
	});
		
	}
	
	fs.readFile('range.txt', 'utf8', function(err, range) {
			if (err) {
				console.log(err);
			}
			
	if(range.length > 1024) {
		rangeLim = range.substring(0,1024);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	else {
	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: range },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
	if(range.length > 1024) {
		rangeLim2 = range.substring(1024,2048);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim2 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
if(range.length > 2048) {
		rangeLim3 = range.substring(2048,3072);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim3 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
	if(range.length > 3072) {
		rangeLim4 = range.substring(3072,4096);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim4 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
	if(range.length > 4096) {
		rangeLim4 = range.substring(4096,5120);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim4 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	})
}
  
  if(command === '$nrange')
{
	const emc = require('earthmc');
	var town = await emc.getInvitableTowns(split[0], true);

	var town_arr = []
	for (let i = 0; i < town.length; i++) {
		var array = Object.values(town[i]);
		town_arr.push(array[0])
	}
	console.log(town_arr[0])
			
	if(town_arr.length > 100) {
		rangeLim = town_arr.slice(0,100);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	else {
	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: town_arr },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
	if(town_arr.length > 100) {
		rangeLim2 = town_arr.slice(100,200);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim2 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
if(town_arr.length > 200) {
		rangeLim3 = town_arr.slice(200,300);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim3 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
	if(town_arr.length > 300) {
		rangeLim4 = town_arr.slice(300,400);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim4 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
	if(town_arr.length > 400) {
		rangeLim4 = town_arr.slice(400,500);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim4 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
}

  if(command === '$whatif')
{
	const emc = require('earthmc');
	var town = await emc.whatIf(split[0], true);

fs.writeFile('range.txt', '', function (err) {
			if (err) return console.log(err)
			});

	for (let i = 0; i < town.length; i++) {
		var array = Object.values(town[i]);
		fs.appendFile('range.txt', array[0] + " (" + array[1] + ") \n", function (err) {
		if (err) return console.log(err)
	});
		
	}
	
	fs.readFile('range.txt', 'utf8', function(err, range) {
			if (err) {
				console.log(err);
			}
			
	if(range.length > 1024) {
		rangeLim = range.substring(0,1024);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	else {
	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: range },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
	if(range.length > 1024) {
		rangeLim2 = range.substring(1024,2048);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim2 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
if(range.length > 2048) {
		rangeLim3 = range.substring(2048,3072);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim3 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
	if(range.length > 3072) {
		rangeLim4 = range.substring(3072,4096);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim4 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	
	if(range.length > 4096) {
		rangeLim4 = range.substring(4096,5120);
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Towns in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Towns', value: rangeLim4 },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	}
	})
}
	
	if(command === '$trange')
{
	const emc = require('earthmc');
	var town = await emc.getJoinableNations(split[0]);

fs.writeFile('nations.txt', '', function (err) {
			if (err) return console.log(err)
			});

var nation_arr = []
	for (let i = 0; i < town.length; i++) {
		var array = Object.values(town[i]);
		console.log(array[0])
		nation_arr.push(array[0])
	}
	console.log(nation_arr)
		
		const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Nations in Range of " + split[0])
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	.addFields(
		{ name: 'Nations', value: nation_arr },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Tesseract', 'https://minotar.net/helm/EchoOcelot.png');
	message.channel.send(townEmbed);
	
	//const townless = emc.townlessPlayers;
	//message.channel.send(emc.emcData["online"]);
}

  if(command === '$bannerhall')
{
  message.channel.send("Recording Maple's history...");
  setInterval(async function() {
	  const emc = require('earthmc');
	const players = split.join(" ");
	console.log("Bruh")
	var array = await emc.getTowns2();
	//console.log(array)
	
	fs.writeFile('northseatowns.txt', '', function (err) {
			if (err) return console.log(err)
			});

	for (let i = 0; i < array.length; i++) {
		var arrayi = array[i] 
		var town = Object.values(arrayi);
		var towni = town[0].toString();
		var towni2 = town[1].toString();
		var towni3 = town[2].toString();
		var towni4 = town[3].toString();
		var towni5 = town[4].toString();
		var towni6 = town[5].toString();
		var townSplit = towni.split(',');
		var townSplit2 = towni2.split(',');
		var townSplit3 = towni3.split(',');
		var townSplit4 = towni4.split(',');
		var townSplit5 = towni5.split(',');
		var townSplit6 = towni6.split(',');
		//if(townSplit == "Better_Dublin") console.log(array[i])
		if(townSplit6 == "Ireland" || townSplit6 == "Iceland" || townSplit6 == "Greenland") {
		fs.appendFile('northseatowns.txt', townSplit + '|' + townSplit2 + '|' + townSplit3 + '|' + townSplit4 + '|' + townSplit5 + '|' + townSplit6 + '\n', function (err) {
		if (err) return console.log(err)
	});
		}
	}
	fs.readFile('northseacurrent.txt', 'utf8', function(err, current) { //Old list
			if (err) {
				console.log(err);
			}
	fs.readFile('northseatowns.txt', 'utf8', function(err, towns) { //New list
			if (err) {
				console.log(err);
			}
	fs.readFile('northseamayors.txt', 'utf8', function(err, mayors) { //Old mayors - defined when current is at bottom, opposite of timerz
			if (err) {
				console.log(err);
			}
			var currentSplit = current.split('\n');
			var townsSplit = towns.split('\n');
			var mayorsSplit = mayors.split('\n');
			console.log(townsSplit)
			
			
			for (let i = 0; i < townsSplit.length; i++) {
				var townInfo = townsSplit[i].split('|');
				//console.log(currentInfo[0])
				if(!currentSplit.includes(townInfo[0])) {
					if(!mayorsSplit.includes(townInfo[4])) {
					const townEmbed = new Discord.MessageEmbed()
					.setColor('#008b8b')
					.setTitle(townInfo[0] + " has joined the North Sea Republic!")
					.setURL('https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + townInfo[2] + '&y=64&z=' + townInfo[3])
					.setAuthor(message.author.tag, message.author.avatarURL(), 'https://earthmc.fandom.com/wiki/Qu%C3%A9bec')
					.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
					.addFields(
						{ name: 'Mayor', value: townInfo[4] },
						{ name: 'Chunks', value: townInfo[1] },
						{ name: 'Nation', value: townInfo[5] },
						{ name: 'Location', value: '[' + townInfo[2] + ', ' + townInfo[3] + '](https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=6&x=' + townInfo[2] + '&y=64&z=' + townInfo[3] + ')' },				
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Bagelz', 'https://minotar.net/helm/EchoOcelot.png');
	const chan = client.channels.cache.get("977708833168306257");
	message.channel.send("<@&977708490938282086>")
	message.channel.send(townEmbed);
				}
				else {
					message.channel.send(townInfo[0] + " is the new name for an existing North Sea Republic town owned by " + townInfo[4] + ".")
				}
			}
			}
			})
			})
			})

	for (let i = 0; i < array.length; i++) {
		var arrayii = array[i] 
		var towni = Object.values(arrayii);
		var town1 = towni[0].toString();
		var town2 = towni[1].toString();
		var town3 = towni[2].toString();
		var town4 = towni[3].toString();
		var towniSplit = town1.split(',');
		var towniSplit2 = town2.split(',');
		var towniSplit3 = town3.split(',');
		var towniSplit4 = town4.split(',');
	}
	
	function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

	await sleep(30000);
	
	console.log("Bruh2")
	
	fs.writeFile('northseacurrent.txt', '', function (err) {
			if (err) return console.log(err)
			});
		
	fs.writeFile('northseamayors.txt', '', function (err) {
			if (err) return console.log(err)
			});
		
	for (let i = 0; i < array.length; i++) {
		var arrayii = array[i] 
		var towni = Object.values(arrayii);
		var town1 = towni[0].toString();
		var town2 = towni[1].toString();
		var town3 = towni[2].toString();
		var town4 = towni[3].toString();
		var town5 = towni[4].toString();
		var town6 = towni[5].toString();
		var town7 = towni[6].toString();
		var towniSplit = town1.split(',');
		var towniSplit2 = town2.split(',');
		var towniSplit3 = town3.split(',');
		var towniSplit4 = town4.split(',');
		var towniSplit5 = town5.split(',');
		var towniSplit6 = town6.split(',');
		var towniSplit7 = town7.split(',');
	
		if(towniSplit6 == "Ireland" || towniSplit6 == "Iceland" || towniSplit6 == "Greenland") {
		fs.appendFile('northseacurrent.txt', towniSplit + '\n', function (err) {
			if (err) return console.log(err)
			});
		
		fs.appendFile('northseamayors.txt', towniSplit5 + '\n', function (err) {
			if (err) return console.log(err)
			});
		}
	}
  }, 60000);
}

   if(command === '$help')
{
	const townEmbed = new Discord.MessageEmbed()
	.setColor('#008b8b')
	.setTitle("Commands")
	.setAuthor(message.author.tag, message.author.avatarURL(), 'https://crusade-craft.com')
	.setThumbnail('https://static.wikia.nocookie.net/earthmc2820/images/4/48/Les_lisoirs_flag_by_fridip_da38mw3-fullview.png/revision/latest?cb=20200126212826')
	townEmbed.addFields(
		{ name: '$t (town)', value: 'Lets you look up information about a town. Ex: $t Dublin' },
		{ name: '$n (nation)', value: 'Lets you look up information about a nation. Ex: $n Iceland' },
		{ name: '$res (player)', value: 'Lets you look up information about a player. Ex: $res Dayzle' },
		{ name: '$pop (nation)', value: 'Finds the population of every town in a nation. Great for censuses and recruitment contests. Ex: $pop Denmark' },
		{ name: '$explosion', value: 'Lists all towns with explosions toggled on' },
		{ name: '$nrange (nation)', value: 'Lists all towns in range of the given nation. Ex: $nrange Ireland' },
		{ name: '$trange (town)', value: 'Lists all joinable nations in range of the given town. Ex: $trange Stormont' },
	);
	townEmbed.setFooter('Created by EchoOcelot   --   Powered by Bagelz', 'https://minotar.net/helm/EchoOcelot.png');
	
	message.channel.send(townEmbed);
	//const townless = emc.townlessPlayers;
	//message.channel.send(emc.emcData["online"]);
   //}
  }
  })