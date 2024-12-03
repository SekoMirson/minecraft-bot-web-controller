function init(app, bot, io) {
  // Routes
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    if (message) {
      bot.chat(message);
      res.json({ success: true });
    } else {
      res.status(400).json({ error: 'Message is required' });
    }
  });

  // Socket.IO event handlers are now in botController.js
}

module.exports = {
  init
};