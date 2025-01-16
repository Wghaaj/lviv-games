const questsEn = require('./quests/en.json');
const guestsUa = require('./quests/ua.json')

const initDatabase = () => ({
  questsEn,
  guestsUa
});

module.exports = {
  initDatabase,
};
