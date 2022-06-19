const moment = require("moment-timezone");

module.exports = {
	name: "creategroup",
	alias: ["creategc"],
	category: "tools",
	desc: "Membuat group baru",
	isSpam: true,
	async run({ msg, conn }, { q }) {
let create = await conn.groupCreate(q, [])
let response = await conn.groupInviteCode(create.id)
teks = `  「 *Create Group* 」

_💌 Name : ${create.subject}_
_👨‍💻 Owner : @${create.owner.split("@")[0]}_
_⏰ Time : ${moment(create.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_

https://chat.whatsapp.com/${response}
`
msg.reply(teks, {withTag:true})
	},
};
