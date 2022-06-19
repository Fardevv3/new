module.exports = {
	name: "block",
	alias: ["block"],
	use: "<tag>",
	category: "private",
	desc: "Block member",
	//query: "Example .block @tag",
	isOwner: true,
	async run({ msg, conn }, { q, prefix }) {
		let participant = msg.mentions[0]
			? msg.mentions[0]
			: msg.quoted
			? msg.quoted.sender
			: q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
		await conn.updateBlockStatus(participant, "block")
			.then((res) => msg.reply("Sukses block user"))
			.catch((err) => msg.reply(err));
	},
};
