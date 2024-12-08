 const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "VAJIRA-MD=PR8yWBZS#IQzASvASdKyZESXQ8wzxPgZqrxwd4osbzUfBtDrbjoQ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://pomf2.lain.la/f/fxhw0z8c.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "*.ALIVE_KD_PANTA_00*
*╭────────────────╮*
*`📌𝗡𝗶𝗰𝗲 𝗧𝗼 𝗠𝗲𝗮𝘁 𝘆𝗼𝘂`*
*╰────────────────╯*
⥈⥈⥈*𝚂𝚄𝙿𝙿𝙾𝚃 𝙶𝚁𝙾𝚄𝙿*⥈⥈⥈
*╭────────────────⊶* *https://chat.whatsapp.com/GvR2hfJ42mO9HNwuFJVax6*
*╰────────────────⊶*
*╭────────────────⊶*
*`⭕Creator by ᴋᴀᴠɪꜱʜᴋᴀ)`*
*`⭕ᴋᴅ ᴘᴀɴᴛᴀ ᴀʟɪᴠᴇ`*
*╰────────────────⊶*

*╭────────────────⊶*
*🤖: ᴏᴡɴᴇʀ :¢ontact👨‍💻*

*https://wa.me/+94770161293?text=ʜᴇʏ_𝚔𝚊𝚟𝚒𝚜𝚑𝚔𝚊*
*╰────────────────⊶*
*╭────────────────⊶*
> *KD_PANTA_00_YTDL*
*╰────────────────⊶*",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "*👿☠️_KD_PANTA_00_☠️👿*",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
