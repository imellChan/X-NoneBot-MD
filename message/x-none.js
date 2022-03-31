require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('../lib/myfunc')

// Read Database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Helper
let { menu, donasi } = require('./help')

module.exports = xnone = async (xnone, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "#" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await xnone.decodeJid(xnone.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
        const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')

        // Group
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await xnone.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }

            } catch (err) {
                console.error(err)
            }
            
            // Speed
            let timestamp = speed()
            let latensi = speed() - timestamp

            // Public & Self
            if (!xnone.public) {
                if (!m.key.fromMe) return
            }

            // Push Message To Console && Auto Read
            if (m.message) {
                xnone.sendReadReceipt(m.chat, m.sender, [m.key.id])
                console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            }
	
	        // write database every 1 minute
	        setInterval(() => {
                fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
            }, 60 * 1000)

	        // reset limit every 12 hours
            let cron = require('node-cron')
            cron.schedule('00 12 * * *', () => {
                let user = Object.keys(global.db.data.users)
                let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
                for (let jid of user) global.db.data.users[jid].limit = limitUser
                console.log('Reseted Limit')
            }, {
                scheduled: true,
                timezone: "Asia/Jakarta"
            })
            
            // Anti Link
            if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
            m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
            if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
            let gclink = (`https://chat.whatsapp.com/`+await xnone.groupInviteCode(m.chat))
            let isLinkThisGc = new RegExp(gclink, 'i')
            let isgclink = isLinkThisGc.test(m.text)
            if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
            if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
            if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
            xnone.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
            }
            
            // Mute Chat
            if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
            }

            // Respon Cmd with media
            if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
            let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
            let { text, mentionedJid } = hash
            let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: xnone.user.id,
            quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, xnone.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
            }
            xnone.ev.emit('messages.upsert', msg)
            }
	    
            if (('family100'+m.chat in _family100) && isCmd) {
                kuis = true
                let room = _family100['family100'+m.chat]
                let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
                let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
                if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
                }
                let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
                let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
            return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
                xnone.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
                if (isWin || isSurender) delete _family100['family100'+m.chat]
            }

            if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
                kuis = true
                jawaban = tebaklagu[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                await xnone.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lagu`, buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebaklagu[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }

            if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
                kuis = true
                jawaban = kuismath[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }

            if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
                kuis = true
                jawaban = tebakgambar[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                await xnone.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak gambar`, buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebakgambar[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }

            if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
                kuis = true
                jawaban = tebakkata[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                await xnone.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak kata`, buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebakkata[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }

            if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
                kuis = true
                jawaban = caklontong[m.sender.split('@')[0]]
                deskripsi = caklontong_desk[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                await xnone.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lontong`, buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete caklontong[m.sender.split('@')[0]]
                delete caklontong_desk[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }

            if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
                kuis = true
                jawaban = tebakkalimat[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                await xnone.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak kalimat`, buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebakkalimat[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }

            if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
                kuis = true
                jawaban = tebaklirik[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                await xnone.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lirik`, buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebaklirik[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
	    
            if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
                kuis = true
                jawaban = tebaktebakan[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                await xnone.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak tebakan`, buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebaktebakan[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }

            //TicTacToe
            this.game = this.game ? this.game : {}
            let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
            if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
            if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
            m.reply({
            '-3': 'Game telah berakhir',
            '-2': 'Invalid',
            '-1': 'Posisi Invalid',
            0: 'Posisi Invalid',
            }[ok])
            return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            if (isSurrender) {
            room.game._currentTurn = m.sender === room.game.playerX
            isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
            room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await xnone.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await xnone.sendText(room.o, str, m, { mentions: parseMention(str) } )
            if (isTie || isWin) {
            delete this.game[room.id]
            }
            }

            //Suit PvP
            this.suit = this.suit ? this.suit : {}
            let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
            if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
            if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
            xnone.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
            delete this.suit[roof.id]
            return !0
            }
            roof.status = 'play'
            roof.asal = m.chat
            clearTimeout(roof.waktu)
            //delete roof[roof.id].waktu
            xnone.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
            if (!roof.pilih) xnone.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
            if (!roof.pilih2) xnone.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
            roof.waktu_milih = setTimeout(() => {
            if (!roof.pilih && !roof.pilih2) xnone.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
            else if (!roof.pilih || !roof.pilih2) {
            win = !roof.pilih ? roof.p2 : roof.p
            xnone.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
            }
            delete this.suit[roof.id]
            return !0
            }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
            roof.pilih = reg.exec(m.text.toLowerCase())[0]
            roof.text = m.text
            m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
            if (!roof.pilih2) xnone.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
            roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
            roof.text2 = m.text
            m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
            if (!roof.pilih) xnone.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
            clearTimeout(roof.waktu_milih)
            if (b.test(stage) && g.test(stage2)) win = roof.p
            else if (b.test(stage) && k.test(stage2)) win = roof.p2
            else if (g.test(stage) && k.test(stage2)) win = roof.p
            else if (g.test(stage) && b.test(stage2)) win = roof.p2
            else if (k.test(stage) && b.test(stage2)) win = roof.p
            else if (k.test(stage) && g.test(stage2)) win = roof.p2
            else if (stage == stage2) tie = true
            xnone.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
            delete this.suit[roof.id]
            }
            }
            
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let jid of mentionUser) {
                let user = global.db.data.users[jid]
                if (!user) continue
                let afkTime = user.afkTime
                if (!afkTime || afkTime < 0) continue
                let reason = user.afkReason || ''
                m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
            }

            if (db.data.users[m.sender].afkTime > -1) {
                let user = global.db.data.users[m.sender]
                m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
                user.afkTime = -1
                user.afkReason = ''
            }
            switch(command) {
            case 'menu':{
                let anu = await fetchJson(`https://melcanz.com/countdown?tanggal=2&bulan=4&tahun=2022&apikey=melcantik`)
                let mundur = anu.result
                let fadlyganteng = menu(ucapanWaktu, pushname, mundur, ownername, botname, prefix, jam, tanggal, latensi, runtime)
                let btn = [{
                          urlButton: {
                              displayText: '💠 Instagram',
                              url: 'https://instagram.com/iamfadlyid_'
                              }
                          }, {
                          quickReplyButton: {
                              displayText: 'Owner',
                              id: `${prefix}owner`
                              }
                          }, {
                          quickReplyButton: {
                              displayText: 'Donate',
                              id: `${prefix}tos`
                              }
                          }, {
                          quickReplyButton: {
                              displayText: 'Statistic',
                              id: `${prefix}stats`
                              }
                          }]
                xnone.send5ButImg(m.chat, fadlyganteng, global.footer, thumb, btn)
                }
                break
            case 'tos': case 'donate': case 'donasi': {
                let tosnya = donasi(prefix)
                let btns = [{
                          urlButton: {
                              displayText: 'Saweria',
                              url: 'https://saweria.co/fadlyid'
                              }
                          }]
                xnone.send5ButImg(m.chat, tosnya, global.footer, qris, btns)
                }
                break
            case 'ping': case 'botstatus': case 'statusbot': case 'stats': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
📶 Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

♨️ _NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `💾 _Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                let btns = [{
                          urlButton: {
                              displayText: '💠 Instagram',
                              url: 'https://instagram.com/iamfadlyid_'
                              }
                          }, {
                          quickReplyButton: {
                              displayText: 'Menu',
                              id: `${prefix}menu`
                              }
                          }, {
                          quickReplyButton: {
                              displayText: 'Owner',
                              id: `${prefix}owner`
                              }
                          }]
                xnone.send5ButImg(m.chat, respon, global.footer, thumb, btns)
                }
                break
            case 'owner': case 'creator': {
                xnone.sendContact(m.chat, global.owner, m)
                }
                break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                xnone.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                }
                break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += ` @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}  *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                xnone.sendTextWithMentions(m.chat, teks, m)
                }
                break
            case 'q': case 'quoted': {
                if (!m.quoted) return m.reply('Reply Pesannya!!')
                let wokwol = await xnone.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
                await wokwol.quoted.copyNForward(m.chat, true)
                }
                break
            case 'listpc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                }
                xnone.sendTextWithMentions(m.chat, teks, m)
                }
                break
            case 'listgc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                for (let i of anu) {
                    let metadata = await xnone.groupMetadata(i)
                    teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                }
                xnone.sendTextWithMentions(m.chat, teks, m)
                }
                break
            case 'listonline': case 'liston': {
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                xnone.sendText(m.chat, 'List Online:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                }
                break
            
            // Anonymous Menu
            case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: `${prefix}start`, buttonText: { displayText: 'START' }, type: 1 }
                ]
                xnone.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await xnone.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, global.footer, m)
                }
                break
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: `${prefix}keluar`, buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await xnone.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, global.footer, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: `${prefix}next`, buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: `${prefix}keluar`, buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await xnone.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.footer, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await xnone.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.footer, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: `${prefix}keluar`, buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await xnone.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, global.footer, m)
                }
                break
                }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: `${prefix}start`, buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await xnone.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await xnone.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: `${prefix}next`, buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: `${prefix}keluar`, buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await xnone.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.footer, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await xnone.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.footer, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: `${prefix}keluar`, buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await xnone.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, global.footer, m)
                }
                break
                }
            case 'keluar': case 'stop': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: `${prefix}start`, buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await xnone.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await xnone.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave')
                break
                }
            
            // Group Menu
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await xnone.groupInviteCode(m.chat)
                xnone.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
                }
                break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await xnone.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await xnone.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                }
                break
            case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await xnone.downloadAndSaveMediaMessage(quoted)
                await xnone.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await xnone.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await xnone.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await xnone.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await xnone.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: `${prefix}group open`, buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: `${prefix}group close`, buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await xnone.sendButtonText(m.chat, buttons, `Mode Group`, global.footer, m)

                }
                }
                break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'open'){
                await xnone.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'close'){
                await xnone.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: `${prefix}editinfo open`, buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: `${prefix}editinfo close`, buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await xnone.sendButtonText(m.chat, buttons, `Mode Edit Info`, global.footer, m)

                }
                }
                break
            case 'kick': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await xnone.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'add': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await xnone.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'hidetag': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                xnone.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                let teks = ` *👥 Tag All*\n\n`
                for (let mem of participants) {
                teks += `➲ ${q ? q : ''} @${mem.id.split('@')[0]}\n`
                }
                xnone.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: `${prefix}antilink on`, buttonText: { displayText: 'Active' }, type: 1 },
                        { buttonId: `${prefix}antilink off`, buttonText: { displayText: 'Not active' }, type: 1 }
                    ]
                    await xnone.sendButtonText(m.chat, buttons, `Mode Antilink`, global.footer, m)
                }
                }
                break
            case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${xnone.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${xnone.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: `${prefix}mute on`, buttonText: { displayText: 'Active' }, type: 1 },
                        { buttonId: `${prefix}mute off`, buttonText: { displayText: 'Non Active' }, type: 1 }
                    ]
                    await xnone.sendButtonText(m.chat, buttons, `Mute Bot`, global.footer, m)
                }
                }
                break
            case 'promote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await xnone.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'demote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await xnone.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'vote': {
                if (!m.isGroup) throw mess.group
                if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
                if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
                m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
                vote[m.chat] = [q, [], []]
                await sleep(1000)
                upvote = vote[m.chat][1]
                devote = vote[m.chat][2]
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up Vote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: global.footer,
                buttons: buttonsVote,
                headerType: 1
            }
            xnone.sendMessage(m.chat, buttonMessageVote)
	    }
            break
        case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up Vote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: global.footer,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            xnone.sendMessage(m.chat, buttonMessageDevote)
	}
            break
        case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up Vote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: global.footer,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            xnone.sendMessage(m.chat, buttonMessageUpvote)
	        }
            break
        case 'cekvote':
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


