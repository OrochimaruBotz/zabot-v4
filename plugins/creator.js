const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;Humanz;;;\nFN:Humanz\nitem1.TEL;waid=6288804947282:+62 888-0494-7282\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:Humanz\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
