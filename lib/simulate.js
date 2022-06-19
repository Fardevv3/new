const fs = require("fs")

const welcome = async(mek, conn) => {
  require("moment").locale("id");
  let groupData = await conn.groupMetadata(mek.id.from);
	let sender = mek.id.sender;
	let dataWelcome = db.cekDatabase("welcome", "id", mek.id.from) || { id: "" };
		let ppimg;
		try {
			ppimg = await conn.profilePictureUrl(sender, "image");
		} catch {
			ppimg = config.thumb;
		}
		await conn.sendMessage(mek.id.from, {image: { url: ppimg },withTag: true,caption: 
		dataWelcome.teks.replace("@ownergc", `${groupData.owner.split("@")[0]}`).replace("@creation",require("moment")(new Date(parseInt(groupData.creation) * 1000)).format("DD MMM YYYY HH:mm:ss")).replace("@user", `@${sender.split("@")[0]}`).replace("@desc", groupData.desc.toString() || "no description").replace("@subject", groupData.subject) +`${dataWelcome.lastUpdate ? `\n\n*Last Modified:* ${require("moment")(dataWelcome.lastUpdte).format("dddd, DD/MM/YYYY")}`: ""}`,},{adReply : true});
}

const left = async(mek, conn) => {
  require("moment").locale("id");
  let groupData = await conn.groupMetadata(mek.id.from);
	let sender = mek.id.sender;
	let dataLeft = db.cekDatabase("left", "id", mek.id.from) || { id: "" };
		let ppimg;
		try {
			ppimg = await conn.profilePictureUrl(sender, "image");
		} catch {
			ppimg = config.thumb;
		}
		
		await conn.sendMessage(mek.id.from, {image: { url: ppimg },withTag: true,caption:
					dataLeft.teks.replace("@ownergc", `${groupData.owner.split("@")[0]}`).replace("@creation",require("moment")(new Date(parseInt(groupData.creation) * 1000)).format("DD MMM YYYY HH:mm:ss")).replace("@user", `@${sender.split("@")[0]}`).replace("@desc", groupData.desc.toString() || "no description")
						.replace("@subject", groupData.subject) +`${dataLeft.lastUpdate ? `\n\n*Last Modified:* ${require("moment")(dataLeft.lastUpdte).format("dddd, DD/MM/YYYY")}`: ""}`,},{adReply : true});
  
}

async function simulate(action, m, conn){
  simul = {
    id: {
      sender: m.sender,
      from: m.from,
    },
  }
  if(action == "welcome") welcome(simul, conn)
  else
  if(action == "left") left(simul, conn)
}

module.exports = { welcome, left, simulate }