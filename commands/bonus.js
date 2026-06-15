const {
  SlashCommandBuilder,
  EmbedBuilder
} = require("discord.js");

const config = require("../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bonus")
    .setDescription("View Mirzapur Airline Weekly Bonus System"),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setColor("#FFD700")
      .setTitle("✈️ MIRZAPUR AIRLINE")
      .setDescription("## 🏆 Weekly Top 10 Bonus System")
      .addFields(
        {
          name: "🥇 1st Place",
          value:
            "💰 **100,000 ₽**\n🔥 **600,000 ₽+ Weekly Earnings**\n⬆️ Bonus Upgraded to **150,000 ₽**"
        },
        {
          name: "🥈 2nd Place",
          value:
            "💰 **70,000 ₽**\n🔥 **500,000 ₽+ Weekly Earnings**\n⬆️ Bonus Upgraded to **100,000 ₽**"
        },
        {
          name: "🥉 3rd Place",
          value:
            "💰 **50,000 ₽**\n🔥 **400,000 ₽+ Weekly Earnings**\n⬆️ Bonus Upgraded to **70,000 ₽**"
        },
        {
          name: "🏅 Top 10 Rewards",
          value:
`4️⃣ 10,000 ₽
5️⃣ 10,000 ₽
6️⃣ 10,000 ₽
7️⃣ 7,500 ₽
8️⃣ 7,500 ₽
9️⃣ 5,000 ₽
🔟 5,000 ₽`
        },
        {
          name: "📜 Bonus Rules",
          value:
`✅ Only Top 10 Weekly Earners are eligible.
✅ Valid earning proof is mandatory.
✅ Fake or edited proof will be rejected.
✅ Bonus upgrades apply only after reaching the required weekly earnings.
✅ Final rewards are subject to airline revenue and management approval.`
        }
      )
      .setFooter({
        text: config.footer
      })
      .setTimestamp();

    await interaction.reply({
      embeds: [embed]
    });

  }
};
