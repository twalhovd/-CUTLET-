const commando = require('discord.js-commando');
class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die',
        });
    }
    async run(message, args) {
        var roll = Math.floor(Math.random() * 1000) + 1;
        message.reply("You've rolled a " + roll);
    }
}

module.exports = DiceRollCommand