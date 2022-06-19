module.exports = {
  name: "report",
  alias: ["rp","report"],
  category: "report",
  desc: "Report message from owner",
  isSpam: true,
  isGroup: true,
  async run({conn, msg}, {q}){
    try {
      let { sender , pushName } = msg
      if(!q) throw "Mau laporin apa??"
      let group = await conn.groupMetadata(msg.from)
	    report = "├ User  : @" + sender.split("@")[0] + "\n"
	    report += "├ Laporan : " + q + "\n"
	    report += "├ Group : " + group.subject + "\n"
	    report += "╰ Id : " + msg.from+ "\n"
	    //report += "╰ " + msg.key.id
	    conn.sendMessage(config.owner[0], {
         text: report,
         footer: config.namebot,
         buttons: [ 
                { buttonId: `.refuseacc ${msg.from} ${sender} ${msg.key.id}`, buttonText: { displayText: 'Tolak' }, type: 1 },
                { buttonId: `.blockreport ${group.id} ${sender} ${msg.key.id}`, buttonText: { displayText: 'Tolak (Block)' }, type: 1 },
                { buttonId: `.reportacc ${group.id} ${msg.key.id}`, buttonText: { displayText: 'Terima' }, type: 1 }
           ],
           headerType: 1
           , withTag : true },{quoted : msg })
	       await msg.reply('Laporan sudah disampaikan kepada Owner')
    } catch (e){
      console.log(e)
      msg.reply("*Command error*\n\n" + e)
    }
  }
}