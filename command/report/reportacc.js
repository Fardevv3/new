module.exports = {
  name: "reportacc",
  alias: ["reportacc"],
  category: "report",
  desc: "Report message from owner",
  isOwner: true,
  async run({conn, msg},{q , args}) {
    try {
      if(!msg.quoted) throw "Reply pesan nya"
      if(!args[0]) throw "Id nya??"
      lap = 'Laporan sudah diterima oleh Owner dan akan diproses\n\n'
      lap += "Detail laporan\n"
      lap +=  msg.quoted.message.buttonsMessage.contentText
     let su = store.messages[args[0]].array.find(pe => pe.key.id === args[1]) 
     conn.sendMessage(args[0], {text: lap, withTag : true}, {quoted: su})
     await msg.reply("Done..")
    }catch (e){
      console.log(e)
      msg.reply("*Command Error*\n\n" + e)
    }
  }
}