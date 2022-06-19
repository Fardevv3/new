const fs = require("fs")
const prettyms = require('pretty-ms')

module.exports = async function (msg, conn){
  const afk = JSON.parse(fs.readFileSync("./database/afk.json"));
  if (afk[msg.sender] != undefined){
    const afktime = await prettyms(Date.now() - afk[msg.sender].time, {
				verbose: true,
			});
    const afkreason = afk[msg.sender].reason;
			const unafk = `You have exited afk mode,\nafter ${afkreason} for ${afktime}`;
			msg.reply(unafk);
			delete afk[msg.sender];
			await fs.writeFileSync("./database/afk.json", JSON.stringify(afk));
  }
  	if (msg.quoted && afk[msg.quoted.sender] != undefined) {
			const pushname = store.contacts[msg.quoted.sender];
			const afktime = await prettyms(Date.now() - afk[msg.quoted.sender].time, {
				verbose: true,
			});
			const afkreason = afk[msg.quoted.sender].reason;
			const afkteks = `${
				pushname != undefined ? pushname.name : "he`s"
			} in afk, don't disturb\nReason : ${afkreason}\nSince : ${afktime}`;
			await msg.reply(afkteks);
		}
		if (msg.mentions != "" && afk[msg.mentions[0]] != undefined) {
			const pushname = global.store.contacts[msg.mentions[0]];
			const afktime = await prettyms(Date.now() - afk[msg.mentions[0]].time, {
				verbose: true,
			});
			const afkreason = afk[msg.mentions[0]].reason;
			/*const afkteks = `${
				pushname != undefined ? pushname.name : "he`s"
			} in afk, don't disturb\nReason : ${afkreason}\nSince : ${afktime}`;*/
			let afkteks = `*${pushname != undefined ? pushname.name : "he`s"} sedang afk!!*\n`
			afkteks += "Reason : " + afkreason + "\n"
			afkteks += "Sejak : " + afktime + "\n\n"
			afkteks += "*────[ Away From Keyboard ]────*"
			await msg.reply(afkteks);
		
	}
}