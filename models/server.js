const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {
	constructor() {
		this.app = express();
		this.server = require('http').createServer(this.app);
		this.io = require('socket.io')(this.server);
		this.port = process.env.PORT;
		this.paths = {};

		//middlewares
		this.middleware();
		//Routes on my app
		this.routes();

		//Sockets config
		this.sockets();
	}
	async conectionDB() {
		await dbConection();
	}
	middleware() {
		//Cors
		this.app.use(cors());
		//Directorio publico
		this.app.use(express.static('public'));
	}

	routes() {
		//this.app.use(this.paths.auth, require('../routes/auth'));
	}
	sockets() {
		this.io.on('connection',socketController);
	}
	listen() {
		this.server.listen(this.port, () => {
			console.log(`App listen on http://localhost:${this.port}`);
		});
	}
}
module.exports = Server;
