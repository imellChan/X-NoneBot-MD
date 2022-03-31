exports.menu = (ucapanWaktu, pushname, mundur, ownername, botname, prefix, jam, tanggal, latensi, runtime) => {
    return`${ucapanWaktu} ${pushname}

Hitung Mundur Bulan Ramadhan
${mundur}

👑 Creator : ${ownername}
🤖 Bot Name : ${botname}
📍 Prefix : ( ${prefix} )
🌎 Language : Javascript
🗄️ Lib : Baileys-MD
⌚ Time : ${jam}
📆 Date : ${tanggal}
📶 Speed : ${latensi.toFixed(4)} second
⏳ Runtime :
${runtime(process.uptime()}

*「 Information 」*
 • ${prefix}ping
 • ${prefix}owner
 • ${prefix}menu
 • ${prefix}donate
 • ${prefix}delete
 • ${prefix}infochat
 • ${prefix}quoted
 • ${prefix}listpc
 • ${prefix}listgc
 • ${prefix}listonline

*「 Anonymous Menu 」*
 • ${prefix}anonymous
 • ${prefix}start
 • ${prefix}leave
 
*「 Group Menu 」*
 • ${prefix}linkgroup
 • ${prefix}ephemeral
 • ${prefix}setppgc
 • ${prefix}setname
 • ${prefix}setdesc
 • ${prefix}group
 • ${prefix}editinfo
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}hidetag
 • ${prefix}tagall
 • ${prefix}antilink
 • ${prefix}mute
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}vote
 • ${prefix}devote
 • ${prefix}upvote
 • ${prefix}cekvote
 • ${prefix}hapusvote

*「 Owner Menu 」*
 • ${prefix}chat
 • ${prefix}join
 • ${prefix}leave
 • ${prefix}block
 • ${prefix}unblock
 • ${prefix}bcgc
 • ${prefix}broadcast
 • ${prefix}setppbot
 • ${prefix}exif

*「 Group Menu 」*
> X-None Team
> Dika Ardnt
> Fadly ID
> Mamad
> Adiwajshing/Baileys
> Penyedia Module
`
}

exports.donasi = (pushname, ownernomor) => {
    return`\t\t\t\t*💰「 DONATE 」💰*

Hai ${pushname}👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 0895379169488 (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownernomor} (Owner)
`
}
