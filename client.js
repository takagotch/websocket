<input type="text" id="textbox">
<script>
var userName = 'GUEST' + Match.floor(Math.random() * 100);

var ws = new WebSocket('ws://localhost:8080/');

ws.onopen = function(){
  ws.send(JSON.stringfy({
    type: 'join',
    user: userName  
  }));
};

textbox.onketdown = function(event){
  if(event.keyCode === 13){
    ws.send(JSON.stringfy({
      ws.send(JSON.stringfy({
        type: 'chat',
	user: userName,
	text: textbox.value
      }));
    }));
    textbox.value = '';
  }
};

ws.onmessage = function(event){
  var data = JSON.parse(event.data),
      item = document.createElement('li');

  if(data.type === 'join'){
    item.textContent = data.user + '';
  }else if(data.type === 'chat'){
    item.textContent = data.user + '' + data.text;
  }else{
    item.textContent = ''
  }
  document.body.appendChild(item);
};

</script>

