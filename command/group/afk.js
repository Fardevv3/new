const fs = require("fs");
module.exports = {
	name: "afk",
	alias: ["afk"],
	category: "group",
	desc: "Away From Keyboard",
	isGroup: true,
	async run ({msg, conn}, {q}) {
		const afk = JSON.parse(fs.readFileSync("./database/afk.json"));
		afk[msg.sender] = {
			id: msg.sender,
			time: Date.now(),
			reason: q ? q : "nothing",
		};
		await fs.writeFileSync("./database/afk.json", JSON.stringify(afk));
		//msg.reply(`Afk mode activated\nReason : ${q ? q : "Nothing"}`);
		
		txt = "*----------[ AFK ] ----------*\n\n"
		txt += "•Away From Keyboard started•\n"
		txt += msg.pushName + " is now Afk!!\n"
		txt += `Reason : ${q ? q : "Nothing"}`
		msg.reply(txt)
	},
};
