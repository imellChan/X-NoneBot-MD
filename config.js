const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	xnonekey: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key', // masukin apikey disini
}

// Owner
global.owner = ['62895379169488','6285867933269','62895324463608']
global.ownernomer = '62895379169488'
global.premium = ['62895379169488']
global.ownername = 'Fadly ID'
global.botname = 'X-NoneBot MD'
global.footer = '© X-None Team'
global.email = 'xnoneteam@gmail.com'
global.ig = 'https://instagram.com/iamfadlyid_'
global.region = 'Antartika'

// Keperluan buttons
global.myweb = 'https://xnoneteam.my.id/'
global.sc = 'https://github.com/DikaArdnt/Hisoka-Morou'

// Wm
global.packname = 'Created'
global.author = 'By X-None Bot'

// Thumb & Image random
global.thumb = fs.readFileSync('./media/x-none.jpg')
global.pp_video = fs.readFileSync('./media/x-none.mp4')
global.qris = fs.readFileSync('./media/qris.jpg')

/*
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
*/

// Lainnya
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

// Mess wait & Premium
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    endGLimit: 'Limit Harian Game Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitharian = "25"
global.limitgame = "25"
global.limitawal = {
    premium: "Infinity",
    free: 15
}

// Logs update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
