let fs = require('fs')

module.exports = {
	name: "getfitur",
	alias: ["gf","getfitur","getfile"],
	category: "private",
	desc: "Melihat code file",
	isOwner: true,
	isSpam: true,
	query: "Masukkan nama path file,\n example: .getfitur ./command/other/fitur.js",
	use: "<name file>",
	async run({ msg, conn }, { q, map, args }) {
		await msg.reply(fs.readFileSync(q, 'utf8'))
	},
};
