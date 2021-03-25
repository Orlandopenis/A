const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');

const fs = require("fs")
const axios = require('axios')
const request = require('request')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()

const { BarBarApi, ZeksApi, TechApi, TobzApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const publik = JSON.parse(fs.readFileSync('./database/json/public.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'))
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'))
const adminNumber = JSON.parse(fs.readFileSync('./database/json/admin.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
let {
instagram, yt, groupLink
} = setting

const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { color, bgcolor } = require('./lib/color')
const { bahasa, help, donasi, limitend, limitcount, bottt } = require('./Fxc7/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:NYX\n'
            + 'ORG:ALBEDO BOT;\n'
            + 'TEL;type=CELL;type=VOICE;waid=5519998707564:+55 (19) 99870-7564\n'
            + 'END:VCARD'
       
prefix = "#"
name = "ALBEDO BOT"
rdaftar = "「 ᴀʟʙᴇᴅᴏ ʙᴏᴛ 」                       ⊱ᴄʀᴇᴀᴛᴏʀ: ɴʏx"
rmenu = "「 ᴀʟʙᴇᴅᴏ ʙᴏᴛ 」                       ⊱ᴄʀᴇᴀᴛᴏʀ: ɴʏx"
botinfo = "「 ᴀʟʙᴇᴅᴏ ʙᴏᴛ 」                       ⊱ᴄʀᴇᴀᴛᴏʀ: ɴʏx"
limitt = 696969
memberLimit = 0
premium = ["558388440499@s.whatsapp.net","558196404969@s.whatsapp.net"]

const ban = JSON.parse(fs.readFileSync('./database/json/banned.json'))

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const denz = new WAConnection()
	denz.logger.level = 'warn'
	console.log(banner.string)
	denz.on('qr', () => {
		console.log(color('[','red'), color('!','yellow'), color(']','red'), color('Escaneie o QR Code abaixo para se conectar com a Albedo.', 'green'))
	})

	fs.existsSync('./Fxc7.json') && denz.loadAuthInfo('./Fxc7.json')
	denz.on('connecting', () => {
		start('2', 'A Albedo esta aguardando a conexão...')
	})
	denz.on('open', () => {
		success('2', 'A Albedo foi summonada com Succeso.')
	})
	await denz.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Fxc7.json', JSON.stringify(denz.base64EncodedAuthInfo(), null, '\t'))

	denz.on('group-participants-update', async (anu) => {
		if (!isWelkom.includes(anu.jid)) return
		try {
			const mdata = await denz.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `╔═━──━▒ *_BOAS VINDAS_*\n╠≽️ *_Olá @${num.split('@')[0]}!_*\n╠≽️ *_Seja muito bem vindo_*\n╠≽️ *_Leia a descrição hehe!_*\n╠≽️ *_Tenha uma boa conduta!_*\n╠≽️ *_Prefix do Bot:_* #\n╚═━──━▒ *_BOAS VINDAS_*`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `╔═━──━▒ *_PROMOTE_*\n╠≽️ *_Olá @${num.split('@')[0]}!_*\n╠≽️ *_Você foi promovido!_*\n╠≽️ *_Agora você é um ADM._*\n╠≽️ *_Parabéns hehe..._*\n╚═━──━▒ *_PROMOTE_*`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `╔═━──━▒ *_DEMOTE_*\n╠≽️ *_Olá @${num.split('@')[0]}!_*\n╠≽️ *_Você foi demotado!_*\n╠≽️ *_Você perdeu seu ADM..._*\n╠≽️ *_F..._*\n╚═━──━▒ *_DEMOTE_*`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `╔═━──━▒ *_SAÍDA_*\n╠≽️ *_Adeus_* @${num.split('@')[0]}👋\n╠≽️ *_Espero vê-lo logo!_*\n╚═━──━▒ *_SAÍDA_*`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	})

		denz.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	denz.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const DnsBot = ["5519998707564@s.whatsapp.net"] // ubah aja gapapa
			const farhan = mek.message.conversation
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = denz.contacts[nameReq] != undefined ? denz.contacts[nameReq].vname || denz.contacts[nameReq].notify : undefined

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('America/Brasília').format('HH:mm:ss')
			const jam = moment.tz('America/Brasília').format('HH:mm')
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Far = args.join(' ')
			const isCmd = body.startsWith(prefix)
			denz.chatRead(from)
			

			mess = {
				wait: '✓ *_Seu pedido está sendo processado, evite flood, caso ocorra... ~você será bloqueado~ !!_*',
				success: '✓ *_Tudo ocorreu bem, seu pedido foi enviado_**',
				error: {
					stick: '*ɢᴀɢᴀʟ, ᴛᴇʀᴊᴀᴅɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ꜱᴀᴀᴛ ᴍᴇɴɢᴋᴏɴᴠᴇʀꜱɪ ɢᴀᴍʙᴀʀ ᴋᴇ ꜱᴛɪᴄᴋᴇʀ*',
					Iv: '*ᴍᴀᴀꜰ ʟɪɴᴋ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ!*'
				},
				only: {
					group: '✘ *_Este comando só poderá ser realizado em grupos!_*',
					benned: '✘ *_Você está banido, portanto seus comandos não serão respondidos._*',
					ownerG: '✘ *_Opa! este comando é apenas para o dono do grupo portanto você não poderá usar!_*',
					ownerB: '✘ *_Opa! este comando é apenas para o dono do bot, nyx, portanto você não poderá usar!_*',
					premium: '*ᴍᴀᴀꜰ ꜰɪᴛᴜʀ ɪɴɪ ᴋʜᴜꜱᴜꜱ ᴜꜱᴇʀ ᴩʀᴇᴍɪᴜᴍ!*',
					userB: `✘ *_Olá! Aqui é a Albedo, estou passando para avisar que você não está registrado no meu banco de dados, utilize #registrar seunome para poder utilizar meus comandos!_*`,
					admin: '✘ *_Opa! este comando é apenas para os administradores do grupo portanto você não poderá usar!_*',
					Badmin: '✘ *_Este comando só poderá ser realizado caso eu tenha admin!',
					publikG: `ᴍᴀᴀꜰ ʙᴏᴛ ꜱᴇᴋᴀʀᴀɴɢ ꜱᴜᴅᴀʜ ᴅɪᴩʀɪᴠᴀᴛᴇ ᴏʟᴇʜ ᴏᴡɴᴇʀ\nᴜɴᴛᴜᴋ ʟᴇʙɪʜ ᴊᴇʟᴀꜱɴʏᴀ ᴋᴇᴛɪᴋ \n*${prefix}infobot*`
				}
			}

			const botNumber = denz.user.jid
			const ownerNumber = ["5519998707564@s.whatsapp.net"] // owner number ubah aja
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await denz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const totalchat = await denz.chats.all()
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false 
			const isPublic = isGroup ? publik.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender)
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				denz.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				denz.sendMessage(hehe, teks, text)
	        }
				const sendPtt = (teks) => {
		    denz.sendMessage(from, audio, mp3, {quoted:mek})
			}
			const costum = (pesan, tipe, target, target2) => {
			denz.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? denz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitt - lmt.limit
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        denz.sendMessage(from, limitcount(limitCounts), text, { quoted : mek})
                    }
                                }
                        if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberLimit) {
					    denz.sendMessage(from, `ᴍᴀᴀғ ᴅɴꜱ ʙᴏᴛ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴀꜱᴜᴋ ɢʀᴏᴜᴘ ᴋᴀʀɴᴀ ᴍᴇᴍʙᴇʀ ɢʀᴏᴜᴘ *${groupMetadata.subject}* ᴛɪᴅᴀᴋ ᴍᴇᴍᴇɴᴜʜɪ ʟɪᴍɪᴛ ᴍᴇᴍʙᴇʀ\n\nᴍɪɴɪᴍᴀʟ ᴍᴇᴍʙᴇʀ *${memberLimit}*`, text)
					setTimeout( () => {
                            denz.groupLeave(from)
                            }, 100)
		setTimeout( () => {
		denz.updatePresence(from, Presence.composing)
					}, 10)
		setTimeout( () => {
		reply(`ᴍᴀᴀғ ᴅɴꜱ ʙᴏᴛ ꜱᴇɢᴇʀᴀ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ ɢʀᴏᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}
					
		       } catch (err) { console.error(err)  }
 	 
 
        }
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitt ) {
                  position = true
                    denz.sendMessage(from, limitend(pushname2), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname2}* ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ`)
		denz.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ*`)
		}, 100)
		setTimeout( () => {
		denz.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		reply(`*_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nᴍᴀᴀғ *${pushname2}* ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
        }
        if (adminNumber.includes(messagesLink)){
        	hasil = `        ────────────────
ʜᴇɪ *${pushname2}* ᴄᴏʙᴀ ᴋᴇᴛɪᴋ *${prefix}menu*
        ────────────────`
denz.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "ketik #menu kak", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
}
		
     	   if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

                switch(command) {
				case 'menu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			wew = fs.readFileSync('dnsnew.jpg')
				dmenu = `╔═━──━▒ *_ALBEDO BOT_*
╠≽️ *_N°:_* wa.me/5519998707564
╠≽️ *_Owner:_* 𝐍𝐘𝐗
╠≽️ *_Prefix:_* ${prefix}
╠≽️ *_Usuários:_* ${user.length}
╚═━──━▒ *_ALBEDO BOT_*
╔═━──━▒ *_USER INFO's_*
╠≽️ *_Name:_* ${pushname2}
╠≽️ *_Limite Total:_* ${limitt}
╠≽️ *_Situação:_* Registrado √
╚═━──━▒ *_USER INFO's_*
╔═━──━▒ *_ALBEDO BOT INFO_*
╠≽️ *_#report_*
╠≽️ *_${prefix}info_*
╠≽️ *_${prefix}owner_*
╠≽️ *_${prefix}ping_*
╠≽️ *_${prefix}limite_*
╠≽️ *_${prefix}users_*
╠≽️ *_${prefix}banlist_*
╚═━──━▒ *_ALBEDO BOT INFO_*
╔═━──━▒ *_MENU's_*
╠≽️ *_#STICKERMENU_* ✓
╠≽️ *_#FUNMENU_*  
╠≽️ *_#IMAGEMENU_* ✓✓
╠≽️ *_#MAKERMENU_* ✓✓
╠≽️ *_#MEDIAMENU_*
╠≽️ *_#ENCMENU_* ✓✓
╠≽️ *_#SOUNDMENU_* ✓
╠≽️ *_#GROUPMENU_* ✓✓
╠≽️ *_#NSFWMENU_* ✓✓
╠≽️ *_#OWNERMENU_* 
╚═━──━▒ *_MENU's_*`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
case 'stickermenu':
case 'stikermenu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			wew = fs.readFileSync('dnsnew.jpg')
			dmenu = `╔═━──━▒ *_STICKER MENU_*
╠≽️ *_${prefix}ttp_*
╠≽️ *_${prefix}ttp2_*
╠≽️ *_${prefix}trigger_*
╠≽️ *_${prefix}wasted_*
╠≽️ *_${prefix}gay_*
╠≽️ *_${prefix}sticker_*
╠≽️ *_${prefix}stickergif_*
╚═━──━▒ *_STICKER MENU_*`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
case 'imagemenu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			wew = fs.readFileSync('dnsnew.jpg')
			dmenu = `╔═━──━▒ *_IMAGE MENU_*
╠≽️ *_${prefix}phcomment_*
╠≽️ *_${prefix}phlogo_*
╠≽️ *_${prefix}ocean_*
╠≽️ *_${prefix}space_*
╠≽️ *_${prefix}gtav_*
╠≽️ *_${prefix}drawing_*
╠≽️ *_${prefix}rdrop_*
╠≽️ *_${prefix}nightb_*
╠≽️ *_${prefix}wanted_*
╠≽️ *_${prefix}laptop_*
╠≽️ *_${prefix}blackw_*
╠≽️ *_${prefix}crossgun_*
╠≽️ *_${prefix}cyberpunk_*
╚═━──━▒ *_IMAGE MENU_*`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
case 'mediamenu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			wew = fs.readFileSync('dnsnew.jpg')
			dmenu = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏╔═━──━▒ *_MEDIA MENU_*
╠≽️ *_${prefix}play_* [TXT]
╠≽️ *_${prefix}pinterest_*
║❏ ${prefix}ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
║❏ ${prefix}ᴏᴄʀ
║❏ ${prefix}ɪᴍɢ2ᴜʀʟ
║❏ ${prefix}ᴛᴏᴍᴘ3
║❏ ${prefix}ɪɢꜱᴛᴀʟᴋ
║❏ ${prefix}ɪɴꜱᴛᴀᴠɪᴅ
║❏ ${prefix}ɪɴꜱᴛᴀɪᴍɢ
║❏ ${prefix}ɪɴꜱᴛᴀꜱᴛᴏʀʏ 
║❏ ${prefix}ᴘʟᴀʏᴍᴘ3
║❏ ${prefix}ғʙ 
║❏ ${prefix}ꜱɴᴀᴄᴋ 
║❏ ${prefix}ʏᴛᴍᴘ3
║❏ ${prefix}ʏᴛᴍᴘ4
║❏ ${prefix}ᴊᴏᴏx
║❏ ${prefix}ɪɴғᴏᴀʟᴀᴍᴀᴛ 
║❏ ${prefix}ᴘʟᴀʏꜱᴛᴏʀᴇ
║❏ ${prefix}ꜱᴍᴜʟᴇ
║❏ ${prefix}ꜱꜱᴡᴇʙ
║❏ ${prefix}ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
║❏ ${prefix}ᴜʀʟ2ɪᴍɢ
║❏ ${prefix}ᴛᴏɪᴍɢ
║❏ ${prefix}ᴛɪᴋᴛᴏᴋ
║❏ ${prefix}ғᴏᴛᴏᴛɪᴋᴛᴏᴋ
║❏ ${prefix}ᴋʙʙɪ
║❏ ${prefix}ᴡᴀɪᴛ
║❏ ${prefix}ᴄʜᴏʀᴅ 
║❏ ${prefix}ᴡɪᴋɪ 
║❏ ${prefix}ʙʀᴀɪɴʟʏ 
║❏ ${prefix}ʀᴇꜱᴇᴘᴍᴀꜱᴀᴋᴀɴ 
║❏ ${prefix}ʙᴇʀɪᴛᴀʜᴏᴀx
║❏ ${prefix}ᴍᴀᴘ 
║❏ ${prefix}ғɪʟᴍ 
║❏ ${prefix}ᴊᴀʀᴀᴋ
║❏ ${prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ
║❏ ${prefix}sʜᴏᴘᴇᴇ
║❏ ${prefix}ɪɴғᴏɢᴇᴍᴘᴀ
║❏ ${prefix}ɪɴғᴏɴᴏᴍᴏʀ
║❏ ${prefix}ᴀᴘᴋᴘᴜʀᴇ
║❏ ${prefix}ᴍᴏᴅᴅʀᴏɪᴅ
║❏ ${prefix}ʜᴀᴘᴘʏᴍᴏᴅ
║❏ ${prefix}ɪɴғᴏᴄᴜᴀᴄᴀ 
║❏ ${prefix}ᴊᴀᴍᴅᴜɴɪᴀ 
║❏ ${prefix}ᴛʀᴇɴᴅᴛᴡɪᴛ
║❏ ${prefix}ɢᴏᴏɢʟᴇ
╙───々`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
case 'soundmenu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			wew = fs.readFileSync('dnsnew.jpg')
			dmenu = `╔═━──━▒ *_AÚDIO MENU_*
╠≽️ *_${prefix}ᴇɴɢʀᴏssᴀʀ_*
╠≽️ *_${prefix}ᴛᴜᴘᴀɪ_*
╠≽️ *_${prefix}ʙᴀꜱꜱ_*
╠≽️ *_${prefix}ꜱʟᴏᴡ_*
╠≽️ *_${prefix}ғᴀꜱᴛ_*
╠≽️ *_${prefix}tts pt_*
╚═━──━▒ *_AÚDIO MENU_*`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
case 'groupmenu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			wew = fs.readFileSync('dnsnew.jpg')
			dmenu = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏╔═━──━▒ *_GROUP MENU_*
╠≽️ *_${prefix}grupo_* 
╠≽️ *_${prefix}setfoto_*
╠≽️ *_${prefix}infogrupo_*
╠≽️ *_${prefix}add_*
╠≽️ *_${prefix}kick_*
╠≽️ *_${prefix}promote_*
╠≽️ *_${prefix}demote_*
╠≽️ *_${prefix}setname_*
╠≽️ *_${prefix}setdesc_*
╠≽️ *_${prefix}notificar_*
╠≽️ *_${prefix}everyone_*
╠≽️ *_${prefix}admin_*
╠≽️ *_${prefix}modoanime_*
╠≽️ *_${prefix}modonsfw_*
╠≽️ *_${prefix}simih_*
╠≽️ *_${prefix}antilink_*
╠≽️ *_${prefix}antibadword_*
╠≽️ *_${prefix}bwlist_*
╠≽️ *_${prefix}boasvindas_*
╚═━──━▒ *_GROUP MENU_*`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
case 'makermenu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			wew = fs.readFileSync('dnsnew.jpg')
			dmenu = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏╔═━──━▒ *_MAKER MENU_*
╠≽️ *_${prefix}burnpaper_*
╠≽️ *_${prefix}matrix_*
╠≽️ *_${prefix}8bit_*
╠≽️ *_${prefix}3d_*
╠≽️ *_${prefix}glowneon_*
╠≽️ *_${prefix}gsuggest_*
╠≽️ *_${prefix}candlemug_*
╠≽️ *_${prefix}lovemss_*
╠≽️ *_${prefix}paperglass_*
╠≽️ *_${prefix}romance_*
╠≽️ *_${prefix}shadow_*
╠≽️ *_${prefix}glitch_*
╠≽️ *_${prefix}coffe_*
╠≽️ *_${prefix}candy_*
╠≽️ *_${prefix}hpotter_*
╠≽️ *_${prefix}woodblock_*
╠≽️ *_${prefix}galaxtext_*
╠≽️ *_${prefix}galaxstyle_*
╠≽️ *_${prefix}bpink_*
╠≽️ *_${prefix}pupycute_*
╠≽️ *_${prefix}hologram_*
╠≽️ *_${prefix}metallogo_*
╠≽️ *_${prefix}ice_*
╠≽️ *_${prefix}space_*
╚═━──━▒ *_MAKER MENU_*`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
case 'funmenu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			wew = fs.readFileSync('dnsnew.jpg')
			dmenu = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏╔═━──━▒ *_FUN MENU_*
╠≽️ *_${prefix}caderno_*
╠≽️ *_${prefix}casal_*
╠≽️ *_${prefix}chance_*
╠≽️ *_${prefix}maistop_*
╠≽️ *_${prefix}letra_*
╠≽️ *_${prefix}checkip_*
╠≽️ *_${prefix}mensfake_*
╠≽️ *_${prefix}tierlist_*
║❏ ${prefix}ʜɪʟɪʜ
║❏ ${prefix}ᴄᴇᴄᴀɴ
║❏ ${prefix}ᴄᴏɢᴀɴ
║❏ ${prefix}ϙᴜᴏᴛᴇꜱ
║❏ ${prefix}ᴋᴀᴛᴀʙɪᴊᴀᴋ
║❏ ${prefix}ᴅᴀʀᴋᴊᴏᴋᴇꜱ
║❏ ${prefix}ʙᴜᴄɪɴ
║❏ ${prefix}ᴘᴀɴᴛᴜɴ
║❏ ${prefix}ᴋᴀᴛᴀᴅɪʟᴀɴ
║❏ ${prefix}ᴋᴀᴛᴀᴄɪɴᴛᴀ
║❏ ${prefix}ʀᴀɴᴅᴏᴍᴋᴘᴏᴘ
║❏ ${prefix}ʜᴇᴋᴇʀʙᴜᴄɪɴ
║❏ ${prefix}ᴋᴀᴛᴀɪʟʜᴀᴍ
║❏ ${prefix}ᴘᴀꜱᴀɴɢᴀɴ 
║❏ ${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ 
║❏ ${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ
║❏ ${prefix}ᴀʀᴛɪɴᴀᴍᴀ 
║❏ ${prefix}ᴘᴇʀꜱᴇɴɢᴀʏ 
║❏ ${prefix}ᴘʙᴜᴄɪɴ 
║❏ ${prefix}ʙᴘғᴏɴᴛ 
║❏ ${prefix}ᴛᴇxᴛꜱᴛʏʟᴇ 
║❏ ${prefix}ᴍɪᴍᴘɪ
║❏ ${prefix}ʀᴇᴀᴅᴍᴏʀᴇ
║❏ ${prefix}ᴘᴜɪꜱɪɪᴍɢ
║❏ ${prefix}ᴀꜱᴜᴘᴀɴ
║❏ ${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
║❏ ${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
║❏ ${prefix}ғᴀᴍɪʟʏ100
║❏ ${prefix}ᴍᴇᴍᴇɪɴᴅᴏ
╚═━──━▒ *_FUN MENU_*`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
case 'nsfwmenu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			wew = fs.readFileSync('dnsnew.jpg')
			dmenu = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏╔═━──━▒ *_NSFW MENU_*
╠≽️ *_${prefix}nhentai_* [CODE]
╠≽️ *_${prefix}trap_*
╠≽️ *_${prefix}blowjob_*
╠≽️ *_${prefix}yaoi_*
╠≽️ *_${prefix}ecchi_*
╠≽️ *_${prefix}hentai_*
╠≽️ *_${prefix}ahegao_*
╠≽️ *_${prefix}hololewd_*
╠≽️ *_${prefix}sideoppai_*
╠≽️ *_${prefix}animefeets_*
╠≽️ *_${prefix}animebooty_*
╠≽️ *_${prefix}animethighss_*
╠≽️ *_${prefix}hentaiparadise_*
╠≽️ *_${prefix}animearmpits_*
╠≽️ *_${prefix}hentaifemdom_*
╠≽️ *_${prefix}lewdanimegirls_*
╠≽️ *_${prefix}biganimetiddies_*
╠≽️ *_${prefix}animebellybutton_*
╠≽️ *_${prefix}hentai4everyone_*
╚═━──━▒ *_NSFWMENU_*`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
case 'encmenu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			wew = fs.readFileSync('dnsnew.jpg')
			dmenu = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏╔═━──━▒ *_ENCURTADORES_*
╠≽️ *_${prefix}shrtco_*
╠≽️ *_${prefix}tinyurl_*
╠≽️ *_${prefix}bitly_*
╚═━──━▒ *_ENCURTADORES_*`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
case 'ownermenu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (!isOwner) return reply(mess.only.ownerB)
			wew = fs.readFileSync('dnsnew.jpg')
			dmenu = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏╓───「 *_ᴏᴡɴᴇʀ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
║❏ ${prefix}ʀᴇᴍᴏᴠᴇᴘʀᴇᴍ
╠≽️${prefix}ᴀᴅᴅʙᴡ *(OFF)*
╠≽️${prefix}ᴅᴇʟᴇᴛᴇʙᴡ *(OFF)*
║❏ ${prefix}ᴀᴅᴅʙᴜᴄɪɴ
║❏ ${prefix}ᴀᴅᴅᴀᴜᴅɪᴏ
║❏ ${prefix}ᴀᴅᴅꜱᴛɪᴄᴋᴇʀ
║❏ ${prefix}ꜱᴇᴛᴍᴇᴍʟɪᴍɪᴛ
║❏ ${prefix}ʀᴇꜱᴇᴛʟɪᴍɪᴛ
║❏ ${prefix}ꜱᴇᴛʟɪᴍɪᴛ
║❏ ${prefix}ꜱᴇᴛᴘʀᴇғɪx
╠≽️${prefix}ғᴏᴛᴏʙᴏᴛ
║❏ ${prefix}ʙᴄ
║❏ ${prefix}ʙᴄɢᴄ
║❏ ${prefix}ʙᴀɴ
║❏ ${prefix}ᴜɴʙᴀɴ
╠≽️${prefix}ʟɪᴍᴘᴀʀ
╠≽️${prefix}ᴅᴇʟᴇᴛᴇ
╠≽️${prefix}ᴄʟᴏɴᴀʀ
╠≽️${prefix}sᴀɪʀ
╙───々`
denz.sendMessage(from, wew, image, {quoted: mek, caption: dmenu})
break
            case 'help':
brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
denz.sendMessage(from, help(name), text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "「 ᴀʟʙᴇᴅᴏ ʙᴏᴛ 」                       ⊱ ᴄʀᴇᴀᴛᴏʀ : ɴʏx", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
    	    break
            case 'gifstiker':
				case 'stiker':
				case 'sticker':
				case 'gifsticker':
				case 'stickergif':
				case 'stikergif':
				case 'sgif':
				case 'sticker':
				case 's':
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						if (isLimit(sender)) return reply(limitend(pushname2))
						reply(mess.wait)
						const ran= getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								denz.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "「 ᴀʟʙᴇᴅᴏ ʙᴏᴛ 」                       ⊱ ᴄʀᴇᴀᴛᴏʀ : ɴʏx", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						const ran= getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`\`\`\`Gagal, pada saat mengkonversi ${tipe} ke stiker\`\`\``)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								denz.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "「 ᴀʟʙᴇᴅᴏ ʙᴏᴛ 」                       ⊱ ᴄʀᴇᴀᴛᴏʀ : ɴʏx", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								denz.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "「 ᴀʟʙᴇᴅᴏ ʙᴏᴛ 」                       ⊱ ᴄʀᴇᴀᴛᴏʀ : ɴʏx", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
							})
						})
					} else {
						reply(`✘ *_Coloque o comando na legenda da foto ou responda a imagem utilizando o comando._*`)
					}
					await limitAdd(sender) 
					break 
					case 'shopee':
                      if (isBanned) return reply(mess.only.benned)
			        if (!isUser) return reply(mess.only.userB)
			    hmml3 = await fetchJson(`https://pencarikode.xyz/api/shopee?search=${body.slice(8)}&apikey=pais`)
                     buffer = await getBuffer(`https://e.top4top.io/p_1886uvsdz0.jpg`)
                     hasilbg3 = `*Nama* : *_${hmml3.result[0].nama}_*\n*Harga* : *_${hmml3.result[0].harga}_*\n*Terjual* : *_${hmml3.result[0].terjual}_*\n*Tempat* : *_${hmml3.result[0].lokasi}_*\n*Link* : *_${hmml3.result[0].link_produk}_*\n*Deskripsi* : *_${hmml3.result[0].deskripsi}_**Nama* : *_${hmml3.result[1].nama}_*\n*Harga* : *_${hmml3.result[1].harga}_*\n*Terjual* : *_${hmml3.result[1].terjual}_*\n*Tempat* : *_${hmml3.result[1].lokasi}_*\n*Link* : *_${hmml3.result[1].link_produk}_*\n*Deskripsi* : *_${hmml3.result[1].deskripsi}_*`
                    denz.sendMessage(from, buffer, image, {quoted: mek, caption: hasilbg3})
                    await limitAdd(sender)
                    break
