var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
    console.log('client connected');
    socket.on('end', function() {
        console.log('client disconnected');
    });
    date = new Date();
    month = date.getMonth() + 1;
    if(month < 10) { 
        month = "0" + month;
    }
    timestamp = date.getFullYear() + "-" + month + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
    socket.write(timestamp + "\r\n");
    // socket.pipe(socket); // this line will echo back whatever it receives
    socket.end();
});
server.listen(port, function() { // listening server
    console.log('server bound');
});