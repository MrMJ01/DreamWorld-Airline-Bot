require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  Events,
  EmbedBuilder
} = require("discord.js");

const OWNER_ID = "719815544207048795";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, () => {
  console.log(`✈️ ${client.user.tag} is Online!`);
});

client.on(Events.InteractionCreate, async interaction => {

  if (!interaction.isChatInputCommand()) return;

  // BONUS COMMAND
  if (interaction.commandName === "bonus") {

    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("✈️ DreamWorld Airline Bonus System")
      .setDescription("**Live Russia • Babylon Server**")
      .addFields(
        {
          name: "💰 Daily Bonus",
          value:
`30,000 ₽ ➜ 2,000 ₽
40,000 ₽ ➜ 3,000 ₽
50,000 ₽ ➜ 5,000 ₽
60,000 ₽ ➜ 6,500 ₽
70,000 ₽ ➜ 8,000 ₽
80,000 ₽ ➜ 9,500 ₽
100,000 ₽ ➜ 12,000 ₽`
        },
        {
          name: "🏆 Weekly Bonus",
          value:
`250k ➜ 20k ₽
500k ➜ 50k ₽
1M ➜ 120k ₽`
        },
        {
          name: "👑 CEO Information",
          value:
"DreamWorld Airline receives **30%** of pilot earnings. Bonus is paid from that revenue."
        }
      )
      .setFooter({
        text: "DreamWorld Airline • Fly More, Earn More ✈️"
      });

    return interaction.reply({ embeds: [embed] });
  }

  // BONUS START
  if (interaction.commandName === "p") {

    if (interaction.user.id !== OWNER_ID)
      return interaction.reply({
        content: "❌ Only DreamWorld Airline CEO can use this command.",
        ephemeral: true
      });

    const embed = new EmbedBuilder()
      .setColor("Green")
      .setTitle("🟢 BONUS STARTED")
      .setDescription(
        "💰 Bonus distribution has started!\n\nPilots can now submit their earning proof and claim today's bonus.\n\n✈️ DreamWorld Airline"
      );

    return interaction.reply({ embeds: [embed] });
  }

  // BONUS END
  if (interaction.commandName === "e") {

    if (interaction.user.id !== OWNER_ID)
      return interaction.reply({
        content: "❌ Only DreamWorld Airline CEO can use this command.",
        ephemeral: true
      });

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("🔴 BONUS CLOSED")
      .setDescription(
        "Bonus distribution has ended.\n\nThank you to all DreamWorld Airline pilots.\n\nSee you in the next bonus event! ✈️"
      );

    return interaction.reply({ embeds: [embed] });
  }

});

client.login(process.env.TOKEN);
