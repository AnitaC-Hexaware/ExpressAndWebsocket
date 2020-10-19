var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const csvFileName = "C:/Users/51163/Documents/DevProjects/3DChart/serverdata.csv";

app.get('/',(req,res)=>{
    //res.sendFile(__dirname + '/client.html');
    res.set('Content-Type', 'application/octet-stream');
    res.download(csvFileName);
})

io.on('connection', function(socket) {
    socket.emit('announcements', { message: 'A new file has been uploaded!' });
});

server.listen(8080, () => console.log('Server running on port 8080'))
