var net = require('net');
var cliente = new net.Socket();//crea un socket
cliente.setEncoding('utf8');//modifica la codificacion de los datos recibidos para leerlos como strring

//conecta al servidor
cliente.connect('3000','localhost',function(){
	console.log('conectado al server');
	//transmite los datos
	cliente.write("ya podemos comunicarnos sin un navegador");
});

//preparado para entradas desde la terminal
process.stdin.resume();

//cuando recibe datos los envia al server
process.stdin.on('data',function(data){
	cliente.write(data)
});

//cuando recibe datos de vuelta los imprime en la consola
cliente.on('data',function(data){
	console.log(data);
});

//cuando el server se cierra
cliente.on('close',function(){
	console.log('la conexion se cerro');
});