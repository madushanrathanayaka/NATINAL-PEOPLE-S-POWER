const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*..................................................................................`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/y4jKv8S/Whats-App-Image-2024-09-25-at-20-08-34-2837e528.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Shadowmd99/V-6-menu/raw/main/Shadow%206%20v%20owner%20%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})
