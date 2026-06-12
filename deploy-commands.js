require("dotenv").config();

const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("bonus")
    .setDescription("Show DreamWorld Airline Bonus Chart"),

  new SlashCommandBuilder()
    .setName("p")
    .setDescription("Start Bonus Announcement (CEO Only)"),

  new SlashCommandBuilder()
    .setName("e")
    .setDescription("End Bonus Announcement (CEO Only)")
].map(command => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering Slash Commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        "1514836603472974045",
        "1514822598079283290"
      ),
      { body: commands }
    );

    console.log("✅ Commands Registered Successfully!");
  } catch (error) {
    console.error(error);
  }
})();
