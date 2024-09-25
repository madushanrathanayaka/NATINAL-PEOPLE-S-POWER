const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
     pattern: "unmute",	
     alias: ["unlock"],
     react: "🔊",
     desc: "mute group.",
     category: "group",
     filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        if (!isGroup) return reply('This command can only be used in a group❗.')
        if (!isBotAdmins) return reply('කරුනාකර NATINAL-PEOPLE-S-POWER බොට් වෙත ADMIN ලබා දෙන්න ❗.')
        if (!isAdmins) return reply('ඔබ NATINAL-PEOPLE-S-POWER WHATSAPP BOT OWENER නොවෙ ❌.') 
  
            await conn.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await conn.sendMessage(m.chat, { text: '🔊 GROUP IS OPEN MY BOT OWNER' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔊', key: mass.key } });
} catch(e) {
console.log(e);
reply('කරුනාකර NATINAL-PEOPLE-S-POWER WHATSAPP BOT ට ADMIN ලබා දෙන්න ❗❗')     
} 
})
