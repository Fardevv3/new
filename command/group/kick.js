module.exports = {
	name: "kick",
	alias: ["kick"],
	use: "<tag>",
	category: "group",
	desc: "kick members group",
	isGroup: true,
	isBotAdmin: true,
	isAdmin: true,
	isSpam: true,
	async run({ msg, conn }, { q, prefix }) {
		let participant = msg.mentions[0]
			? msg.mentions[0]
			: msg.quoted
			? msg.quoted.sender
			: q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
		await conn.groupParticipantsUpdate(msg.from, [participant], "remove")
			.then((res) => msg.reply("Sukses Kick user"))
			.catch((err) => msg.reply(err));
	},
};
