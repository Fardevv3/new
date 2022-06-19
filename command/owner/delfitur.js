module.exports = {
	name: "deletefitur",
	alias: ["df","delfitur"],
	category: "private",
	desc: "Menghapus file",
	isOwner: true,
	isSpam: true,
	query: "Masukkan nama path file,\n example: .delfitur ./command/other/fitur.js",
	use: "<name file>",
	async run({ msg, conn }, { q, map, args }) {
		await require("fs").unlinkSync(q);
		await msg.reply(`Delete successfully, and is restarting`);
		process.send("reset");
	},
};
