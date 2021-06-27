const socketController = (socket) => {
	console.log('cliente Conectado', socket.id);
	socket.on('disconnect', () => {
		console.log('cliente desconectado', socket.id);
	});
	socket.on('msg', (msg, callback) => {
		const id = 123456;
		callback(id);
		socket.broadcast.emit('msg', msg);
	});
};

module.exports = {
	socketController,
};
