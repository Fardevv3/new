module.exports = {
  name: "refuseacc",
  alias: ["refuseacc"],
  category: "report",
  desc: "Report message from owner",
  isOwner: true,
  async run({conn, msg},{ args }) {
    try {
      if(!msg.quoted) throw "Reply pesan nya"
      if(!args[0]) throw "Id nya??"
      if(!args[1]) throw "Sender nya?"
      if(!args[2]) throw "Key nya kak"
      lap = 'Laporan ditolak\n\n'
      lap += `Detail Laporan\n`
      lap +=  msg.quoted.message.buttonsMessage.contentText
      
      // args[0] = groupId
      // args[1] = sender
      // args[2] = key id
      
     let su = store.messages[args[0]].array.find(pe => pe.key.id === args[2]) 
     await conn.sendMessage(args[0], {text: lap, withTag : true}, {quoted: su})
     await msg.reply("Done..")
    } catch (e){
      console.log(e)
      msg.reply("*Command error*\n\n" + e)
    }
  }
}