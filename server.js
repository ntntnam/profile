const express = require('express');
const app = express();

app.listen(5290, function() {
    console.log('listening on 5290');
});


app.get('/', function(요청, 응답) {
    응답.sendFile(__dirname+'/profile.html');
});