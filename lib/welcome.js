const fs = require("fs");

module.exports = async (conn, msg) => {
	require("moment").locale("id");
	let localOnly = JSON.parse(require("fs").readFileSync("./database/localonly.json"));
  let local = localOnly.includes(msg.id);
	let groupData = await conn.groupMetadata(msg.id);
	let participant = msg.participants;
	let dataLeft = db.cekDatabase("left", "id", msg.id) || { id: "" };
	let dataWelcome = db.cekDatabase("welcome", "id", msg.id) || { id: "" };
	if (msg.action == "add") global.statParticipant = true;
	for (let i of participant) {
		let ppimg;
		try {
			ppimg = await conn.profilePictureUrl(i, "image");
		} catch {
			ppimg = config.thumb;
		}
		if (msg.action == "add" && dataWelcome.id.includes(msg.id)) {
		    if(local && i.startsWith('212') || i.startsWith('91') || i.startsWith('92') || i.startsWith('1') || i.startsWith('60') || i.startsWith('65') || i.startsWith('265')){
		      luar = `*Sorry @${i.split("@")[0]}⁩, this group is only for indonesian people and you will removed automatically.*`
		      await conn.sendMessage(msg.id,{text : luar, mentions : [i]})
		      await conn.groupParticipantsUpdate(msg.id, [i], "remove")
		  }
		  let teks = dataWelcome.teks.replace("@ownergc", `${groupData.owner.split("@")[0]}`).replace("@creation",require("moment")(new Date(parseInt(groupData.creation) * 1000)).format("DD MMM YYYY HH:mm:ss")).replace("@user", `@${i.split("@")[0]}`).replace("@desc", groupData.desc.toString() || "no description").replace("@subject", groupData.subject) 
			return conn.sendMessage(msg.id, {
				image: { url: ppimg },
				withTag: true,
				caption:teks},{adReply : true});
		} else if (msg.action == "remove" && dataLeft.id.includes(msg.id)) {
		  let txt = dataLeft.teks.replace("@ownergc", `${groupData.owner.split("@")[0]}`).replace("@creation",require("moment")(new Date(parseInt(groupData.creation) * 1000)).format("DD MMM YYYY HH:mm:ss")).replace("@user", `@${i.split("@")[0]}`).replace("@desc", groupData.desc.toString() || "no description").replace("@subject", groupData.subject) 
			return conn.sendMessage(msg.id, {
				image: { url: ppimg },
				withTag: true,
				caption:txt},{adReply:true});
		}
	}
};