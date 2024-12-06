const { cmd } = require('../command'); 
const fg = require('api-dylux'); 
const yts = require('yt-search'); 
const { facebook } = require('@mrnima/facebook-downloader');
const { downloadTiktok } = require("@mrnima/tiktok-downloader");





cmd({
  pattern: "fb",
  react: '#️⃣',
  alias: ["fbdl","facebook"],
  desc: "",
  category: "download",
  use: '.fb <Fb video link>',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (!q) return await  reply()

 // let data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`)
const result = await facebook(q)
const info = `
💢 *KD_PANTA_00-MD FB DOWNLOADER* 💢

*TIME :* ${result.result.duration}
*URL :* ${q}
`	
await conn.sendMessage(from, { image: { url:`${result.result.thumbnail}`}, caption: info } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '⬆', key: mek.key }})
await conn.sendMessage(from, { audio: { url: result.result.links.HD }, mimetype: "audio/mpeg" }, { quoted: mek })	
await conn.sendMessage(from, { video: { url: result.result.links.SD }, mimetype: "video/mp4", caption: `SD QUALITY\n\n> *POWERED by KD_PANTA_00-MD*` }, { quoted: mek })  
await conn.sendMessage(from, { video: { url: result.result.links.HD }, mimetype: "video/mp4", caption: `HD QUALITY\n\n> *POWERED by KD_PANTA_00-MD*` }, { quoted: mek })  	
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
}catch(e){
await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
console.log(e)
reply(`Error !!\n\n*${e}*`)
}
})



cmd({
    pattern: "tiktok",
    alias: ["ttdl","tt"],
    react: '🏷️',
    desc: "",
    category: "download",
    use: '.tiktok <Tiktok link>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply()
let data = await downloadTiktok(q);	
let msg = `
    🎟️ *KD_PANTA_00-MD TIKTOK DOWNLOADER* 🎟️

📌 *Please click what you want to select*

*Title* :- ${data.result.title}

*URL:* ${q}`	
await conn.sendMessage( from, { image: { url:`${data.result.image}`}, caption: msg }, { quoted: mek })	
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
await conn.sendMessage(from, { document: { url: q }, mimetype: 'audio/mpeg', fileName: 'TikTok Audio' + '.mp3',caption: "KD_PANTA_00" }, { quoted: mek })
await conn.sendMessage(from, { video: { url: data.result.dl_link.download_mp4_1}, mimetype: "video/mp4", caption: `SD QUALITY\n\n> *POWERED by KD_PANTA_00-MD` }, { quoted: mek })	
await conn.sendMessage(from, { video: { url: data.result.dl_link.download_mp4_2 }, mimetype: "video/mp4", caption: `HD QUALITY\n\n> *POWERED by KD_PANTA_00-MD` }, { quoted: mek })  
	
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})

