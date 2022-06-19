let fs = require("fs")
let { exec } = require("child_process")
let { webpToVideo } = require("../../lib/webp2")

module.exports = {
  name: "toimg",
  alias: ["toimg","toimage"],
  category: "converter",
  desc: "Mengubah sticker menjadi gambar",
  isSpam: true,
  async run({msg,conn, m}){
    if(msg.quoted && /sticker/.test(msg.quoted.mtype) && !msg.quoted.text.isAnimated){
      let img = await msg.quoted.download()
      await conn.sendMessage(msg.from, { image: img, jpegThumbnail: img }, { quoted: msg, adReply:true })
    } else if(msg.quoted && /sticker/.test(msg.quoted.mtype) && msg.quoted.text.isAnimated){
      await msg.reply("_Tunggu sebentar.._")
      let img = await msg.quoted.download()
      let out = await webpToVideo(img)
      await conn.sendMessage(msg.from, { video: out, gifPlayback: /gif/i.test(m.text), gifAttribution: ~~(Math.random() * 2) }, { quoted: msg })
    } else throw "Reply sticker nya"
  }
}
