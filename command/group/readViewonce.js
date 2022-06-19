const { downloadContentFromMessage } = require("@adiwajshing/baileys")


module.exports = {
  name: "viewonce",
  alias: ["readonce","readviewonce"],
  category: "group",
  desc: "Move viewonce to media",
  isGroup: true,
  async run({conn, msg}){
    if (!msg.quoted) throw 'where\'s message?'
    if (msg.quoted.type !== 'view_once') throw 'Itu bukan pesan viewOnce'
    let m = msg.quoted.message
    let type = Object.keys(m)[0]
    let media = await downloadContentFromMessage(m[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        //return conn.sendFile(msg.from, buffer, 'media.mp4', msg.quoted.text || '', msg)
        return conn.sendMessage(msg.from, {video : buffer,caption : msg.quoted.text ? msg.quoted.text : "", withTag : true },{quoted : msg, adReply : true})
    } else if (/image/.test(type)) {
        //return conn.sendFile(msg.from, buffer, 'media.jpg', msg.quoted.text || '', msg)
        return conn.sendMessage(msg.from, {image : buffer,caption : msg.quoted.text ? msg.quoted.text : "", withTag : true},{quoted : msg, adReply : true})
    }
  }
}