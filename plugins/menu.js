const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    react: "🗃️",
    alias: ["panel"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: 'hi',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let tex = `
*👋 Hello ${pushname}*.................................................
............................................................................`
await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Shadowmd99/V-6-menu/raw/main/%E0%B6%B8%E0%B7%99%E0%B6%B1%E0%B7%94%206.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
return await conn.sendMessage(from,{image: {url: `https://i.imgur.com/NAK3YWD.jpeg`},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
