const fajarApi = require ("zxy-api")
const { isUrl } = require("../../lib/index");

module.exports = {
  name: "facebook",
  alias: ["fb","fbdl"],
  category: "downloader",
  use: "<url>",
  desc: "Downloader video on Facebook",
  query: "Example : !fb <url Fb>",
  wait: true,
  isSpam: true,
  async run({msg, conn},{q}){
    if(!isUrl(q) && q.includes("facebook.com")) throw 'Link invalid!!'
    let result = await fajarApi.downloader.facebook(q)
    get_result = result.resource
    let txt = "*Facebook Downloader*\n\n"
    txt += " • Title : " + get_result.text + "\n"
    txt += " • Url : " + get_result.sd + ""
    await conn.sendFile(msg.from, get_result.sd, "", txt, msg)
  },
};