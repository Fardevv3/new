let fs = require("fs");

module.exports = {
  name: "addchangelog",
	alias: ["addchangelog"],
	category: "private",
	desc: "Add command a new",
	isOwner: true,
	query: "Masukan command yg ingin di tambahkan!!",
	async run({msg,conn},{q}) {
	  try{
	    let cglg = JSON.parse(fs.readFileSync('./database/changelog.json'));
	    cglg.push({
	      cmd: q.split("|")[0].trim(),
	      log: q.split("|")[1].trim() ? q.split("|")[1].trim() : "Nothing",
	      time: Date.now(),
	    })
	    
	  await fs.writeFileSync('./database/changelog.json',JSON.stringify(cglg));
	  txt = "*Done add Changelog*\n\n";
	  txt += "_Command : " + q.split("|")[0].trim() + "_\n";
	  txt += `_Changelog : ${q.split("|")[1].trim() ? q.split("|")[1].trim() : "Nothing"}_`;
	  await msg.reply(txt,{adReply : true});
	} catch (e){
	  console.log(e);
	  msg.reply("*Command error*\n\n" + e);
	  }
	},
};
