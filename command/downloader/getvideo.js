let { y2mateV } = require("../../lib/y2mate");

module.exports = {
  name: "getvideo",
  alias: ["getvideo"],
  category: "downloader",
  use: "Urutan",
  desc: "Downloader audio on You Tube Search",
  query: "Example : .getvideo <nomor>",
  wait: true,
  isSpam: true,
  async run({conn, msg}, {q}) {
    try{
      let { quoted } = msg
      if(!q) throw "Example : .getvideo 1"
      if(!msg.quoted) throw "Reply pesan"
      if(!msg.quoted.isSelf) throw "Reply pesan BOT"
      let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
      if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
      let quality = '480'
      let media = await y2mateV(urls[q - 1],quality)
      i = media[0]
      if (i.size >= 100000) return msg.reply('File Melebihi Batas '+util.format(i))
      conn.sendFile(msg.from, i.thumb, '',`*YouTube*\n\nJudul   : ${i.judul}\nQuality : ${i.quality}\nType    : ${i.type}\nSize    : ${i.size}\nOutPut  : ${i.output}`, msg)
      conn.sendFile(msg.from, i.link, '','',msg)
    } catch (e) {
      console.log(e)
      msg.reply(e)
    }
  },
};