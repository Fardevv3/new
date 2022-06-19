module.exports = {
	name: ['menu'].map((v) => v + ''),
	alias: ["menu"],
	category: "main",
	async run({ msg, conn }, { map,args }) {
		  let d = new Date(new Date() + 3600000)
		  let locale = "id"
		  let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
      let time = d.toLocaleTimeString(locale, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        })
			const { pushName, sender } = msg;
			const { prefix, command } = map;
			const cmds = command.keys();
			let category = [];

			for (let cmd of cmds) {
				let info = command.get(cmd);
				if (!cmd) continue;
				if (config.ignore.directory.includes(info.category.toLowerCase())) continue;
				cteg = info.category || "No Category";
				if (info.type == "changelog") continue;
				if (!cteg || cteg === "private") cteg = "owner";
				if (Object.keys(category).includes(cteg)) category[cteg].push(info);
				else {
					category[cteg] = [];
					category[cteg].push(info);
				}
			}
			menu1 = "                      *" +  config.namebot + "*\n\n";
			menu = " ❏ Library : Baileys-MD\n";
			menu += " ❏ Github : https://github.com/Fardevv2\n"
			menu += " ❏ Instagram : https://Instagram.com/fardev78\n";
			menu += " ❏ Prefix : [ " + prefix + " ]\n";
			menu += " ❏ Date : " + date + "\n";
			menu += " ❏ Time : " + time + "\n\n";
			menu += `Halo, ${pushName === undefined ? sender.split("@")[0] : pushName} Here my Command List\n\n`;
			const keys = Object.keys(category)
			for(let key of keys){
			  menu += `${key.toUpperCase()} MENU`;
			  menu += `${category[key].map((cmd, index) => `${cmd.alias[0] ? "\n" + cmd.alias.map((a) => (a ? `  ༆ ➪ ${cmd.options.noPrefix ? "" : "."}${a}` : "")).join("\n"): ""}`).join("")}\n\n`;
			}
			menu += `\nNote : Ketik ${prefix}help <command> untuk melihat info command\nBerikan jeda 5 detik dalam memakai bot`;
			
			const buttons = [
	       { buttonId: `.db` , buttonText: { displayText: 'Statistic' }, type: 1 },
         { buttonId: `.owner`, buttonText: { displayText: 'Pemilik bot' }, type: 1 }
	       ]
      const buttonMessage = {
         image: {url: "https://telegra.ph/file/ae37fbbd5728e3c1e9cb8.png"},
         caption: menu1 + "```" + menu + "```",
         footer: config.namebot,
         buttons: buttons,
         headerType: 1
      }
     conn.sendMessage(msg.from, buttonMessage, {quoted : msg, adReply : true})

	},
};