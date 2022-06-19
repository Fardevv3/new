const fajarApi = require ("zxy-api")
const { isUrl } = require("../../lib/index");

module.exports = {
  name: "gore",
  alias: ["gore"],
  category: "downloader",
  use: "<url>",
  desc: "Downloader video gore",
  query: "Example : !gore <url>",
  wait: true,
  isSpam: true,
  async run({conn, msg}, {q}){
    if(!isUrl(q) && q.includes("seegore.com")) throw 'Link invalid!!'
    let result = await fajarApi.downloader.gore(q)
      let data = result.data
      let txt1 = "*Gore Downloader*\n\n"
      let txt = " • Judul : " + data.judul + "\n"
          txt += " • Comment : " + data.comment + "\n"
          txt += " • Views : " + data.views + "\n"
          txt += " • Url : " + data.link + ""
          teks = txt1 + "```" + txt + "```"
      msg.reply(teks)
      conn.sendFile(msg.from, data.link, "", "",msg)
    
  }
}