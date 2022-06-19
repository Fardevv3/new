module.exports = {
  name: "searchgore",
  alias: ["searchgore"],
  category: "search",
  use: "Query input",
  desc: "Search gore ",
  query: "Example : !searchgore <query>",
  wait: true,
  isSpam: true,
  async run({msg, conn}, {q}) {
    require("zxy-api").search.gore(q).then(async i => {
    let txt1 = `*G O R E*\n\n`
    let txt  = `Search : ${q}\n\n`
    for(var g of i.data){
      txt += ' • Judul : ' + g.judul + '\n'
      txt += ' • Upload : ' + g.uploader + '\n'
      txt += ' • Thumbnail : ' + g.thumb + '\n'
      txt += ' • Link : ' + g.link + '\n\n'
    }
    teks = txt1 + "```" + txt + "```"
    conn.sendFile(msg.from, i.data[0].thumb,'', teks, msg)
  })
  }
}