© ${xnone.user.id}`
            xnone.sendTextWithMentions(m.chat, teks_vote, m)
            break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
            }
            break

        // Owner Menu
        case 'chat': {
            if (!isCreator) throw mess.owner
            if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
            if (args[0] === 'mute') {
                xnone.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'unmute') {
                xnone.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'archive') {
                xnone.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'unarchive') {
                xnone.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'read') {
                xnone.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'unread') {
                xnone.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'delete') {
                xnone.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            }
            break
        case 'join': {
            if (!isCreator) throw mess.owner
            if (!text) throw 'Masukkan Link Group!'
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
            m.reply(mess.wait)
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await xnone.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
        case 'leave': {
            if (!isCreator) throw mess.owner
            await xnone.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
        case 'block': {
            if (!isCreator) throw mess.owner
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await xnone.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
        case 'unblock': {
            if (!isCreator) throw mess.owner
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await xnone.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
        case 'bcgc': case 'bcgroup': {
            if (!isCreator) throw mess.owner
            if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
            let getGroups = await xnone.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anu = groups.map(v => v.id)
            m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
            for (let i of anu) {
                await sleep(1500)
                let btn = [{
                          urlButton: {
                              displayText: 'Follow Sekarang !',
                              url: 'https://instagram.com/iamfadlyid_'
                              }
                          }]
                let txt = `${text}`
                xnone.send5ButImg(i, txt, global.footer, global.thumb, btn)
            }
            m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
        case 'bc': case 'broadcast': case 'bcall': {
            if (!isCreator) throw mess.owner
            if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
            let anu = await store.chats.all().map(v => v.id)
            m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		    for (let yoi of anu) {
		        await sleep(1500)
		        let btn = [{
		                  urlButton: {
                              displayText: 'Follow Sekarang !',
                              url: 'https://instagram.com/iamfadlyid_'
                              }
                          }]
                let txt = `${text}`
                xnone.send5ButImg(i, txt, global.footer, global.thumb, btn)
            }
            m.reply('Sukses Broadcast')
            }
            break
        case 'setppbot': {
            if (!isCreator) throw mess.owner
            if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
            if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
            if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
            let media = await xnone.downloadAndSaveMediaMessage(quoted)
            await xnone.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
            m.reply(mess.success)
            }
            break
        case 'setexif': case 'exif': {
            if (!isCreator) throw mess.owner
            if (!text) throw `Example : ${prefix + command} packname|author`
            global.packname = text.split("|")[0]
            global.author = text.split("|")[1]
            m.reply(`Exif berhasil diubah menjadi\n\n Packname : ${global.packname}\n Author : ${global.author}`)
            }
            break
        
            
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
    sat = JSON.stringify(sul, null, 2)
    bang = util.format(sat)
        if (sat == undefined) {
            bang = util.format(sul)
        }
        return m.reply(bang)
}
try {
    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
    m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
    let evaled = await eval(budy.slice(2))
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    await m.reply(evaled)
} catch (err) {
    await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
    if(err) return m.reply(err)
    if (stdout) return m.reply(stdout)
})
}
			
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
    if (/^.*(next|leave|start)/.test(m.text)) return
    if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
    let other = [room.a, room.b].find(user => user !== m.sender)
    m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
        contextInfo: {
            ...m.msg.contextInfo,
            forwardingScore: 0,
            isForwarded: true,
            participant: other
        }
    } : {})
}
return !0
}

if (isCmd && budy.toLowerCase() != undefined) {
    if (m.chat.endsWith('broadcast')) return
    if (m.isBaileys) return
    let msgs = global.db.data.database
    if (!(budy.toLowerCase() in msgs)) return
    xnone.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}

}
    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
