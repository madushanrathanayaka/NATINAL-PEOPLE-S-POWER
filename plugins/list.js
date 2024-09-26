const {cmd , commands} = require('../command')

cmd({
    pattern: "list",
    react: "📜",
    alias: ["panel"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.list',
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

> 05 . ඔබගේ පැහැදිලි ඡායාරූපයක් :-

> 06 . දුරකතන අංක :-

*මෙම තොරතුරු පිලිවලින් එවා, (.......................) නැවතත් මෙම සලකුණ ද එවන්න*

> NATINAL-PEOPLE-S-POWER WHATSAPP BOT CREATED BY :- JALIYA MADUSHAN RATHNAYAKE

╰──────────────◎◎▷`
    
await conn.sendMessage(from, {
            audio: { url: 'https://github.com/madushanrathanayaka/voice-md/blob/bd80e78b1ad5ee172bcdb69d6f65c94c3f36ebec/%F0%9F%91%8D.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/y4jKv8S/Whats-App-Image-2024-09-25-at-20-08-34-2837e528.jpg`},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
