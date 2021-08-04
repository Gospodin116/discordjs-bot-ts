const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', (interaction: any) => {
    if (!interaction.isCommand()) return;

    const command = interaction.commandName;

    if (command === 'ping') {
        interaction.reply('Pong.');
    } else if (command === 'beep') {
        interaction.reply('Boop.');
    } else if (command === 'server') {
        interaction.reply('Guild name: ' + interaction.guild.name + '\nTotal members: ' + interaction.guild.memberCount);
    } else if (command === 'user-info') {
        interaction.reply('Your username: ' + interaction.user.username + '\nYour ID: ' + interaction.user.id);
    }
});

client.login(process.env.D_ADMIN_LOGIN);
//
// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });
//
// client.on('message', (msg: any) => {
//     if (msg.content === 'ping') {
//         msg.reply('pong');
//     }
// });