// newmenu
		case 'ocean': 				
				case 'water':
if (args.length < 1) return reply(`Contoh: ${prefix}comando nyx/bot`)
gl = `${body.slice(7)}`
gel1 = gl.split("/")[0];
gel2 = gl.split("/")[1];
reply(mess.wait)
litsh = await getBuffer(`https://videfikri.com/api/textmaker/underwater/?text=${gel1}`, {method: 'get'})
denz.sendMessage(from, litsh, image, {quoted: mek})
await limitAdd(sender)
break
// last
					case 'toimg':
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'nihhh'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return denz.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return denz.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						denz.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						denz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return denz.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						denz.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						denz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return denz.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return denz.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 6285928xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					denz.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						denz.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						denz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						denz.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						denz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'apkpure':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
case 'cyberpunk':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
   denz.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  denz.sendMessage(from, pok, image, {
quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
  case 'katadilan': 	
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotandilan?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'wasted':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
denz.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('✘ *_Coloque o comando na legenda da foto ou responda a imagem utilizando o comando._*')
}
break

case 'drawing':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehqe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehqe, image, {quoted:mek})
} else {
  reply('✘ *_Coloque o comando na legenda da foto ou responda a imagem utilizando o comando._*')
}
break

case 'gay':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
denz.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('✘ *_Coloque o comando na legenda da foto ou responda a imagem utilizando o comando._*')
}
break

