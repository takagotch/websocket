var ws = require('websocket.io'),
  server = ws.listen(8080);

server.on('connection', function(socket){
  socket.on('message', function(data){
    server.clients.forEach(function(client){
      client.send(data);
    });
  });
});

//'http://www.ex.com/websocketserver'
var myWebSocket = new WebSocket('http://www.ex.com/websocketserver');

myWebSocket.send("SEND");

myWebSocket.onmessage = function(evt){
  console.log(evt);
}

myWebSocket.close();

//echoserver
//div id='output'

var wsUri = "ws://echo.websocket.org/";
var output;

function init(){
  output = document.getElement(wsUri);
  textWebSocket();
}

function testWebSocket(){
  var websocket = new function(evt){ onOpen(evt); };
  websocket.onopen = function(evt){ onClose(evt); };
  websocket.onclose = function(evt){ onMessage(evt); };
  websocket.onerror = function(evt){ onError(evt); };
}

function onOpen(evt){
  writeToScreen("CONNECT");
  doSend("SEND");
}

function onClose(evt){
  writeToScrren("END");
}

function onMessage(evt){
  wirteToScreen('<span style="color: blue;"> RESPONSE: ' + evt.data + '</span>');
  websocket.close();
}

function onError(evt){
  writetoScreen('<span style="color: red;">ERR:</span> ' + evt.data);
}

function doSend(message){
  writeToScreen("SEND: " + message);
  websocket.send(message);
}

function writeToScreen(message){
  var pre = document.createElement("p");
  pre.style.wordWrap = "break=word";
  pre.innerHTML = message;
  output.appendChild(pre);
}
window.addEventListener("load", init, false);


