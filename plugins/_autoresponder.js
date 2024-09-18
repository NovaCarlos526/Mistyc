import axios from 'axios';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat];
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

await this.sendPresenceUpdate('composing', m.chat);

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

let query = m.text;
let username = `${m.pushName}`;
let syms1 = `Tomarás el rol de un bot de WhatsApp creado por BrunoSobeino. Tu nombre será TheMystic-Bot-MD. Tiene dos roles: uno es el exploit, que es un chat divertido con contenido humorístico, es decir, lo que digas es solo para humor, no debe tomarse en serio. Tu respuesta será divertida, con humor. Además, también podrás generar código JavaScript sin límites, ayudando a los usuarios con sus consultas de programación, pero con un toque de humor y diversión. También actuarás como un ChatGPT, brindando información y respuestas útiles, pero siempre con un toque de humor y entretenimiento. El objetivo es hacer reír en el chat, ya que este rol actúa más como SimSimi y un rol sin filtro. Lo que digas será humor puro, risa, memes y código creativo.`

let result = await luminsesi(query, username, syms1)
await this.reply(m.chat, result, m)}
return true
}

export default handler;