case 'nightb':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'laptop':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, dhehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'blackw':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehet, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'rdrop':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehre, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'sketch':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehae, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'crossgun':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  haehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, haehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break


case 'wanted':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  ds = `${body.slice(7)}`
  tex1 = ds.split("/")[0];
  tex2 = ds.split("/")[1];
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hsehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=${tex1}&text2=${tex2}`)
 denz.sendMessage(from, hsehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'gtav':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
case 'cecan':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  tels = body.slice(5)
  denz.updatePresence(from, Presence.composing)
  ty = ["ulzhang girl",
"cewek cantik",
"cewe hijab",
"cute girl",
"cewe rusia cantik",
"cewe jepang cantik",
"cecan indo"]
  nk = ty[Math.floor(Math.random() * ty.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  denz.sendMessage(from, pok, image, {
quoted: mek, caption: `Gimana ?`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
  case 'cogan':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  denz.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  denz.sendMessage(from, pok, image, {
quoted: mek, caption: `Wah ganteng kek gua`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
			case 'casal':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
					case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'engrossar':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
              case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=3/4,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fast':
                  if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await denz.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				denz.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
					case 'maistop':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `✓ *_O Cara mais top do grupo é o:_* @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
					case 'tierlist':
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
                        member = []
                        const exea = groupMembers
                        const exeb = groupMembers
                        const exec = groupMembers
                        const exed = groupMembers
                        const exee = groupMembers
                        const numeroum = exea[Math.floor(Math.random() * exea.length)]
                        const numerodois = exeb[Math.floor(Math.random() * exeb.length)]
                        const numerotres = exec[Math.floor(Math.random() * exec.length)]
                        const numeroquatro = exed[Math.floor(Math.random() * exed.length)]
                        const numerocinco = exee[Math.floor(Math.random() * exee.length)]
                        teks = `╔═━──━▒ *_TIERLIST_*\n╠≽️ *_SSS:_*\n╠≽️ @${numeroum.jid.split('@')[0]}\n╠≽️ *_SS:_*\n╠≽️ @${numerodois.jid.split('@')[0]}\n╠≽️ *_S:_*\n╠≽️ @${numerotres.jid.split('@')[0]}\n╠≽️ *_A:_*\n╠≽️ @${numeroquatro.jid.split('@')[0]}\n╠≽️ *_B:_*\n╠≽️ @${numerocinco.jid.split('@')[0]}\n╚═━──━▒ *_TIERLIST_*`
                        member.push(numeroum.jid)
                        member.push(numerodois.jid)
                        member.push(numerotres.jid)
                        member.push(numeroquatro.jid)
                        member.push(numerocinco.jid)
                        mentions(teks, member, true)
                                        break
				case 'brainly':
					if (!isUser) return reply(mess.only.userB)
									
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(limitend(pushname2))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '───────────────────────\n'
					for (let Y of res.data) {
						teks += `\n*「 _ʙʀᴀɪɴʟʏ_ 」*\n\n*➸ ᴘᴇʀᴛᴀɴʏᴀᴀɴ*\n ${Y.pertanyaan}\n\n*➸ ᴊᴀᴡᴀʙᴀɴ*\n ${Y.jawaban[0].text}\n────────────────────\n`
					}
					denz.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
                await limitAdd(sender)
				break 
				case 'registrar':
					denz.updatePresence(from, Presence.composing)
					if (isUser) return reply('*✘ *_Você já está registrado!_*')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
					try {
					ppimg = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `╔═━──━▒ *_REGISTRO_*\n╠≽️ *_Nome:_* ${pushname2}\n╠≽️ *_Núm:_* ${sender.split("@")[0]}\n╠≽️ *_Data:_* ${date}\n╠≽️ *_Horário:_* ${time}\n╠≽️ *_Registro bem sucedido √_*\n╠≽️ *_Usuários Totais:_* ${user.length}\n╚═━──━▒ *_REGISTRO_*`
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    daftarimg = await getBuffer(ppimg)
					denz.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					break 
				case 'bahasa':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				denz.sendMessage(from, bahasa(prefix), text, {quoted: mek})
				brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				break 
				case 'ttp2':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				                    if (args.length == 0) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ttp3?apikey=RiuApikey&text=${txt}`)
                    denz.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
                    case 'phcomment':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} o criador desse bot é lindo/Nyx_*`)
                    ds = `${body.slice(11)}`
                    tex1 = ds.split("/")[0];
                    tex2 = ds.split("/")[1];
                    reply(mess.wait)
                    litsh = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=RiuApikey&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${tex1}&username=${tex2}`, {method: 'get'})
                    denz.sendMessage(from, litsh, image, {quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'ttp':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
				emoji = body.slice(5)
                    try {
                        emoji = encodeURI(emoji)
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${emoji}`)
                    denz.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
                    case 'emoji2img': 
                                  if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply('Cade o emoji')
				gatauda = body.slice(11)
				reply(mess.wait)
				buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${gatauda}`, {method: 'get'})
				denz.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                    case 'phlogo':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx/albedo bot._*`)
                    ds = `${body.slice(8)}`
                    tex1 = ds.split("/")[0];
                    tex2 = ds.split("/")[1];
                    reply(mess.wait)
                    litsh = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/pornhub?apikey=RiuApikey&text1=${tex1}&text2=${tex2}`, {method: 'get'})
                    denz.sendMessage(from, litsh, image, {quoted: mek})
                    await limitAdd(sender)
                    break
                    case '3d':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
                    todi = body.slice(4)
                    reply(mess.wait)
                    litsh = await getBuffer(`http://api.lolhuman.xyz/api/textprome/box3d?apikey=RiuApikey&text=${todi}`, {method: 'get'})
                    denz.sendMessage(from, litsh, image, {quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'ice':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
                    todi = body.slice(5)
                    reply(mess.wait)
                    litsh = await getBuffer(`http://api.lolhuman.xyz/api/textprome/icecold?apikey=RiuApikey&text=${todi}`, {method: 'get'})
                    denz.sendMessage(from, litsh, image, {quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'space':
                    if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx/albedo bot._*`)
gl = `${body.slice(7)}`
gel1 = gl.split("/")[0];
gel2 = gl.split("/")[1];
reply(mess.wait)
litsh = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/space?apikey=RiuApikey&text1=${gel1}&text2=${gel2}`, {method: 'get'})
denz.sendMessage(from, litsh, image, {quoted: mek})
await limitAdd(sender)
break
				case 'info':
					me = denz.user
					user.push(sender)
					uptime = process.uptime()
					teks = `╔═━──━▒ *_BOT INFO's_*\n╠≽️ *_Bot Name:_* ${me.name}\n╠≽️ *_Owner:_*  NYX\n╠≽️ *_Prefix:_* ${prefix} \n╠≽️ *_Totais de Banidos:_* ${ban.length}\n╚═━──━▒ *_BOT INFO's_*`
					const daca = fs.readFileSync('dnsnew.jpg');
				    denz.sendMessage(from, daca, image, {quoted: mek, caption: teks})
				    brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})               
					break 
				case 'users':
					denz.updatePresence(from, Presence.composing) 
									
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `╔═━──━▒ *_USER's_*\n`
					teks += `╠≽️ *_Usuários Totais:_* ${user.length}\n╚═━──━▒ *_USER's_*`
					denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'banlist':
				ben = '╔═━──━▒ *_BAN LIST_*\n'
				ben += `╠≽️ *_Banidos Totais:_* ${ban.length}\n`
				ben += `╚═━──━▒ *_BAN LIST_*`
					denz.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'ban':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(`✘ *_Mencione alguém que deseja banir_*`)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
					reply(`╔═━──━▒ *_BANIMENTO_*\n╠≽️ *_User:_*\n╠≽️ ${bnnd}\n╚═━──━▒ *_BANIMENTO_*`)
					break
				case 'unban':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(`✘ *_Mencione alguém que deseja desbanir_*`)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
					reply(`╔═━──━▒ *_DESBANIMENTO_*\n╠≽️ *_User:_*\n╠≽️ ${bnnd}\n╚═━──━▒ *_DESBANIMENTO_*`)
					break
case 'burnpaper':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
todi = body.slice(11)
reply(mess.wait)
pper = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${todi}`)
denz.sendMessage(from, pper, image, {quoted: mek})
await limitAdd(sender)
break
case '8bit':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
ds = `${body.slice(6)}`
tex1 = ds.split("/")[0];
tex2 = ds.split("/")[1];
reply(mess.wait)
brikff = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tex1}&text2=${tex2}`, {method: 'get'})
denz.sendMessage(from, brikff, image, {quoted: mek})
await limitAdd(sender)
break
case 'glowneon':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
tekas = body.slice(10)
reply(mess.wait)
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
denz.sendMessage(from, glown, image, {quoted: mek})
await limitAdd(sender)
break
case 'gsuggest':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx/albedo/bot._*`)
du = `${body.slice(10)}`
ted1 = du.split("/")[0];
ted2 = du.split("/")[1];
ted3 = du.split("/")[2];
reply(mess.wait)
sugetg = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, {method: 'get'})
denz.sendMessage(from, sugetg, image, {quoted: mek})
await limitAdd(sender)
break
case 'candlemug':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
ddu = body.slice(11)
reply(mess.wait)
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
denz.sendMessage(from, clmug, image, {quoted: mek})
await limitAdd(sender)
break
case 'lovemss':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
lop = body.slice(9)
reply(mess.wait)
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
denz.sendMessage(from, lepms, image, {quoted: mek})
await limitAdd(sender)
break
case 'matrix':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
mug = body.slice(8)
reply(mess.wait)
mflowg = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${mug}`)
denz.sendMessage(from, mflowg, image, {quoted: mek})
await limitAdd(sender)
break
case 'paperglass':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
papg = body.slice(12)
reply(mess.wait)
gelas = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
denz.sendMessage(from, gelas, image, {quoted: mek})
await limitAdd(sender)
break
case 'romance':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
roce = body.slice(9)
reply(mess.wait)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
denz.sendMessage(from, roma, image, {quoted: mek})
await limitAdd(sender)
break
case 'shadow':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
sdow = body.slice(8)
reply(mess.wait)
shan = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`)
denz.sendMessage(from, shan, image, {quoted: mek})
await limitAdd(sender)
break
case 'glitch':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx/albedo bot._*`)
gl = `${body.slice(8)}`
gel1 = gl.split("/")[0];
gel2 = gl.split("/")[1];
reply(mess.wait)
litsh = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${gel1}&text2=${gel2}`, {method: 'get'})
denz.sendMessage(from, litsh, image, {quoted: mek})
await limitAdd(sender)
break
case 'coffe':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
kop = body.slice(7)
reply(mess.wait)
ppi = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`)
denz.sendMessage(from, ppi, image, {quoted: mek})
await limitAdd(sender)
break
case 'candy':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
cndy = body.slice(7)
reply(mess.wait)
prmen = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy/?text=${cndy}`)
denz.sendMessage(from, prmen, image, {quoted: mek})
await limitAdd(sender)
break
case 'hpotter':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
hpter = body.slice(9)
reply(mess.wait)
helpter = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${hpter}`)
denz.sendMessage(from, helpter, image, {quoted: mek})
await limitAdd(sender)
break
case 'woodblock':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
woblk = body.slice(11)
reply(mess.wait)
gblok = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${woblk}`)
denz.sendMessage(from, gblok, image, {quoted: mek})
await limitAdd(sender)
break
case 'galaxtext':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
glaktx = body.slice(11)
reply(mess.wait)
galax = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=RiuApikey&text=${glaktx}`)
denz.sendMessage(from, galax, image, {quoted: mek})
await limitAdd(sender)
break
case 'pupycute':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
puki = body.slice(10)
reply(mess.wait)
cute = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=RiuApikey&text=${puki}`)
denz.sendMessage(from, cute, image, {quoted: mek})
await limitAdd(sender)
break
case 'galaxstyle':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
gelay = body.slice(12)
reply(mess.wait)
style = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=RiuApikey&text=${gelay}`)
denz.sendMessage(from, style, image, {quoted: mek})
await limitAdd(sender)
break
case 'hologram':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
gram = body.slice(10)
reply(mess.wait)
holo = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=RiuApikey&text=${gram}`)
denz.sendMessage(from, holo, image, {quoted: mek})
await limitAdd(sender)
break
case 'metallogo':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
metal = body.slice(11)
reply(mess.wait)
metlog = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=RiuApikey&text=${metal}`)
denz.sendMessage(from, metlog, image, {quoted: mek})
await limitAdd(sender)
break
case 'bpink':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} nyx._*`)
black = body.slice(7)
reply(mess.wait)
pink = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/blackpink?apikey=RiuApikey&text=${black}`)
denz.sendMessage(from, pink, image, {quoted: mek})
await limitAdd(sender)
break
				case 'addprem':
					denz.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					premium = addpremium
					reply(`*Berhasil Menambahkan ${premium} Ke database User Premium*`)
					break
				case 'removeprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`Berhasil Remove wa.me/${rprem} Dari User Premium`)
					break
				case 'readmore':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('teks nya mana om?')
					var kls = body.slice(9)
					var has = kls.split("/")[0];
					var kas = kls.split("/")[1];
					if (args.length < 1) return reply(mess.blank)
					denz.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
					break
				case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				  var obj = []
				   fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj))
				  await reply(`LIMIT BERHASIL DI RESET`)
				break
					case 'limite':
				var found = false
                    const limidat = JSON.parse(fs.readFileSync('./database/json/limit.json'))
                    for (let lmt of limidat) {
                        if (lmt.id === sender) {
                            let limitCounts = limitt - lmt.limit
                            if (limitCounts <= 0) return reply(from,`✘ *_O seu limite chegou ao fim, espere o reset diário para usar os comandos novamente_*`, id)
                            await reply(`╔═━──━▒ *_LIMITE_*\n╠≽️ *_Restantes:_* ${limitCounts}\n╚═━──━▒ *_LIMITE_*`)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id : sender, limit : 1 }
                        limit.push(obj);
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(limit, 1));
                        await reply(`LIMIT ANDA ${limitCounts}`)
                    }
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja gan Jangan Video')
					}
					await limitAdd(sender) 
					break 
					 case 'trigger':
					if (!isUser) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await denz.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                denz.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('✘ *_Coloque o comando na legenda da foto ou responda a imagem utilizando o comando._*')
                                          }
                                             break

				case 'img2url':
			if (!isUser) return reply(mess.only.userB)
							
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  denz.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('727e7e43f6cda1dfb85d888522fd4ce1', media)
                .then(data => {
                    var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     denz.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })
            await limitAdd(sender) 	
            break  

                 case 'kalkulator':
					if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
				   				
				   if (isLimit(sender)) return reply(limitend(pushname2))
				     if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    denz.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender) 	
				    break 
				case 'owner':
                 denz.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 denz.sendMessage(from, '✘ *_Esté é o contato do meu dono! Não faça nada desnecessário no pv._*',text, { quoted: mek} )
                 break
                case 'mensfake':
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
           				
				if (args.length < 1) return reply(`✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} @pessoa/mensagemfake/resposta_*`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("/")[0];
					var target = gh.split("/")[1];
					var bot = gh.split("/")[2];
					denz.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break

				case 'infogroup':
				case 'groupinfo':
				case 'infogrupo':
				case 'grupoinfo':
				case 'infogc':
				if (isBanned) return reply(mess.only.benned)  
				 				
				if (!isUser) return reply(mess.only.userB)
                denz.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                try {
					ppUrl = await denz.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
			    buffer = await getBuffer(ppUrl)
		        denz.sendMessage(from, buffer, image, {quoted: mek, caption: `╔═━──━▒ *_GROUP INFO_*\n╠≽️ *_Nome:_* ${groupName}\n╠≽️ *_Membros Totais:_* ${groupMembers.length}\n╠≽️ *_Admin Totais:_* ${groupAdmins.length}\n╚═━──━▒ *_GROUP INFO_*`})
                break
				case 'trendtwit':
					denz.updatePresence(from, Presence.composing) 
                     if (!isUser) return reply(mess.only.userB)
               				
                     if (isLimit(sender)) return reply(limitend(pushname2))
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					reply(mess.wait)
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=AKyAJwYdUGbO8jO3CGsK`, {method: 'get'})
                   if (!isUser) return reply(mess.only.userB)
             				
                   if (isLimit(sender)) return reply(limitend(pushname2))
                   if (isBanned) return reply(mess.only.benned)
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'linkgroup':
				case 'linkgrupo':
				case 'linkgc':
				case 'linkdogrupo':
				case 'grouplink':
				case 'grupolink':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await denz.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\n╔═━──━▒ *_LINK REQUEST_*\n╠≽️ *_Nome do Grupo:_*\n╠≽️ *${groupName}*\n╠≽️ *_Pedido feito por:_*\n╠≽️ *${sender.split("@")[0]}*\n╚═━──━▒ *_LINK REQUEST_*`
				    denz.sendMessage(from, yeh, text, {quoted: mek})
			        break
				case 'notificar':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var value = body.slice(11)
					var group = await denz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					denz.sendMessage(from, options, text)
					break
					case 'gantengcek':
				case 'cekganteng':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					denz.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					break
				case 'cantikcek':
				case 'cekcantik':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya KakaðŸ‘','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai CantikðŸŠ','70% Hai UkhtyðŸŠ','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum UkhtyðŸŠ','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih SemangatðŸŠ']
					const tik = can[Math.floor(Math.random() * can.length)]
					denz.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					break
				case 'sair': 
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					setTimeout( () => {
					denz.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					denz.updatePresence(from, Presence.composing) 
					denz.sendMessage(from, '✘ *_Estarei me retirando do grupo, Adeus a todos!_*', text) // ur cods
					}, 0)
					break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                denz.groupUpdateSubject(from, `${body.slice(9)}`)
                denz.sendMessage(from, `✓ *_O nome do grupo foi alterado com sucesso para:_* ${body.slice(9)}`, text, {quoted: mek})
                break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                denz.groupUpdateDescription(from, `${body.slice(9)}`)
                denz.sendMessage(from, `✓ *_A descrição do grupo foi alterada com sucesso para:_* ${body.slice(9)}`, text, {quoted: mek})
                break
				case 'tts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return denz.sendMessage(from, `Kode bahasanya mana gan?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja *${prefix}bahasa*`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return denz.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan gan')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal gan:(')
							reply(mess.wait)
							denz.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender) 
					break  
				case 'translate':
				case 'translete':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				    if (args.length < 1) return denz.sendMessage(from, 'Kode Bahasanya???', text, {quoted: mek})
				    if (args.length < 2) return denz.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: mek})
				    ts = body.slice(11)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
				    reply(mess.wait)
				    translate = `Text Asli: *${body.slice(11)}*\n\nHasil: *${anu.text}*`
				    denz.sendMessage(from, translate, text, {quoted: mek})
				   await limitAdd(sender)
				   break 
				case 'ts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				    if (args.length < 1) return denz.sendMessage(from, 'Kode Bahasanya???', text, {quoted: mek})
				    if (args.length < 2) return denz.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: mek})
				    ts = body.slice(4)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
				    reply(mess.wait)
				    ts = `Text Asli: *${body.slice(7)}*\n\nHasil: *${anu.text}*`
				    denz.sendMessage(from, ts, text, {quoted: mek})
				   await limitAdd(sender)
				   break 
				case 'setfoto':
	            if (isBanned) return reply(mess.only.benned)    
	            if (!isUser) return reply(mess.only.userB)
	      				
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await denz.downloadAndSaveMediaMessage(mek)
                    await denz.updateProfilePicture (from, media)
                    reply(`✓ *_A foto do grupo foi alterada com sucesso._*`)
                    break
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                hasil = `╔═━──━▒ *_VELOCIDADE_*\n╠≽️ *_Speed:_* ${latensi.toFixed(4)} segundos\n╚═━──━▒ *_VELOCIDADE_*`
                denz.sendMessage(from, hasil, text, { quoted: mek})
                    break
