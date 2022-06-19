const lyrics = require("music-lyrics")

module.exports = {
  name: "lirik",
  alias: ["lirik","liric"],
  category: "search",
  use: "Query input",
  desc: "Search lirik",
  query: "Example : .lirik <query>",
  wait: true,
  isSpam: true,
  async run({msg},{q}){
        try{
            lir = await lyrics.search(q)
            lir != '' ? await msg.reply(lir) : await msg.reply('Lirik tidak ditemukan')
        }catch(e){
            msg.reply('Lirik tidak ditemukan')
        }
  }
}