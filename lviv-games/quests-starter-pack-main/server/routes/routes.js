const { initOrdersRouter } = require('./orders/orders');
const path = require('path');
const fs = require('fs');

const routeInits = [initOrdersRouter];

const initTranslationsRoute = (server) => {
  server.get('/translations', (req, res) => {
    const filePath = path.join(__dirname, '../database/quests/en.json'); // Укажите правильный путь к en.json
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading en.json:', err);
        res.status(500).send('Error loading translations');
        return;
      }
      res.json(JSON.parse(data));
    });
  });
};

const initCustomRoutes = (server) => {
  routeInits.forEach((routeInit) => routeInit(server));
  initTranslationsRoute(server);
};

module.exports = {
  initCustomRoutes,
};
