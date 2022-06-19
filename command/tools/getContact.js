module.exports = {
    name: 'getcontact',
    alias: ['getcontact'],
    category: "tools",
    desc: `Enter your number!\nExample : #getcontact @tag`,
    async run({msg, conn},{q}){
      let participant = msg.mentions[0]
			? msg.mentions[0]
			: msg.quoted
			? msg.quoted.sender
			: q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
			conn.sendContact(msg.from, [participant], msg);
    }
}