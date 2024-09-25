const {cmd , commands} = require('../command')

cmd({
    pattern: "❤",
    react: "🔮",
    alias: ["panel"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '❤',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let tex = `
*🫂"සාදරයෙන් පිලිගනිමු" ${pushname}*
╭──────────────◎◎▷
> ◄◇─ *ජාතික ජන බලවේගය* යාපහුව ආසනය, කොට්ඨාශ  බල එකමුතුව, *මකුල්පොත*─◇►
╰──────────────◎◎▷

╭──────────────◎◎▷
*සාමාජික ඉල්ලුම්පත්‍රය*

> 01 . සම්පුර්ණ නම :-

> 02 . ලිපිනය :-

> 03 . රැකියාව :-

> 04 . ජාතික හැදුනුම් පත් අංකය :-

> 05 . දුරකතන අංක :-

╰──────────────◎◎▷`
    
await conn.sendMessage(from, {
            audio: { url: '........ovice...........................' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/y4jKv8S/Whats-App-Image-2024-09-25-at-20-08-34-2837e528.jpg`},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