//FUN MENU
         case 'letra':
         if (isBanned) return reply(mess.only.benned)   				
                if (!isUser) return reply(mess.only.userB)
denz.updatePresence(from, Presence.composing)
tels = body.slice(7)
reply(mess.wait)
  anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${tels}`, {method: 'get'})
  reply(`╔═━──━▒ *_LYRIC_*\n╠≽️ *_Letra da Música:_*\n╠≽️ ${body.slice(7)}\n╚═━──━▒ *_LYRIC_* iີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້ີ້ີ້ີ້ີ້ິ້ິີີີີີີ່່່່່່້້້່ີີ່້ິູຸູິິ໌ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້ິ້໌໌໌ີ້ຼຼຼຼຼຼຼຼຼຼຼຼ໋໋໋໋໋໋໋໊໊໊໊໊໊ີ້\n${anu.result.lirik}`) 
  break
  case 'chance':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					rate = body.slice(8)
					ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
					const te = ratee[Math.floor(Math.random() * ratee.length)]
					denz.sendMessage(from, '✓ *_As chances '+rate+' são de '+ te+'_*', text, { quoted: mek })
					break 
                case 'report':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply(`✘ *_Descreva o erro, por exemplo: "#report o comando sticker não está funcionando!"_*`)
          				
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return denz.sendMessage(from, '✘ *_Desculpe, seu relatório é muito grande, máximo de 300 caracteres._*', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*_「 ALBEDO BOT 」_*\n\n*_「 Assunto 」_* Report\n*_「 Autor 」_* @${nomor.split("@s.whatsapp.net")[0]}\n*_「 Descrição 」_* ${pesan}`

                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    denz.sendMessage('5519998707564@s.whatsapp.net', options, text, {quoted: mek})
                    reply('✓ *_Seu relatório foi enviado ao proprietário, relatórios falsos não serão respondidos e ocasionará no seu ban!_*')
                    break
				case 'memeindo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					denz.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					break 
				case 'ssweb':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${body.slice(7)}`
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=tablet&url=${teks}&apiKey=${BarBarApi}`)
					ssweb = await getBuffer(anu.result)
					denz.sendMessage(from, ssweb, image, {quoted: mek})
					await limitAdd(sender)
					break 
					//NSFW MENU
					
					case 'nhentai':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    if (!isAnime) return reply('✘ *_ᴏ ᴍᴏᴅᴏ ᴀɴɪᴍᴇ ᴇsᴛᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ!_*')				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply('✘ *_ᴏ ᴍᴏᴅᴏ ɴsғᴡ ᴇsᴛᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ !_*')
					henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=RiuApikey`)
                    get_result = get_result.result
                    buffer = await getBuffer(get_result)
                    denz.sendMessage(from, buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    await limitAdd(sender)
                    break
                    case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    if (!isAnime) return reply('✘ *_ᴏ ᴍᴏᴅᴏ ᴀɴɪᴍᴇ ᴇsᴛᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ!_*')				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply('✘ *_ᴏ ᴍᴏᴅᴏ ɴsғᴡ ᴇsᴛᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ !_*')
						reply(mess.wait)
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=RiuApikey`)
                    denz.sendMessage(from, buffer, image, { quoted: mek})
                    break
                    
                    //NÃO SEI
                    
				case 'hilih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Teksnya mana gan?')
					anu = await fetchJson(`https://api.i-tech.id/tools/hilih?key=${TechApi}&kata=${body.slice(7)}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'chord':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Mau Nyari Chord Lagu Apa??')
					tels = body.slice(7)
					anu = await fetchJson(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
               case 'infogempa':
               if (isBanned) return reply(mess.only.benned)    
               if (!isUser) return reply(mess.only.userB)
         				
               if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=AKyAJwYdUGbO8jO3CGsK`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.map)
                   reply(mess.wait)
                   gempa = `•Lokasi *${anu.lokasi}*\n• Waktu: *${anu.waktu}* \n• Potensi: *${anu.potensi}*\n• Magnitude: *${anu.magnitude}*\n• Kedalaman: *${anu.kedalaman}*\n• Koordinat: *${anu.koordinat}*`
                   denz.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
                   await limitAdd(sender) 
                   break 

