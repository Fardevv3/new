const fs = require("fs")

module.exports = {
  name: "groupinfo",
  alias: ["groupinfo","grupinfo","gcinfo"],
  category: "group",
  desc: "Menampilkan isi desk dan list admin",
  isGroup: true,
  async run({msg,conn}){
    //Group Setring
    let antilink = JSON.parse(require("fs").readFileSync("./database/antilink.json"));
    let antidelete = JSON.parse(require("fs").readFileSync("./database/antidelete.json"));

    //GroupMetaData
    let data = await conn.groupMetadata(msg.from)
    let groupAdmins = data.participants.filter(p => p.admin)
    let listAdmin = groupAdmins.map((v, i) => `${shp} @${v.id.split('@')[0]}`).join('\n')
    let pp
     try {
       pp = await conn.profilePictureUrl(msg.from, "image")
     } catch {
       pp = "https://telegra.ph/file/4d5cbebc7ebff49a7b646.jpg"
     }
     
     let txt = `*-----[ GROUP INFO ]-----*

${shp} Owner Group : @${data.owner.split("@")[0]}
${shp} Id Group : ${msg.from}
${shp} Group Name : ${data.subject}
${shp} Total Member : ${data.participants.length}
${shp} Desc : \n ${data.desc?.toString() || 'unknown'}

*+ List Admin +*
${listAdmin}`

await conn.sendMessage(msg.from,{image:{url:pp},caption:txt, withTag:true},{quoted:msg})


  }
}