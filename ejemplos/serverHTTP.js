//carga el modulo http
var http = require('http');

//crea el servidor server
http.createServer( function (req, res){

	//contenido header
	res.writeHead(200,{'context-type':'text/plain'});

	//escribe mensaje e indica qe la comunicacion esta completa
	res.end("hola mundo")

}).listen(3000);

console.log('servidor ejecutandoce en puerto 3000');