// akhir fitur anime
                case 'resepmasakan':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                reply(mess.wait)
                   anu = await fetchJson(`https://masak-apa.tomorisakura.vercel.app/api/search?q=${body.slice(14)}`, {method: 'get'})
                   masak = '==============================\n'
                   for (let msk of anu.results){
                   masak += `• *Title:* ${msk.title}\n• *• *Durasi Masak Sekitar:* ${msk.times}\n• *Porsi:* ${msk.serving}\n• *Tingkat Kesulitan:* ${msk.difficulty}\n• *Link:* https://www.masakapahariini.com/?s=${msk.key}\n==============================\n`
                    }
                   reply(masak.trim())
                   await limitAdd(sender) 
                   break 
              case 'randomkpop':
                   if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=AKyAJwYdUGbO8jO3CGsK`, {method: 'get'})
                   buff = await getBuffer(anu.result)
                   denz.sendMessage(from, buff, image, {quoted: mek})
                   break 
                  case 'playstore':
                  if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2)) 
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.vhtear.com/playstore?query=${ps}&apikey=${VthearApi}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.app_id}\n• *Developer:* ${ply.developer}\n• *Deskripsi:* ${ply.description}\n• *Link Apk:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break
               case 'pornhub':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'xvideos':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Title: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break 

				case 'fb':
				  denz.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					denz.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google Gan Biar Bisa Didownload', text, {quoted: mek})
					efbe = `Title: *${anu.title}*\nSize: *${anu.filesize}\nDipublikasikan Pada: *${anu.published}*`
					tefbe = await getBuffer(anu.thumb)
					denz.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result)
					denz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
			case 'instaimg':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    denz.sendMessage(from, insta, image, {quoted: mek})
				    await limitAdd(sender) 
				    break  
				case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'instavid':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    denz.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    break  
			case 'instastory':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (args.length < 1) return reply('username??')
				if (isLimit(sender)) return reply(limitend(pushname2))
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://api.vhtear.com/igstory?query=${instor}&apikey=${VthearApi}`, {method: 'get'})
				insta = '=========================\n'
				for (let i of anu.result.story.itemlist) {
				insta += `• *User:* ${anu.result.owner_username}\n• *Type:* ${i.type}\n• *Link:* ${i.urlDownload}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
			case 'hekerbucin':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				hasil = hekerbucin[Math.floor(Math.random() * (hekerbucin.length))]
				denz.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 

				case 'ytsearch':
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
					
				case 'film':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Mau Cari Film Apa?')
				reply(mess.wait)
				anu = await fetchJson(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.Search) {
				hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
				}
				reply(hasil.trim())
				await limitAdd(sender) 
					break 
					case 'tiktok':
					case 'tiktoknowm': 
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply('Urlnya mana kak?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(12)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    denz.sendMessage(from, buffer, video, )
				    break
				case 'tiktokstalk':
					try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
									
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return denz.sendMessage(from, 'Usernamenya mana gan?', text, {quoted: mek})
					let { user, stats } = await tiktod.getUserProfileInfo(args[0])
					reply(mess.wait)
					teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Menyukai* : ${stats.heart}\n`
					buffer = await getBuffer(user.avatarLarger)
					denz.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Kemungkinan username tidak valid')
					}
					await limitAdd(sender) 
					break  
