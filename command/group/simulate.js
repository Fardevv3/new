const { simulate } = require("../../lib/simulate")

module.exports = {
  name: "simulate",
  alias: ["simulate"],
  category: "group",
	isGroup: true,
	desc: "Simulation on group",
	use: "<Welcome / Left>",
	async run({conn, msg},{ args }){
	  const dataWelcome = JSON.parse(require("fs").readFileSync("./database/welcome.json"));
    const dWelcome = db.cekDatabase("welcome", "id", msg.from);
 	  const dataLeft = JSON.parse(require("fs").readFileSync("./database/left.json"));
    const dLeft = db.cekDatabase("left", "id", msg.from);
 
	  if(args[0] != 'welcome' && args[0] != 'left') return await msg.reply('Pilih welcome/left')
	  if(args[0] === "welcome"){
	    if(!dWelcome) throw "Welcome tidak aktif!!"
	    await msg.reply('_Simulating ...._')
	    simulate(args[0], msg, conn)
	  } else if(args[0] === "left"){
	    if(!dLeft) throw "Left tidak aktif!!"
	    await msg.reply('_Simulating ...._')
	    simulate(args[0], msg, conn)
	  } else {
	    return await msg.reply('Pilih welcome/left')
	  }
	}
}