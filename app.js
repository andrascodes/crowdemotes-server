const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const standing = [0,0,0,0,0]

app.use(express.static('public'))

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
    standing[0]++
    console.log(standing)
    io.emit('click', '1', standing)
  })
  socket.on('two', data => {
    console.log('two was clicked')
    console.log(data)
    standing[1]++
    console.log(standing)
    io.emit('click', '2', standing)
  })
  socket.on('three', data => {
    console.log('three was clicked')
    console.log(data)
    standing[2]++
    console.log(standing)
    io.emit('click', '3', standing)
  })
  socket.on('four', data => {
    console.log('four was clicked')
    console.log(data)
    standing[3]++
    console.log(standing)
    io.emit('click', '4', standing)
  })
  socket.on('five', data => {
    console.log('five was clicked')
    console.log(data)
    standing[4]++
    console.log(standing)
    io.emit('click', '5', standing)
  })
});

server.listen(process.env.PORT, () => {
  console.log('running on port: ' + process.env.PORT)
});
     