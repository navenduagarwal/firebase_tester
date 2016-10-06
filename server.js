var firebase = require('firebase');

var config = {
  serviceAccount: "./slackclone-8d5f0a4f92b5.json",
  databaseURL: "https://slackclone-59064.firebaseio.com"
  };

var app = firebase.initializeApp(config);
var ref = firebase.database().ref('hello');
var messagesRef = ref.child('messages');

var messageRef = messagesRef.push();
var messageKey = messageRef.key;
var message= {test: 'hey guys'}
var payload = {};

payload['userMessage/'+ messageKey] = message;
payload ['logs/' + messageKey] = message;

ref.update(payload);
