const fs = require("fs");
const prettyms = require("pretty-ms");

module.exports = {
  name: "changelog",
	alias: ["changelog"],
	category: "main",
	desc: "Get command a new",
	async run({msg,conn}) {
	  try{
	    let cg = JSON.parse(fs.readFileSync("./database/changelog.json"))
	    let text = "*-----Changelog-----*"
	    let txt = "\n\n"
	    for(let i of cg){
	      txt += "──────────────────\n\n"
	      txt += shp + " Command : " + i.cmd + "\n"
	      txt += shp + " Changelog : " + i.log + "\n"
	      txt += shp + " Last Update : " + await prettyms(Date.now() - i.time, { verbose: true, }) + "\n\n"
	    }
	    txt += "──────────────────\n\n"
	    txt += config.namebot
	    msg.reply(text + "```" + txt + "```",{adReply : true})
	  } catch (e){
	    console.log(e)
	    msg.reply("*Command error!*\n\n" + e)
	  }
	}
}