const { Image } = require("node-webpmux")
const { format } = require("util")

module.exports = {
  name: "getexif",
  alias: ["getexif"],
  desc: "Get exif in sticker",
  category: "converter",
  isMedia: {
    isSticker: true,
  },
  async run({msg,conn}){
    const { quoted } = msg;
    if(!msg.quoted) throw "Tag sticker nya.."
    if (/sticker/.test(quoted.mtype)) {
        let img = new Image()
        await img.load(await quoted.download())
        msg.reply(format(JSON.parse(img.exif.slice(22).toString())),{adReply : true})
    }
  }
}