const fs = require("fs")

module.exports = async function(msg, conn) {
  const word = JSON.parse(require("fs").readFileSync('./database/toxic.json'))
  const { body, sender, isGroup, from, reply } = msg;
  if(word[msg.from] == undefined) return
   for(let kasar of word[msg.from].kata){
     if(body.includes(kasar)){
       if(word[msg.from].warning[msg.sender] == undefined){
         word[msg.from].warning[msg.sender] = {
                        kata: [kasar],
                        count: 1
                    }
       } else {
         word[msg.from].warning[msg.sender].kata.push(kasar)
                    word[msg.from].warning[msg.sender].count++
       }
       await fs.writeFileSync('./database/toxic.json', JSON.stringify(word))
       if(word[msg.from].warning[msg.sender].count == 5){
         txt = "Kata terlarang terdeteksi..\n"
         txt += "Kata : " + kasar + "\n\n"
         txt += "Warning : " + word[msg.from].warning[msg.sender].count + "/5 \n"
         txt += "Anda akan di keluarkan oleh bot!!"
         //txt = `Kata terlarang terdeteksi\nKata : ${kasar}\n\nWarning ${word[msg.from].warning[msg.sender].count}/5\nAnda akan dikeluarkan oleh bot!`
          msg.reply("```" + txt + "```")
          conn.groupParticipantsUpdate(msg.from, [msg.sender], "remove")
                }
                else 
                teks = "Kata Terlarang terdeteksi!!\n"
                teks += "Kata : " + kasar + "\n\n"
                teks += "Warning : " + word[msg.from].warning[msg.sender].count + "/5\n\n"
                teks += "Note: Jika warning sudah mencapai 5, maka anda akan otomatis dikeluarkan oleh bot.."
                return msg.reply(teks)
            
     }
   }
}