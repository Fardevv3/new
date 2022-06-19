let yts = require("yt-search")

module.exports = {
  name: "ytsearch",
  alias: ["yts","ytsearch"],
  category: "search",
  use: "Query input",
  desc: "Search on youtube",
  query: "Example : .ytsearch <query>",
  wait: true,
  isSpam: true,
  async run({conn, msg}, {q}) {
    if(!q) throw "Example : .ytsearch kontol bapak kau pecah"
    let i = await yts(q)
    let txt = `YouTube Search\n\nSearch in ${q}\nUntuk mengambil media, Silahkan reply pesan dengan Contoh :\n!getmusic <urutan>\n!getvideo <urutan>\n\n\n`
     n = 0
     for(let s of i.all){
       txt += `No.${n+=1}\n`
       txt += 'Title : ' + s.title + '\n'
       txt += 'Url : ' + s.url + '\n'
       txt += 'Id : ' + s.videoId + '\n'
       txt += 'Upload : ' + s.ago + '\n'
       txt += 'Views : ' + s.views + '\n\n'
       }
       teks = '```' + txt + '```'
       await conn.sendFile(msg.from, i.all[0].thumbnail, "",teks,msg)
  },
};