/**
 * Dibuat oleh : Muhammad Restu
 * Recode : Zeetsu
 * ©Muhammad Restu 2021
 */

/**
 * "Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
 * Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
 * (QS ash-Shaff: 2-3).
 */
 
 module.exports = {
   name: "koboy",
   alias: ["koboy"],
   category: "game",
	 desc: "Play games",
	 isLimitGame: true,
	 async run({msg, conn, m},{q}){
	   this.tembak = this.tembak || { musuh: [], tembak: [] }
	   if(/kiri/i.test(q)){
	     let kiri = [
        ["🤠", "-", "-", "-", "-"],
        ["-", "🤠", "-", "-", "-"],
        ["-", "-", "🤠", "-", "-"],
        ["-", "-", "-", "🤠", "-"],
        ["-", "-", "-", "-", "🤠"]
       ]
       
      if(this.tembak.tembak.indexOf("🤠") == 0) {
         this.tembak.tembak = kiri[0]
      } else if(this.tembak.tembak.indexOf("🤠") == 1) {
         this.tembak.tembak = kiri[0]
      } else if(this.tembak.tembak.indexOf("🤠") == 2) {
         this.tembak.tembak = kiri[1]
      } else if(this.tembak.tembak.indexOf("🤠") == 3) {
         this.tembak.tembak = kiri[2]
      } else if(this.tembak.tembak.indexOf("🤠") == 4) {
         this.tembak.tembak = kiri[3]
      }

       const pos = this.tembak.musuh.join(" ") + "\n\n\n" + this.tembak.tembak.join(" ")
       
       if(this.tembak.musuh.indexOf("🥷") === this.tembak.tembak.indexOf("🤠")) return conn.sendMessage(msg.from, {
         text: pos,
         footer: config.namebot,
         buttons: [ 
                { buttonId: `.koboy tembak`, buttonText: { displayText: 'Tembak' }, type: 1 }
                ],
           headerType: 1 },{quoted : msg })
    
   return conn.sendMessage(msg.from, {
         text: pos,
         footer: config.namebot,
         buttons: [ 
                { buttonId: `.koboy kiri`, buttonText: { displayText: '←' }, type: 1 },
                { buttonId: `.koboy kanan`, buttonText: { displayText: '→' }, type: 1 }
                ],
           headerType: 1 },{quoted : msg })
	   } else if(/kanan/i.test(q)){
	     let kanan = [
         ["🤠", "-", "-", "-", "-"],
         ["-", "🤠", "-", "-", "-"],
         ["-", "-", "🤠", "-", "-"],
         ["-", "-", "-", "🤠", "-"],
         ["-", "-", "-", "-", "🤠"]
        ]
       if(this.tembak.tembak.indexOf("🤠") == 0) {
        this.tembak.tembak = kanan[1]
       } else if(this.tembak.tembak.indexOf("🤠") == 1) {
        this.tembak.tembak = kanan[2]
       } else if(this.tembak.tembak.indexOf("🤠") == 2) {
        this.tembak.tembak = kanan[3]
       } else if(this.tembak.tembak.indexOf("🤠") == 3) {
        this.tembak.tembak = kanan[4]
       } else if(this.tembak.tembak.indexOf("🤠") == 4) {
        this.tembak.tembak = kanan[4]
       }
       const pos = this.tembak.musuh.join(" ") + "\n\n\n" + this.tembak.tembak.join(" ")

    if(this.tembak.musuh.indexOf("🥷") === this.tembak.tembak.indexOf("🤠")) return conn.sendMessage(msg.from, {
         text: pos,
         footer: config.namebot,
         buttons: [ 
                { buttonId: `.koboy tembak`, buttonText: { displayText: 'Tembak' }, type: 1 }
                ],
           headerType: 1 },{quoted : msg })
    
   return conn.sendMessage(msg.from, {
         text: pos,
         footer: config.namebot,
         buttons: [ 
                { buttonId: `.koboy kiri`, buttonText: { displayText: '←' }, type: 1 },
                { buttonId: `.koboy kanan`, buttonText: { displayText: '→' }, type: 1 }
                ],
           headerType: 1 },{quoted : msg })
	   } else if(/tembak/i.test(q)){
	     if(this.tembak.tembak.indexOf("🤠") == this.tembak.musuh.indexOf("🥷")) {
        this.tembak = {}
        addBalance(msg.sender, 1000, balance);
        msg.reply("Kamu menang!\n\nUang += 1000" , {adReply : true})
    }
	   }else{
	  randMusuh = [
      ["🥷", "-", "-", "-", "-"],
      ["-", "🥷", "-", "-", "-"],
      ["-", "-", "🥷", "-", "-"],
      ["-", "-", "-", "🥷", "-"],
      ["-", "-", "-", "-", "🥷"]
    ]
    randAku = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]
    musuh = random(randMusuh)
    aku = random(randAku)
    
    this.tembak.musuh = musuh
    this.tembak.tembak = aku

    const pos = this.tembak.musuh.join(" ") + "\n\n\n" + this.tembak.tembak.join(" ")

   if(this.tembak.musuh.indexOf("🥷") === this.tembak.tembak.indexOf("🤠")) return conn.sendMessage(msg.from, {
         text: pos,
         footer: config.namebot,
         buttons: [ 
                { buttonId: `.koboy tembak`, buttonText: { displayText: 'Tembak' }, type: 1 }
                ],
           headerType: 1 },{quoted : msg })
    
   return conn.sendMessage(msg.from, {
         text: pos,
         footer: config.namebot,
         buttons: [ 
                { buttonId: `.koboy kiri`, buttonText: { displayText: '←' }, type: 1 },
                { buttonId: `.koboy kanan`, buttonText: { displayText: '→' }, type: 1 }
                ],
           headerType: 1 },{quoted : msg })
	   }
	 }
 }
 
 function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}