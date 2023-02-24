const WebSocket = require('ws');

let usersCount = 0;

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (socket) => {
        console.log('Client connected');
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                const message = JSON.stringify({
                    type: 'user-count-update',
                    userCount: usersCount
                });
                client.send(message);
            }
        });

        socket.on('message', (message) => {
            const data = JSON.parse(message);
            if (data.type === 'user-logged-in') {
                usersCount++;
            console.log('Received user logged in message, current user count: ', usersCount);
            // Handle the user logged in message here
            } else if (data.type === 'user-logged-out') {
                if (usersCount > 0) {
                    usersCount--;
                }
                console.log('Received user logged out message, current user count: ', usersCount);
            }

            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    const message = JSON.stringify({
                        type: 'user-count-update',
                        userCount: usersCount
                    });
                    client.send(message);
                }
            });
      });

        socket.on('close', () => {
        console.log('Client disconnected');
        if (usersCount > 0) {
            usersCount--;
            }
        });
  });

  wss.server = server.listen(4001, () => {
    console.log('WebSocket server listening on port 4001');
    });
};