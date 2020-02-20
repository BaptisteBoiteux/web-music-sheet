var socket = io.connect();
//  var http = require('http');

// Lorsqu'on clique sur le bouton, on envoie un "message" au serveur
/*  function play()*/

var status;
$('#play').click(function () {
  status = whatPlay();
  socket.emit('message', result);
})

$('#stop').click(function () {
  socket.emit('message', 'STOP');
  status = 'STOP';
})

$('#clear').click(function () {
  $("input:radio").removeAttr("checked");
  socket.emit('message', 'clear');
})

socket.on('redirectWAIT_OK', function (destination) {
  window.location.href = destination;
});

socket.on('finished', function (message) {
 // alert("Jai fini de jouer"+message);
 // alert("CURRENT STATUS ="+status);
  var sendResult;
  if(status.includes("PLAY")){
    sendResult =whatPlay();
  }
  if(status.includes("STOP")){
    sendResult =status;
  }
  socket.emit('message', sendResult);
});

function whatPlay() {
 var sheet = "";
  var items = document.getElementsByName("t1");
  var selectedItems1 = "";

  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "radio" && items[i].checked == true) {
      selectedItems1 += items[i].value;
    }
  }
  if (selectedItems1.length < 1) {
    selectedItems1 = "NULL";
  }
  sheet += selectedItems1 + ";";

  var items = document.getElementsByName("t2");
  var selectedItems2 = "";
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "radio" && items[i].checked == true) {
      selectedItems2 += items[i].value;
    }
  }
  if (selectedItems2.length < 1) {
    selectedItems2 = "NULL";
  }
  sheet += selectedItems2 + ";";

  var items = document.getElementsByName("t3");
  var selectedItems3 = "";
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "radio" && items[i].checked == true) {
      selectedItems3 += items[i].value;
    }
  }
  if (selectedItems3.length < 1) {
    selectedItems3 = "NULL";
  }
  sheet += selectedItems3 + ";";

  var items = document.getElementsByName("t4");
  var selectedItems4 = "";
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "radio" && items[i].checked == true) {
      selectedItems4 += items[i].value;
    }
  }
  if (selectedItems4.length < 1) {
    selectedItems4 = "NULL";
  }
  sheet += selectedItems4 + ";";

  var items = document.getElementsByName("t5");
  var selectedItems5 = "";
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "radio" && items[i].checked == true) {
      selectedItems5 += items[i].value;
    }
  }
  if (selectedItems5.length < 1) {
    selectedItems5 = "NULL";
  }
  sheet += selectedItems5 + ";";

  var items = document.getElementsByName("t6");
  var selectedItems6 = "";
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "radio" && items[i].checked == true) {
      selectedItems6 += items[i].value;
    }
  }
  if (selectedItems6.length < 1) {
    selectedItems6 = "NULL";
  }
  sheet += selectedItems6 + ";";

  var items = document.getElementsByName("t7");
  var selectedItems7 = "";
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "radio" && items[i].checked == true) {
      selectedItems7 += items[i].value;
    }
  }
  if (selectedItems7.length < 1) {
    selectedItems7 = "NULL";
  }
  sheet += selectedItems7 + ";";

  var items = document.getElementsByName("t8");
  var selectedItems8 = "";
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == "radio" && items[i].checked == true) {
      selectedItems8 += items[i].value;
    }
  }
  if (selectedItems8.length < 1) {
    selectedItems8 = "NULL";
  }
  sheet += selectedItems8;

  speed_val = document.getElementById("speed").value;
  result = 'PLAY=[' + sheet + ']'+'/'+ speed_val +'/';
  return result;
}