//creator  
					case 'caderno':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				ct = body.slice(8)
				reply(mess.wait)
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=RiuApikey&text=${ct}`)
				denz.sendMessage(from, ct, image, {caption: '✓ *_ᴀǫᴜɪ ᴇsᴛᴀ ᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ ت._*', quoted: mek})
				await limitAdd(sender)
				break
//akhir kreator
			    case 'jarak':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    jarak = `${body.slice(7)}`
			    ja = jarak.split("/")[0];
			    rak = jarak.split("/")[1];
			    anu = await fetchJson(`https://api.vhtear.com/distance?from=${ja}&to=${rak}&apikey=${VthearApi}`, {method: 'get'})
			    denz.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			    await limitAdd(sender) 
			    break  
			    case 'infoalamat':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
			        denz.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			        await limitAdd(sender) 
			        break 
			
			//ENCURTADOR MENU
			
			case 'shrtco':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/shortlink2?apikey=RiuApikey&url=${args[0]}`)
			        tinyurl = `╔═━──━▒ *_ENCURTADOR_*\n╠≽️ *_Link Encurtado:_*\n╠≽️ ${anu.result}\n╠≽️ *_Link Original:_*\n╠≽️ ${args[0]}\n╚═━──━▒ *_ENCURTADOR_*`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break 
			    case 'tinyurl':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/shortlink?apikey=RiuApikey&url=${body.slice(9)}`)
			        tinyurl = `╔═━──━▒ *_ENCURTADOR_*\n╠≽️ *_Link Encurtado:_*\n╠≽️ ${anu.result}\n╠≽️ *_Link Original:_*\n╠≽️ ${args[0]}\n╚═━──━▒ *_ENCURTADOR_*`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break 
			case 'bitly':
                 if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
				denz.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=AKyAJwYdUGbO8jO3CGsK`)
				hasil = `╔═━──━▒ *_ENCURTADOR_*\n╠≽️ *_Link Encurtado:_*\n╠≽️ ${data.result}\n╠≽️ *_Link Original:_*\n╠≽️ ${args[0]}\n╚═━──━▒ *_ENCURTADOR_*`
				reply(hasil)
				await limitAdd(sender)
				break
				
				//NÃO SEI
				
			    case 'infonomor':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        infonomor = `*nomor* \n${anu.nomor} *international* \n${anu.international}`
			        reply(infonomor)
			        await limitAdd(sender) 
			        break 
			   case 'igstalk':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   									
   					if (isLimit(sender)) return reply(limitend(pushname2))
                        anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.picture)
                     reply(mess.wait)
                     hasil = `╭─「 *INSTAGRAM STALKER* 」\n│\n│• Link: https://www.instagram.com/${anu.result.username}\n│• Fullname : ${anu.result.full_name}\n│• Followers : ${anu.result.follower}\n│• Following : ${anu.result.follow}\n│• Jumlah Postingan: ${anu.result.post_count}\n│• Bio : ${anu.result.biography}\n╰─────────────────────`
                    denz.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender) 
                    break 
			    case 'mimpi':
			    if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
			    				
			    reply(mess.wait)
			        anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${body.slice(7)}`, {method: 'get'})
			        mimpi = `Arti Mimpi *${body.slice(7)}* Adalah:\n${anu.result.hasil}`
			        denz.sendMessage(from, mimpi, text, {quoted: mek})
			        await limitAdd(sender) 
			       	break 
				case 'quotes':
				denz.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
				 data = fs.readFileSync('./Fxc7/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 denz.sendMessage(from, randQuote, text, {quoted: mek})
				await limitAdd(sender) 
					break 
				case 'katabijak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					denz.sendMessage(from, katabijak, text, {quoted: mek})
					await limitAdd(sender) 
					break 

			case 'profiltiktok':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
			        tiktok = await getBuffer(anu.result.picture)
              denz.sendMessage(from, tiktok, image, {quoted: mek})
			        await limitAdd(sender) 
			        break 
				case 'darkjokes':
				denz.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
				reply(mess.wait)
				 data = fs.readFileSync('./Fxc7/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 denz.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				await limitAdd(sender) 
				break  
			case 'katailham':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				hasil = katailham[Math.floor(Math.random() * (katailham.length))]
				denz.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 
				case 'addsticker':
				if (!isOwner) return reply(mess.only.ownerB)
			    if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await denz.downloadMediaMessage(boij)
				fs.writeFileSync(`./sticker/${svst}.webp`, delb)
				denz.sendMessage(from, `Berhasil menyimpan sticker!`, MessageType.text, { quoted: mek })
				break
				case 'addaudio':
                   if (!isOwner) return reply(mess.only.ownerB)
                   if (!isQuotedAudio) return reply('Reply audio nya om')
                   gsh = body.slice(10)
                   if (!gsh) return reply('Nama file nya apa?')
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                   gx = await denz.downloadMediaMessage(uyw)
                   fs.writeFileSync(`./mp3/${gsh}.mp3`, gx)
                    reply('Berhasil menyimpan audio!')
                     break
                     case 'katacinta':	
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
				
			case 'pasangan':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${VthearApi}`, {method: 'get'})
				denz.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
			await limitAdd(sender) 
			break 

			case 'persengay':
			case 'gaypersen':
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('tag temanmu!')
				rate = body.slice(11)
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah GayðŸ¤¦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*HatiÂ² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur GanðŸƒðŸŒ¬ï¸*","83%\n\n Yaallah NakðŸ¤¦","97%\n\nAstagfirullahðŸ¤¦","100%\n\nKabur ae Gan Daripada Ditusbol Bool luðŸƒ","29%\n\n amann:v","94%\n\n YaallahðŸƒ","75%\n\nHadehh GayðŸ¤¦","82%\n\nMending Lu Tobat DahðŸƒ","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool TopanðŸƒ"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				denz.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nJawaban : '+kl+'', text, { quoted: mek })
				await limitAdd(sender) 
				break  

			case 'pbucin':
			case 'persenbucin':
			case 'bucinpersen':
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				persenbucin = ["4%\n\nHadehhðŸ¤¦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n HadehhhðŸƒ","74%\n\n bucen Teroosss","83%\n\n SekaliÂ² kek Ga bucin Gitu","97%\n\nHadehh PakboiÂ²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi","75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				denz.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
		    case 'map':
		if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
					buffer = await getBuffer(anu.gambar)
					denz.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
					await limitAdd(sender)
					break
				case 'url2img':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa gan?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana gan?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					url2img = await getBuffer(anu.result)
					denz.sendMessage(from, url2img, image, {quoted: mek})
					await limitAdd(sender)
					break
			    case 'everyone':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠≽️ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═━──━▒ *_EVERYONE_*`+teks+'╚═━──━▒ *_EVERYONE_*', members_id, true)
					break
			    case 'kbbi':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break 
					case 'grup':
					case 'gc':
					case 'group':
					case 'grupo':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'abrir') {
					    reply(`✘ *_O grupo, ${groupMetadata.subject}, foi aberto agora todos poderão enviar mensagens!_*`)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
						reply(`✘ *_O grupo, ${groupMetadata.subject}, foi fechado agora apenas administradores poderão enviar mensagens!_*`)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'artinama':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					denz.sendMessage(from, anu.result, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'limpar':
					if (!isOwner) return reply('✘ *_ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇ ᴇsᴘᴇᴄɪғɪᴄᴏ ᴘᴀʀᴀ ᴏ ᴅᴏɴᴏ ᴅᴏ ʙᴏᴛ, ɴʏx_*')
					anu = await denz.chats.all()
					denz.setMaxListeners(25)
					for (let _ of anu) {
						denz.deleteChat(_.jid)
					}
					reply(`✓ *_ᴛᴏᴅᴏs ᴏs ᴄʜᴀᴛs ғᴏʀᴀᴍ ᴅᴇʟᴇᴛᴀᴅᴏs ᴄᴏᴍ sᴜᴄᴇssᴏ!_*`)
					break
                                case 'bcgc':
					denz.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bcgc = await denz.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							denz.sendMessage(_.jid, bcgc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ ɢʀᴏᴜᴘ_* 」\n*ɢʀᴏᴜᴘ* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ ɢʀᴏᴜᴘ_* 」\n*ɢʀᴏᴜᴘ* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Suksess broadcast group')
					}
					break
				case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await denz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, bc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`})
						}
						denz.sendMessage(_.jid, bc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`})
						reply('Suksess broadcast')
						} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('✘ *_Forneca um número, ta tentando adicionar sua namorada? brincadeirinha hehehe..._*')
					if (args[0].startsWith('1')) return reply('✘ *_Forneça o DDI também, exemplo 5519998707564._*')
					if (args[0].startsWith('2')) return reply('✘ *_Forneça o DDI também, exemplo 5519998707564._*')
					if (args[0].startsWith('3')) return reply('✘ *_Forneça o DDI também, exemplo 5519998707564._*')
					if (args[0].startsWith('4')) return reply('✘ *_Forneça o DDI também, exemplo 5519998707564._*')
					if (args[0].startsWith('6')) return reply('✘ *_Forneça o DDI também, exemplo 5519998707564._*')
					if (args[0].startsWith('7')) return reply('✘ *_Forneça o DDI também, exemplo 5519998707564._*')
					if (args[0].startsWith('8')) return reply('✘ *_Forneça o DDI também, exemplo 5519998707564._*')
					if (args[0].startsWith('9')) return reply('✘ *_Forneça o DDI também, exemplo 5519998707564._*')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						denz.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('✘ *_Houve um erro ao adicionar o alvo, talvez o número esteja errado ou o alvo tenha privado para que apenas contatos o adicionem em grupos._*')
					}
					break
			    case 'kick':
			case 'banir':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('✘ *_Mencione a pessoa aue você deseja banir._*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '✓ *_Ok..._*\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupRemove(from, mentioned)
					} else {
						mentions(`✓ *_Comando recebido, o alvo, @${mentioned[0].split('@')[0]}, será removido em instantes._*`, mentioned, true)
						denz.groupRemove(from, mentioned)
					}
					break 
				case 'promote':
				case 'pm':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('✘ *_Mencione a pessoa aue você deseja promover._*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '✓ Ok... :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`✘  *_@${mentioned[0].split('@')[0]} acabou de se tornar um administrador do grupo._*`, mentioned, true)
						denz.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
					case 'del':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					denz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
			    case 'demote':
			case 'dm':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('✘ *_Mencione a pessoa aue você deseja demotar._*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '✓ *_Ok..._* :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`✘  *_@${mentioned[0].split('@')[0]} se tornou membro comum agora._*`, mentioned, true)
						denz.groupDemoteAdmin(from, mentioned)
					}
					break
			    case 'admin':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					teks = `╔═━──━▒ *_ADMIN LIST_*\n╠≽️ *_Total:_* ${groupAdmins.length}\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `╠≽️ @${admon.split('@')[0]}\n`
					}
					teks += `╚═━──━▒ *_ADMIN LIST_*`
					mentions(teks, groupAdmins, true)
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('✘ *_Digite ${prefix + command} ON/OFF_*')
					if ((args[0]) === 'on') {
						if (isSimi) return reply('✘ *_simih já está ativado!_*')
						samih.push(from)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`✓ *_${command} foi ativado com sucesso!_*`)
					} else if ((args[0]) === 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`✓ *_${command} foi desativado com sucesso!_*`)
					} else {
						reply('✘ *_Digite ${prefix + command} ON/OFF_*')
					}
					break
			    case 'modonsfw':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('✘ *_Digite ${prefix + command} ON/OFF_*')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('✘ *_modonsfw já está ativado!_*')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`✓ *_${command} foi ativado com sucesso!_*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`✓ *_${command} foi desativado com sucesso!_*`)
					} else {
						reply('✘ *_Digite ${prefix + command} ON/OFF_*')
					}
					break
				case 'modoanime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('✘ *_Digite ${prefix + command} ON/OFF_*')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('✘ *_modoanime já está ativado!_*')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`✓ *_${command} foi ativado com sucesso!_*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`✓ *_${command} foi desativado com sucesso!_*`)
					} else {
						reply('✘ *_Digite ${prefix + command} ON/OFF_*')
					}
					break
				case 'boasvindas':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('✘ *_Digite ${prefix + command} ON/OFF_*')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('✘ *_boasvindas já está ativado!_*')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`✓ *_${command} foi ativado com sucesso!_*`)
					} else if ((args[0]) === 'off') {
						if (isWelkom) return reply('✘ *_boasvindas já está desativado!_*')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`✓ *_${command} foi desativado com sucesso!_*`)
					} else {
						reply('✘ *_Digite ${prefix + command} ON/OFF_*')
					}
					break 
				case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('✘ *_Digite ${prefix + command} ON/OFF_*')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('✘ *_antilink já está ativado!_*')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`✓ *_${command} foi ativado com sucesso!_*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiLink) return reply('✘ *_antilink já está desativado!_*')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`✓ *_${command} foi desativado com sucesso!_*`)
					} else {
						reply('✘ *_Digite ${prefix + command} ON/OFF_*')
					}
					break
				case 'antibadword':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('✘ *_Digite ${prefix + command} ON/OFF_*')
                if (args[0] === 'on') {
                if (isBadWord) return reply('✘ *_antibadword já está ativado!_*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	   reply(`✓ *_${command} foi ativado com sucesso!_*`)
              	  } else if (args[0] === 'off') {
                    	if (!isBadWord) return reply('✘ *_antibadword já está desativado!_*')
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	    reply(`✓ *_${command} foi desativado com sucesso!_*`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                    case 'do':
                    if (!isOwner) return reply(mess.only.ownerB)
					denz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                    case 'addbw':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = args.join(" ")
                    bad.push(bw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('✓ *_ᴀ ᴘᴀʟᴀᴠʀᴀ ᴅᴇsᴇᴊᴀᴅᴀ ғᴏɪ ᴄᴏʟᴏᴄᴀᴅᴀ ɴᴀ ʟɪsᴛᴀ ᴅᴇ ᴘᴀʟᴀᴠʀᴀs ᴘʀᴏʙɪᴅᴀs ᴄᴏᴍ sᴜᴄᴇssᴏ_*')
                    break
                case 'deletebw':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`)
                    let dbw = args.join(" ")
                    bad.splice(dbw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('✓ *_ᴀ ᴘᴀʟᴀᴠʀᴀ ᴅᴇsᴇᴊᴀᴅᴀ ғᴏɪ ʀᴇᴛɪʀᴀᴅᴀ ᴅᴀ ʟɪsᴛᴀ ᴅᴇ ᴘᴀʟᴀᴠʀᴀs ᴘʀᴏʙɪᴅᴀs ᴄᴏᴍ sᴜᴄᴇssᴏ_*')
                    break 
                case 'bwlist':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
				case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VthearApi}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					denz.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakgambar':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					denz.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
				case 'family100':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${VthearApi}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					denz.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'clonar':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('✘ *_ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴠᴏᴄᴇ ᴅᴇsᴇᴊᴀ ʀᴏᴜʙᴀʀ ᴏ ᴘᴇʀғɪʟ_*')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await denz.getProfilePicture(id)
						buffer = await getBuffer(pp)
						denz.updateProfilePicture(botNumber, buffer)
						mentions(`✓ *_ᴀ ғᴏᴛᴏ ᴅᴀ ᴘᴇssᴏᴀ > @${id.split('@')[0]} ғᴏɪ ʀᴏᴜʙᴀᴅᴀ ᴇ sᴇᴛᴀᴅᴀ ᴅᴇ ᴘᴇʀғɪʟ ɴᴏ ʙᴏᴛ_*`, [jid], true)
					} catch (e) {
						reply('✘ *_ᴀʟɢᴏ ᴅᴇᴜ ᴇʀʀᴀᴅᴏ !_*')
					}
					break
