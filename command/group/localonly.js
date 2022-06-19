module.exports = {
	name: "localonly",
	alias: ["localonly"],
	desc: "activate the number localonly group",
	use: "<1 / 0>",
	category: "group",
	query: "enter options\n1 = aktif\n0 = nonaktif",
	isGroup: true,
	isBotAdmin: true,
	isAdmin: true,
	async run({ msg, conn }, { args, prefix }) {
		let data = JSON.parse(require("fs").readFileSync("./database/localonly.json"));
		let data2 = data.includes(msg.from);
		if (args[0] == 1) {
			if (data2) throw "been active before";
			db.modified("localonly", msg.from);
			await msg.reply(`Local only turned on successfully`);
		} else if (args[0] == 0) {
			if (!data2) throw "not active before";
			data.splice(data.indexOf(msg.from), 1);
			require("fs").writeFileSync("./database/localonly.json", JSON.stringify(data, null, 2));
			await msg.reply("successfully delete session Local only in this group");
		}
	},
};
