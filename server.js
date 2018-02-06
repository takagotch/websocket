var ws = require('websocket.io'),
  server = ws.listen(8080);

server.on('connection', function(socket){
  socket.on('message', function(data){
    server.clients.forEach(function(client){
      client.send(data);
    });
  });
});



