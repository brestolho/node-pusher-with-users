## Push notifications com Socket.io

### Servidor
npm install<br  />node server.js

### Cliente
Abrir vários tabs com o ficheiro user100.html, user200.html, user300.html <br  />
Simula vários clientes em Rooms diferentes
#### user100 - user100.html
  #### user200 - user200.html
  #### user300 - user300.html 

### Acções Server->Client
Envia para todos<br  />
http://localhost:8080/api/notificar?notificacao="hello world”&room=
<br  />
Envia para user100<br  />
http://localhost:8080/api/notificar?notificacao="hello user100"&room=user100

### Stats lista users online
http://localhost:8080/api/stats
