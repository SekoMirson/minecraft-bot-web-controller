const mineflayer = require('mineflayer');
const express = require('express');
const path = require('path');
const { createServer } = require('http');
const socketIO = require('socket.io');
const { mineflayer: mineflayerViewer } = require('prismarine-viewer');
const botController = require('./controllers/botController');
const webServer = require('./webServer');

// Create Express app
const app = express();
const server = createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Create Minecraft bot
const bot = mineflayer.createBot({
  host: 'localhost',
  port: 25565,
  username: 'WebController',
  version: '1.20'
});

// Initialize bot controller with socket.io
botController.init(bot, io);

// Initialize web server
webServer.init(app, bot, io);

// Initialize Prismarine viewer
bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3001, firstPerson: true });
  console.log('Bot viewer running at http://localhost:3001');
});

// Start Express server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Web interface running at http://localhost:${PORT}`);
});
