const svOnline = document.querySelector('#svonline');
const svOffline = document.querySelector('#svoffline');
const txtmsg = document.querySelector('#txtmsg');
const btnEnviar = document.querySelector('#btnEnviar');
const socket = io();

socket.on('connect', () => {
	//console.log('Conectado');
	svOffline.style.display = 'none';
	svOnline.style.display = '';
});
socket.on('disconnect', () => {
	//console.log('desConectado');
	svOnline.style.display = 'none';
	svOffline.style.display = '';
});
btnEnviar.addEventListener('click', () => {
	const mensaje = txtmsg.value;
	const payload = {
		id: 123,
		mensaje,
		fecha: new Date().getTime(),
	};
	socket.emit('msg', payload, (id) => {
		console.log('id=>', id);
	});
	socket.on('msg', (msg) => {
		console.log(msg);
	});
});
