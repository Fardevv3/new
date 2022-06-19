const { isUrl } = require("../../lib/index");
const { y2mateV } = require("../../lib/y2mate");

module.exports = {
  name: "ytmp4",
  alias: ["ytmp4"],
  category: "downloader",
  use: "<url>",
  desc: "Downloader video on You Tube",
  query: "Example : .ytmp4 <Url>",
  wait: true,
  isSpam: true,
  async run({msg, conn}, {q}) {
    if(!q) throw 'Example !ytmp4 <url>'
    if(!isUrl(q) && q.includes("youtube.com")) throw 'Link invalid!!'
    let result = await y2mateV(q, '480')
    get_result = result[0]
    let txt1 = "*YouTube Downloader*\n\n"
    let txt = " • Judul : " + get_result.judul + "\n"
        txt += " • Quality : " + get_result.quality + "\n"
        txt += " • Type : " + get_result.ftype + "\n"
        txt += " • Size : " + get_result.size + "\n"
        txt += " • OutPut : " + get_result.output + "\n\n"
        txt += "Tunggu sebentar," + get_result.output + " sedang di kirim..."
        await conn.sendFile(msg.from, get_result.thumb, "", txt1 + "```" + txt + "```", msg)
        await conn.sendFile(msg.from, get_result.link, '', '', msg)
  },
};