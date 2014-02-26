//transfiere la info como paquetes
//carga el modulo
var net = require('net');

//metodo para crear el server createServer
//el unico parametro es una instancia de un socket encargado del listenning
var server = net.createServer(function(conn){
	console.log("conectado server tcp (se creo el socket)");

	//qeda a la escucha de los datos
	//el primer parametro es el nombre del evento y el segundo es la funcion listener
	conn.on('data',function(data){
		console.log(data + ' desde ' + conn.remoteAddress + ' ' +conn.remotePort);
		console.log('repitiendo: ' + data);
	});

	//cierrra la conexion
	conn.on('close', function(){
		console.log('cliente cerro conexion')
	});

}).listen(3000);