var http = require('http').Server();
var io = require('socket.io')(http);
var Redis = require('ioredis');
var id = [];

io.sockets.on('connection', function (socket) {

    socket.on('connected_server', function (data) {
        let error = 0;
        Object.keys(id).forEach(function (key) {
            let channel = id[key]['channel'];
            channel === data['channel'] ? error++ : error;
        });
        if (error === 0) {
            id.push({'id': socket.id, 'channel': data['channel']});
            console.log('connected user ' + socket.id);
        }
    });

    socket.on('disconnect', function () {
        console.log('disconnected');
        for (let ids in id) {
            if (id[ids]['id'] === socket.id) id.splice(ids, 1);
        }
    });
});
setInterval(function () {
    io.emit('users_connected', {'users': id});
}, 10000);

let redis = new Redis();

redis.psubscribe('news-action.*');

redis.on('pmessage', function (pattern, channel, message) {
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data)
});

http.listen(3000, function () {
    console.log('Listening on Port: 3000');
});
