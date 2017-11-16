## Push notifications com Socket.io

### Servidor
npm install
node server.js

### Cliente
Abrir vários tabs com o ficheiro user100.html, user200.html, user300.html 
Simula vários clientes em Rooms diferentes
#### user100 - user100.html
  #### user200 - user200.html
  #### user300 - user300.html 

### Acções Server->Client
Envia para todos
http://localhost:8080/api/notificar?notificacao="hello world”&room=

Envia para user100
http://localhost:8080/api/notificar?notificacao="hello user100"&room=user100

### Stats lista users online
http://localhost:8080/api/stats
