const prettyms = require("pretty-ms")

module.exports = {
	name: "dashboard",
	alias: ["db"],
	desc: "display " + config.namebot + " bot dashboard info",
	category: "info",
	isSpam: true,
	wait: false,
	async run({ msg, conn }) {
		dashboard.sort(function (a, b) {
			return b.success - a.success;
		});
		let success = dashboard.map((a) => a.success);
		let failed = dashboard.map((a) => a.failed);
		let jumlah = require("mathjs").evaluate(success.join("+")) + require("mathjs").evaluate(failed.join("+"));
		
		txt = "*Dashboard*\n\n";
		txt += "Global HIT\n\n";
		txt += ` ${shp} Global : ${jumlah}\n`
		txt += ` ${shp} Success : ${require("mathjs").evaluate(success.join("+"))}\n`;
		txt += ` ${shp} Failed : ${require("mathjs").evaluate(failed.join("+"))}\n\n`;
		txt += "Command Global\n\n"
		let dbny = dashboard.length > 5 ? 5 : dashboard.length;
		for(let i = 0; i < dbny; i++){
		  txt += ` ${shp} Command : *${dashboard[i].name}*\n`
		  txt += ` ${shp} Total : ${dashboard[i].success + dashboard[i].failed}\n`;
		  txt += ` ${shp} Success : ${dashboard[i].success}\n`; 
		  txt += ` ${shp} Failed : ${dashboard[i].failed}\n`;
		  txt += ` ${shp} Last Used : ${await prettyms(Date.now() - dashboard[i].lastUpdate, {
				verbose: true,
			})}\n\n`;
		}
		await msg.reply(txt, {adReply : true});
	},
};
