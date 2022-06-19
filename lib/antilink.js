const { getBinaryNodeChild } = require("@adiwajshing/baileys");
const { getAdmin } = require("./index");

const cekInvite = async (conn, code) => {
	try {
		const results = await conn.query({
			tag: "iq",
			attrs: {
				type: "get",
				xmlns: "w:g2",
				to: "@g.us",
			},
			content: [{ tag: "invite", attrs: { code } }],
		});
		return results;
	} catch {
		return false;
	}
};

module.exports = async function (msg, conn){
  const { body, from, reply, sender, isGroup} = msg
  const antilink = JSON.parse(require("fs").readFileSync("./database/antilink.json"));
  const antiLink = antilink.includes(from);
  const regexlink = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;
  code = body.match(regexlink)
  const isAdmin = isGroup ? (await getAdmin(conn, msg)).includes(sender) : false;

  if(antilink && code && !isAdmin){
    code = code[0].replace("chat.whatsapp.com/", "");
    const Cheking = await conn.groupInviteCode(from);
 // if (code == Cheking) return reply("Oh shit, Remember don't send other group links other than this group");
    
    
    text = "*Group Link Detected*\n\n"
    text += "_User : @" + sender.split("@")[0] +"_\n"
    text += "_Sorry you will be kicked out of this group for breaking the rules_\n\n"
    text += "*_Best Regards " + config.namebot + "_*"
    
    await reply(text, {withTag : true})
    await require("delay")(3000);
		await conn.groupParticipantsUpdate(from, [sender], "remove").then(() => msg.reply("bye"));
    
  }
  
}