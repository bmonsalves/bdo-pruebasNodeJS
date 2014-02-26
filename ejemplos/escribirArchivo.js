var fs = require('fs');
	datos = "ejemplo de datos escritos al archivo";
fs.writeFile('archivo.txt',datos,function(err){
	if (!err) {
		console.log('se escribieron los datos');
	}else{
		throw err;
	}

});