let { ytshorts } = require("../../lib/y2mate")
let { isUrl } = require("../../lib/index")

module.exports = {
  name: "ytshorts",
  alias: ["ytshorts"],
  category: "downloader",
  use: "<url>",
  desc: "Downloader video on You Tube",
  query: "Example : .ytshorts <Url>",
  wait: true,
  isSpam: true,
  async run({msg,conn},{q}) {
    if(q.includes("youtube.com/shorts") && !isUrl(q)) throw "Link invalid\n\nKirim link youtube shorts ny"
    let p = await ytshorts(q)
    let txt1 = "*YouTube Shorts*\n\n"
    let txt = " • Judul : " + p.title + "\n"
    txt += " • Size : " + p.size + "\n"
    txt += " • Size MP3 : " + p.size_mp3 + "\n"
    txt += " • Quality : " + p.quality + "\n"
    txt += " • Link : " + p.link + "\n\n"
    txt += "Tunggu sebentar, vidio sedang di kirim..."
    await conn.sendFile(msg.from, p.thumb, "", txt1 + "```" + txt + "```", msg)
    await conn.sendFile(msg.from, p.link, '', '', msg)
  }
}