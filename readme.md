###Push notifications com Socket.io

#Servidor
npm install
node server.js

#Cliente
Abrir vários tabs com o ficheiro recebedor.html, recebedor2.html, recebedor3.html 
Simula vários clientes em Rooms diferentes
	#user100 - recebedor.html
	#user200 - recebedor2.html
	#user300 - recebedor3.html 

#Acções Server->Client
Envia para todos
http://localhost:8080/api/notificar?notificacao="hello world”&room=

Envia para user100
http://localhost:8080/api/notificar?notificacao="hello user100"&room=user100

#Stats lista users online
http://localhost:8080/api/stats