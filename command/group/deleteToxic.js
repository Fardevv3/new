const fs = require("fs")

module.exports = {
  name: "deltoxic",
  alias: ["deltoxic"],
	category: "group",
	desc: "gtau",
	isGroup: true,
	isAdmin: true,
	isSpam: true,
	async run({msg, conn},{args, q}){
     const word = JSON.parse(fs.readFileSync('./database/toxic.json'))
	  if(!q) throw "Masukan kata terlarang!!"
	  if(word[msg.from] == undefined){
                word[msg.from] = {
                    kata: [],
                    warning: {}
                }
                await fs.writeFileSync('./database/toxic.json',JSON.stringify(word))
            }
            if(!word[msg.from].kata.includes(q)) return msg.reply(`Kata ${q} tidak ada didalam kata terlarang!`)
            word[msg.from].kata.splice(word[msg.from].kata.indexOf(q), 1)
            msg.reply(`Kata ${q} berhasil dihapus dari kata terlarang`)
	}
}