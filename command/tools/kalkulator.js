module.exports = {
  name: "kalkulator",
  alias: ["kalkulator","calc"],
  category: "tools",
  desc: "Kalkulator:\n• Perkalian\n• Pengurangan\n• Pembagian\n• Penambahan",
  query: `Example : .kalkulator 1+1\n\nCategory :\n• [ - ] = Pengurangan\n• [ * ] = Perkalian\n• [ + ] = Penambahan\n• [ / ] = Pembagian`,
  use: "Example : .kalkulator 1*3",
  async run({conn, m, msg},{q}){
    let id = msg.chat
    this.math = this.math ? this.math : {}
    if (id in this.math) {
      clearTimeout(this.math[id][3])
      delete this.math[id]
      msg.reply('Hmmm...ngecheat?')
    }
  let val = q
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    msg.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  }
}