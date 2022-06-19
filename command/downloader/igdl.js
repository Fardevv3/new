module.exports = {
	name: "instagram",
	alias: ["ig","igdl"],
	category: "downloader",
	use: "<url>",
	desc: "download video and photo from instagram",
	query: `Options:\n1. #igdl - Download Video Or Photo From Post\n\n\nExample: \n1. #igdl https://www.instagram.com/p/CbxLLgKJXOa/?utm_source=ig_web_copy_link`,
	wait: true,
	isSpam: true,
	async run({msg, conn},{args, q}){
	    let igdl = await rzky.downloader.igdl(q)
	    if(/reel/.test(q)) return await conn.sendFile(msg.from, igdl.medias[0].url,"", "*Done*", msg)
	    ngontol = igdl.medias.length > 1 ? true : false
      if(ngontol) await msg.reply("Jumlah media lebih dari 1, media akan dikirim lewat private chat (PC)\nSilahkan cek chat dari bot><!")
      for(let i of igdl.medias) {
        conn.sendFile(ngontol ? msg.sender : msg.from, i.url,"", "*Done*",msg)
      }
   }
}