module.exports = {
	name: "scriptbot",
	alias: ["script", "sc", "scbot"],
	category: "info",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
	  text = `Script Bot : https://github.com/Rizky878/rzky-multidevice/\n`
	  text += `Recode : https://github.com/ZeetsuShin/Bot-MD\n\n`
          text += "Dont Forget to forks n star XD"
	  await msg.reply("```" + text + "```");
	},
};
