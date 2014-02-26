var fs = require('fs');
fs.readFile('archivo.txt','utf8',function(err,data){
	if (!err) {
		console.log('contenido del archivo: ' + data);
	}else{
		throw err;
	}
});