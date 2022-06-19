module.exports = {
  name: "help",
  alias: ["help"],
  category: "main",
  desc: ['Melihat informasi dari Command', '.help <Command>'],
  async run({msg, conn},{args,q,map}) {
			const name = q.toLowerCase();
			const { command, prefix } = map;
			const cmd = command.get(name) || [...command.values()].find((x) => x.alias.find((x) => x == args[0]));
			if (!cmd || (cmd.category === "private" && !config.owner.includes(msg.sender)))
				return await msg.reply("Command not found");
				helpt = "*Helper*\n\n"
				helpt += "```" + `Command : ${q}` + "```\n"
				helpt += "```" + `Triger Command : ${cmd.alias.join(", ")}` + "```\n"
				helpt += "```" + `Category : ${cmd.category}` + "```\n\n"
				helpt += `*Command Atribute*\n`
				helpt += "```" + ` • isOwner : ${cmd.options.isOwner ? '✅' : '❌'}` + "```\n"
				helpt += "```" + ` • isAdmin : ${cmd.options.isAdmin ? '✅' : '❌'}` + "```\n"
				helpt += "```" + ` • isBotAdmin  : ${cmd.options.isBotAdmin ? '✅' : '❌'}` + "```\n"
				helpt += "```" + ` • isGroup : ${cmd.options.isGroup ? '✅' : '❌'}` + "```\n"
				helpt += "```" + ` • isPrivate : ${cmd.options.isPrivate ? '✅' : '❌'}` + "```\n"
				helpt += "```" + ` • isPremium : ${cmd.options.isPremium ? '✅' : '❌'}` + "```\n\n"
				helpt += '*Command Description :* \n'
				helpt += "```" +` Deskripsi : ${cmd.desc}` + "```\n"
				helpt += "```" + ` Usage : ${prefix}${cmd.name} ${cmd.use}\n\n` + "```"
				helpt += '*Note :* \n'
				helpt += `➠ *[ ]* = Optional\n➠ *|* = Or\n➠ *<>* = Must be filled`
			
      msg.reply(helpt, {adReply : true})
  }
}
