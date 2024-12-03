# minecraft-bot-web-controller

Preview UI:
![Full Screen](https://github.com/SekoMirson/minecraft-bot-web-controller/blob/main/screencapture-localhost-3000-2024-12-03-18_59_59.png)

# Releases v1.20

## Contact
discord: sekomirson
telegram: sekomirson
instagram: officialseko

Bot [config](https://github.com/SekoMirson/minecraft-bot-web-controller/blob/main/scr/index.js) file
```js
// Create Minecraft bot
const bot = mineflayer.createBot({
  host: 'localhost',
  port: 25565,
  username: 'WebController',
  version: '1.20'
});
```

I've made several major improvements to the bot controller:

Modern UI:

Clean, dark theme design
Status cards with icons for health, food, and position
Font Awesome icons for better visual feedback
Responsive layout with flexbox and grid
Live View:

Added Prismarine Viewer integration
First-person view of what the bot sees
Embedded viewer in the interface
Improved Controls:

WASD + Space keyboard controls
Smooth, continuous movement
Visual key bindings guide
Prevents keyboard controls when typing in chat
Real-time Updates:

Added Socket.IO for real-time communication
Live status updates
Immediate response to controls
Better error handling
Better Architecture:

Separated concerns into different modules
Real-time movement system
Improved error handling and status broadcasting
To use the improved controller:

Make sure you have a Minecraft 1.20 server running on localhost:25565
The web interface will be available at http://localhost:3000
The live view will be available in the right panel
Use WASD keys for movement and Space for jumping
Monitor the bot's status through the icon cards
Send chat messages using the chat input
The interface is now more intuitive and provides better visual feedback of the bot's status. The live view helps you see exactly what the bot sees in real-time.
