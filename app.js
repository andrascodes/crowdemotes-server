const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const standing = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
}

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/react', function(req, res){
  res.sendFile(__dirname + '/public/react.html');
});

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('one', data => {
    console.log('one was clicked')
    console.log(data)
    standing.one++
    console.log(standing)
    io.emit('click', standing)
  })
  socket.on('two', data => {
    console.log('two was clicked')
    console.log(data)
    standing.two++
    console.log(standing)
    io.emit('click', standing)
  })
  socket.on('three', data => {
    console.log('three was clicked')
    console.log(data)
    standing.three++
    console.log(standing)
    io.emit('click', standing)
  })
  socket.on('four', data => {
    console.log('four was clicked')
    console.log(data)
    standing.four++
    console.log(standing)
    io.emit('click', standing)
  })
  socket.on('five', data => {
    console.log('five was clicked')
    console.log(data)
    standing.five++
    console.log(standing)
    io.emit('click', standing)
  })
});

server.listen(3000);
     