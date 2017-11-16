var express = require('express')
  , app = express()
  , server = require('http').createServer(app).listen(4555)
  , io = require('socket.io').listen(server)
  , bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  var port = process.env.PORT || 8080;
  var router = express.Router();

  var loggedUsers = {};
  io.on("connection", function(socket){
    console.log("-->connected successful!!", socket.id);
    socket.on("channelfixer", function(myChannel){
      console.log(myChannel);
      socket.join(myChannel);

      var socketList = [];
      if(loggedUsers.hasOwnProperty(myChannel)){
        socketList = loggedUsers[myChannel];
      }
      socketList.push(socket.id);

      loggedUsers[myChannel] = socketList;
      
    });

    socket.on('disconnect', function() {
      console.log("disconnected",socket.id);
      loggedUsers = removeSocket(loggedUsers, socket.id);
      console.log(loggedUsers);
   });
  });

  /* Socket irá aqui depois */
  var emitir = function(req, res, next){
    var notificar = req.query.notificacao || '';
    var room = req.query.room || '';
    if(notificar != '')	 {
      console.log(room, notificar);
      //io.emit(room, notificar);
      if(room != ''){
        io.to(room).emit('message', notificar);  
      }else{
        io.emit('message', notificar);
      }
      
      next();
    } else {
      next();
    }
  }

  app.use(emitir);
  app.use('/api', router);

  router.route('/notificar').get(function(req, res){
    //aqui vamos receber a mensagem
    res.json({message: "testando essa rota"})
  })

  router.route('/stats').get(function(req, res){
    
    res.send('stats');

    console.log(loggedUsers);

    //console.log(io.sockets.adapter.rooms);
    //console.log(io.sockets.adapter.sids);

  })

  

  app.listen(port);
  console.log('conectado a porta ' + port);


function removeSocket(list, socketID){
    for (var i in list) {
      var user = list[i];
      if(user.length == 1 && user[0] == socketID){
          delete list[i];
          //list.splice(i, 1)
      }else{
      var tmp = [];
      for (var j = 0; j <= user.length; j++) {
        if(user[j] == socketID){
          user.splice(j, 1)
        }
      }
      }
    }
  return list;
}