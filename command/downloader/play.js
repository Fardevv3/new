module.exports = {
  name: "play",
  alias: ["play"],
  use: "<query>",
  category: "downloader",
	desc: "Download audio/video from YouTube",
	wait: true,
	query: true,
	isSpam: true,
	async run({msg, conn}, {q, map, args}){
	  let { prefix } = map;
	  if(!q) throw "Masukan parameter Query.."
	  require('yt-search').search(q).then(async i => {
    s = i.all[0]
    txt = "❏ YouTube ❏\n\n"
    txt += '❏ ˖ֹ⇢ Title : ' + s.title + '\n'
    txt += '❏ ˖ֹ⇢ Url : ' + s.url + '\n'
    txt += '❏ ˖ֹ⇢ Id : ' + s.videoId + '\n'
    txt += '❏ ˖ֹ⇢ Upload : ' + s.ago + '\n'
    txt += '❏ ˖ֹ⇢ Views : ' + s.views 
    caption = '```' + txt + '```'
    
const buttons = [
	   { buttonId: `${prefix}ytmp3 ${s.url}` , buttonText: { displayText: 'Audio' }, type: 1 },
     { buttonId: `${prefix}ytmp4 ${s.url}`, buttonText: { displayText: 'Video' }, type: 1 }
	  ]
const buttonMessage = {
   image: {url: s.thumbnail},
    caption: caption,
    footer: "Get Music/Video",
    buttons: buttons,
    headerType: 1
}
conn.sendMessage(msg.from, buttonMessage, {quoted : msg})
	  })
	}
}