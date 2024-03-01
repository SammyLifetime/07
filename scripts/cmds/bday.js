module.exports = {
	config: {
		name: "bday",
		version: "1.0",
		author: "Samir",
    aliases: ["birthday"],
		countDown: 5,
		role: 0,
		category: "dates",
    shortDescription: "See Admin's Birthday",
		longDescription: "Admin (Samir B. Thakuri) Birthday Countdowns",
		guide: {
			vi: "{p}{n}",
			en: "{p}{n}"
		} 
	},
  
	onStart: async function ({ event, api }) {
		const t = Date.parse("august 11, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「Remaining Days For Samir B. Thakuri's Birthday」\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds «`, event.threadID, event.messageID);
	}
};