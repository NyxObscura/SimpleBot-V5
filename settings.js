/*

  !- Credits By Skyzopedia
  https://wa.me/6285624297894
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '6285810820809'
global.versi = version
global.namaOwner = "VinnXD"
global.packname = 'Bot WhatsApp'
global.botname = 'Simple Bot V5'
global.botname2 = 'Simple Bot V5'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/6285810820809"
global.linkGrup = "-"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VavOzFy8KMqqMvMnOW1k"
global.idSaluran = "120363378035303962@newsletter"
global.namaSaluran = "VinnXD Official"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = "OK2127481"
global.apiOrderKuota = "315305117359893002127481OKCTDA9D1B1F44CA76C257AE19662CF6783E"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214513090556854690303UMI51440014ID.CO.QRIS.WWW0215ID20243618266290303UMI5204541153033605802ID5916ALDITA OK21274816009PURWOREJO61055411262070703A016304F789"

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "simplebotz85"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "085754675168"
global.ovo = "085754675168"
global.gopay = "085754675168"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://img101.pixhost.to/images/369/551696826_rizz.jpg", 
reply: "https://img101.pixhost.to/images/369/551696826_rizz.jpg", 
logo: "https://img101.pixhost.to/images/369/551696826_rizz.jpg", 
qris: "https://img101.pixhost.to/images/241/549209562_rizz.jpg"
}

//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://panel.rizzhosting.xpanelprivate.my.id"
global.apikey = "ptla_KjF1pUyQvV3A2Qx99bHeFrRQNhZUNfiEXZStBXwVGVI" //ptla
global.capikey = "ptlc_OEIhX6yGMeqwM7oomMkRqpOt243LfAJdZ9vAaVocGAa" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://private.skyzopedia.us.kg"
global.apikeyV2 = "ptla_lfucQxgxJ2q9YARtJmIBMqE0nbAP0DqgULZV4XyTepP" //ptla
global.capikeyV2 = "ptlc_6HPcjlup1PXA1U7AxMq5dA5s2D612xs7j93Pqd743rK" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk owner bot!",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
