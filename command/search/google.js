let google = require('google-it')

module.exports = {
	name: "google",
	alias: ["gs", "googlesearch"],
	category: "search",
	wait: true,
	query: `Masukkan teks yang ingin di cari`,
	async run({ msg, conn }, { q }) {
	        google({'query': q}).then(res => {
                let teks = `Google Search From : ${q}\n\n`
                for (let g of res) {
                teks += `▢ *Title* : ${g.title}\n`
                teks += `▢ *Description* : ${g.snippet}\n`
                teks += `▢ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                msg.reply(teks)
                })
			},
};
