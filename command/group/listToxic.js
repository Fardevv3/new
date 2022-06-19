module.exports = {
  name: "listtoxic",
  alias: ["listtoxic"],
  category: "group",
  desc: "Menampilkan kata toxic",
  isGroup: true,
  async run({msg,conn}){
    let { from , reply } = msg
    let data = await conn.groupMetadata(from)
    let word = JSON.parse(require("fs").readFileSync('./database/toxic.json'))
     txt = "*Kata terlarang/toxic yg ada di group : " + data.subject + "*\n\n"
    txt += "*Kata-kata :*\n"
      txt += shp +  word[msg.from].kata.join(`\n${shp}`) + "\n\n"
    txt += "*Total : " + word[msg.from].kata.length + "*"
    reply(txt)
  }
}