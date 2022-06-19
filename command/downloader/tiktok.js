let { ttdownloader } = require("hxz-api")
let { isUrl } = require("../../lib/index")

module.exports = {
  name: 'tiktok',
  alias: ["tiktok"],
  category: "downloader",
  use: "<Url>",
  desc: "Download video on Tiktok",
  query: "Example : .tiktok https://vm.tiktok.com/ZSdXGJyst/",
  wait: true,
  isSpam: true,
  async run({conn, msg}, {q}){
    if(!q) throw "Not query Url"
    if(!isUrl(q) && q.includes("tiktok.com")) throw "link invalid"
    let result = await ttdownloader(q)
    get_result = result.nowm
    await conn.sendMessage(msg.from,{video:{url : get_result},caption : "Done NoWM"}, {quoted : msg, adReply : true})
  }
}