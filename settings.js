/* 

 No Enc ? Buy Ke Tele > https://t.me/Xskycode

*/

const chalk = require("chalk");
const fs = require("fs");

global.owner = "6282144895398"
global.namaOwner = "koru ell Buwok"
global.mode_public = false

global.linkChannel = "https://whatsapp.com/channel/0029Vb6HTyy3GJP3qLtjMc0j"
global.idChannel = "120363419032409389@newsletter"
global.linkGrup = "-"
global.thumbnail = "https://files.catbox.moe/u67oy2.jpg"

global.dana = "-"
global.ovo = "Tidak tersedia"
global.gopay = "Tidak tersedia"
global.qris = "https://files.catbox.moe/wri0uz.jpg"

global.JedaPushkontak = 5000
global.JedaJpm = 5000

global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://server.ricotasya.my.id"
global.apikey = "ptla_xZZxSITraBdGqPT0Ge4nRb3HxLOZW9yX0oDM82J3" // Isi api ptla
global.capikey = "ptlc_TroIQEI72IEJRtMD2ZomZ1CV7Oeoi0ufEyWSWedle" // Isi api ptlc


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blue(">> Update File :"), chalk.black.bgWhite(`${__filename}`))
delete require.cache[file]
require(file)
})