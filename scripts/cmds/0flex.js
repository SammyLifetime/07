module.exports = {
 config: {
 name: "flex",
 version: "1.0",
 author: "AceGun",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 },
 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "mark") {
 return message.reply({
 body: "I'm watching you 👽👽",
 attachment: await global.utils.getStreamFromURL("http://tinyurl.com/2as6lev2")
 });
 }
 }
}