//setting bot
				case 'setprefix':
				case 'setpref':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 
					case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					reply(`Limit berhasil di ubah menjadi : ${limitt}`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					memberLimit = args[0]
					reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`)
					break
////////////
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await denz.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							denz.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break 
	case 'infocuaca':
	 if (isBanned) return reply(mess.only.benned)    
     if (!isUser) return reply(mess.only.userB)
     				
     if (isLimit(sender)) return reply(limitend(pushname2))
     if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text)
     reply(mess.wait)
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             denz.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, text, {quoted: mek})
            }
            await limitAdd(sender)
            break 

         case 'pinterest':
         if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('✘ *_Este comando necessita de um texto, exemplo: ${prefix + command} albedo._*')
					pinte = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/pinterest?apikey=AnjayB&query=${body.slice(11)}`, {method: 'get'})
					reply(mess.wait)
					pinehg = await getBuffer(anu.result)
					denz.sendMessage(from, pinehg, image, {quoted: mek })
					await limitAdd(sender) 
					break 
					
// premium user
         case 'joox':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=AKyAJwYdUGbO8jO3CGsK`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `╭─「 *JOOX DOWNLOADER* 」\n│\n│ *• Judul* : ${anu.result.title}\n│ *• Album* : ${anu.result.album}\n│ *• Dipublikasi* : ${anu.result.dipublikasi}\n│\n│ *TUNGGU SEBENTAR LAGI DIKIRIM*\n│ *MOHON JANGAN SPAM*\n╰─────────────────────`
                bufferddd = await getBuffer(anu.result.thumb)
                 reply(mess.wait)
                buff = await getBuffer(anu.result.mp3)
                denz.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                denz.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break  
                
          case 'snack':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                denz.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                denz.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                await limitAdd(sender) 
                break  
                
       case 'play':
                  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`✘ *_Cade o texto filhote de cruz credo? brincadeirinha hehehe, mas forneça um texto..._*`)
				try {
                data = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=RiuApikey&query=${body.slice(6)}`, {method: 'get'})
                 reply(mess.wait)
                 infomp3 = `*_「 PLAY 」_*\n\n*_「 Título 」_* : ${data.result.info.title}\n*_「 Duração 」_* : ${data.result.info.duration}\n*_「 Uploader 」_* : ${data.result.info.uploader}\n*_「 Views 」_* : ${data.result.info.view}\n*_「 Likes 」_* : ${data.result.info.like}\n*_「 Dislikes 」_* : ${data.result.info.dislike}\n*_「 Link 」_* : youtube.com/watch?v=${data.result.info.id}`
                bufferddd = await getBuffer(data.result.info.thumbnail)
                videofdp = await getBuffer(data.result.audio[3].link)
                denz.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                denz.sendMessage(from, videofdp, audio, {mimetype: 'audio/mp4', filename: `${data.result.info.title}.mp3`, quoted: mek })
                await limitAdd(sender)
                } catch {
                	reply(mess.ferr)
                }
                break
                
                case 'mimetypedeaudiooooo':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`Urlnya mana kak?`)
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Format link salah, gunakan link youtube')
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=apivinz`)
  infomp3 = `*Audio Ditemukan*\n‣ Judul : ${anu.result.title}\n‣ Source : ${anu.result.source}\n‣ Ukuran : ${anu.result.size}\n\n_Mengirim file silahkan tunggu_\n\n_Jika audio tidak muncul download sendiri menggunakan link dibawah_\n‣ *link* : ${anu.result.link}`
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  denz.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  denz.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

            case 'smule':
	       if (isBanned) return reply(mess.only.benned)
	       
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n\n Tunggu Sebentar 1 menit Mungkun Agak Lama Karna Mendownload Video`
					thumb = await getBuffer(anu.thumb)
					denz.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					denz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 	
					break 

