module.exports.config = {
  name: "fork",
  version: "1.0.0",
  credits: "rX Abdullah",
  hasPermission: 0,
  description: "Send GitHub fork link",
  commandCategory: "utility",
  usages: "!fork",
  cooldowns: 0
};

module.exports.run = async function ({ api, event }) {
  const link = "https://github.com/rxabdullah007/Maria-v3-example.git";
  return api.sendMessage(
    `🎀MARIA V3 EXAMPLE FORK LINK:\n\n${link}`,
    event.threadID,
    event.messageID
  );
};
