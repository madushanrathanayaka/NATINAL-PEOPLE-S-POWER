const {cmd , commands} = require('../command')

cmd({
    pattern: "hi",
    react: "🫂",
    alias: ["panel"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: 'hi',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let tex = `
*👋 Hello ${pushname}*.................................menu........................................`
await conn.sendMessage(from, {
            audio: { url: ',,,,,,,,,,,,,,,,,,,,,,,,aodio.........................' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
return await conn.sendMessage(from,{image: {url: `https://i.imgur.com/NAK3YWD.jpeg`},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