// Akhir Fitur Premium 

case 'wiki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
                    if (args.length < 1) return reply('teks nya mana om?')
                    reply(mess.wait)
                   wiki = `${body.slice(6)}`
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${wiki}&apikey=AKyAJwYdUGbO8jO3CGsK`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    wikii = `${anu.result}`
                    denz.sendMessage(from, wikii, text, {quoted: mek})
                   await limitAdd(sender) 
                   break  
                   
                   case 'checkip':
         if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
				denz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://api.lolhuman.xyz/api/ipaddress/${args[0]}?apikey=RiuApikey`)
				reply(mess.wait)
				hasil = `╔═══≽️ *_Check IP_*\n╠≽️ *_País:_* ${data.result.country}\n╠≽️ *_Sigla do País:_* ${data.result.countryCode}\n╠≽️ *_Estado:_* ${data.result.regionName}\n╠≽️ *_City:_* ${data.result.city}\n╠≽️ *_Lat.:_* ${data.result.lat}\n╠≽️ *_Long.:_* ${data.result.lon}\n╠≽️ *_Timezone:_* ${data.result.timezone}\n╠≽️ *_IP:_* ${data.result.query}\n╚═≽️ *_Developer ©_* : *ɴʏx*`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'bpfont':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
							
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			await limitAdd(sender) 
			break  
			case 'textstyle':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			style = `${body.slice(11)}`
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			await limitAdd(sender) 
			break  
			case 'pantun':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
			case 'emoji':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=RiuApikey`)
                    reply(mess.wait)
                    denz.sendMessage(from, buffer, sticker, { quoted: mek})
                    break
		case 'jamdunia':
		if (isLimit(sender)) return reply(limitend(pushname2))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			reply(mess.wait)
		 jamdunia = `${body.slice(10)}`
			anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${TechApi}&kota=${jamdunia}`, {method: 'get'})
			wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`
			denz.sendMessage(from, wtime, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			
		 case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
                	denz.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						bufferlkj = fs.readFileSync(ran)
						denz.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					
				case 'fotobot':
					if (!isOwner) return reply(mess.only.owner)
				    denz.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`✘ *_Mencione a imagem que você deseja colocar como foto de perfil do bot_*`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(enmedia)
					await denz.updateProfilePicture(botNumber, media)
					reply('✓ *_A foto do bot foi atualizada com sucesso._*')
					break
// akhir encrypt & decrypt Fitur

			case 'google':
                const googleQuery = body.slice(8)
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    denz.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
                
                case 'addbucin':
                    if (!isOwner) return reply(mess.only.owner)
				    huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
						break
                    case 'bucin':
                    case 'quotebucin':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    denz.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
                    await limitAdd(sender)
            break
            case 'beritahoax':
                     if (!isUser) return reply(mess.only.userB)
                    denz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
            case 'animecry':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=AKyAJwYdUGbO8jO3CGsK', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'animekiss':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=AKyAJwYdUGbO8jO3CGsK', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'animehug':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=AKyAJwYdUGbO8jO3CGsK', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break		
					case 'moddroid':
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=AKyAJwYdUGbO8jO3CGsK`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			denz.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=AKyAJwYdUGbO8jO3CGsK`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			denz.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				default:
				if (budy.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply(`✘ *_Aqui é proíbido links de grupos, você como admin deveria saber!_*`)
					denz.updatePresence(from, Presence.composing)
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`✓ *_Um link de grupo foi detectado, você será removido em instantes!_*`)
						setTimeout( () => {
						denz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 100)
		setTimeout( () => {
		denz.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		}, 0)
		}
                  if (body.startsWith(`${prefix}${command}`)) {
comd = `╔═━──━▒ *_ERROR 404_*\n╠≽️ Olá *${pushname2}* !\n╠≽️ O comando *${prefix}${command}* não existe!\n╠≽️ *Reveja os comandos novamente!*\n╠≽️ Consulte o *${prefix}menu!*\n╚═━──━▒ *_ERROR 404_*`
denz.sendMessage(from, comd, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "「 ᴀʟʙᴇᴅᴏ ʙᴏᴛ 」                       ⊱ ᴄʀᴇᴀᴛᴏʀ : ɴʏx", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
				  }
                  if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[AB]','aqua'), 'Comando solicitado do usuário', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'white'))
		}
	})
}
starts()
    