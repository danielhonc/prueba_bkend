 /*    COLECTION OF CLIENTES   */

db.clientes.insert ({
	name: { first: 'Arturo' , last: 'Lopez'},
	documento: 123456,
	detalles: []
});
db.clientes.insert ({
	name: { first: 'Carlos' , last: 'Rodriguez'},
	documento: 234567,
	detalles: []
});
db.clientes.insert ({
	name: { first: 'Daniel' , last: 'Acosta'},
	documento: 345678,
	detalles: []
});
db.clientes.insert ({
	name: { first: 'Jason' , last: 'Martinez'},
	documento: 456789,
	detalles: []
});
db.clientes.insert ({
	name: { first: 'Felipe' , last: 'Salazar'},
	documento: 567890,
	detalles: []
});
db.clientes.insert ({
	name: { first: 'Alejandra' , last: 'Rodriguez'},
	documento: 987654,
	detalles: []
});
db.clientes.insert ({
	name: { first: 'Daniela' , last: 'Arias'},
	documento: 876543,
	detalles: []
});
db.clientes.insert ({
	name: { first: 'Harroll' , last: 'Cuervo'},
	documento: 765432,
	detalles: []
});
db.clientes.insert ({
	name: { first: 'Jenny' , last: 'Perez'},
	documento: 654321,
	detalles: []
});

 /*    COLECTION OF PRODUCTOS   */

db.productos.insert ({
	producto: 'DProducto1',
	precio: 100000,
	descripcion: []
});
db.productos.insert ({
	producto: 'DProducto2',
	precio: 32000,
	descripcion: []
});
db.productos.insert ({
	producto: 'DProducto3',
	precio: 2000,
	descripcion: []
});
db.productos.insert ({
	producto: 'DProducto4',
	precio: 30000,
	descripcion: []
});
db.productos.insert ({
	producto: 'DProducto5',
	precio: 140500,
	descripcion: []
});

 /*    COLECTION OF CLOMPRAS   */

db.compras.insert ({
	precio: 1000,
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: '',
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: '',
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30),
});
db.compras.insert ({
	precio: 10000,
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30),
});
db.compras.insert ({
	precio: '',
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30),
});
db.compras.insert ({
	precio: '',
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30),
});
db.compras.insert ({
	precio: '' ,
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30),
});
db.compras.insert ({
	precio: 30000,
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30),
});
db.compras.insert ({
	precio: '' ,
	descripcion: '' ,
	fecha: new Date(2015,7,0,15,7,30),
});
db.compras.insert ({
	precio: 1000,
	descripcion: '' ,
	fecha: new Date(2015,7,0,15,7,30),
});
db.compras.insert ({
	precio: '' ,
	descripcion: "dañado",
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: '' ,
	descripcion: '' ,
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: '' ,
	descripcion: '' ,
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: '',
	descripcion: '' ,
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio:  '',
	descripcion: '' ,
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: '' ,
	descripcion: '' ,
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: 9999,
	descripcion: '' ,
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: 9999,
	descripcion: '' ,
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: '' ,
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: '',
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: 1000,
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: '' ,
	descripcion: '',
	fecha: new Date(2015,7,0,15,7,30)
});
db.compras.insert ({
	precio: '',
	descripcion: '' ,
	fecha: new Date(2015,7,0,15,7,30)
});

 /*    COLECTION OF SEDES   */

db.sedes.insert({ 
	sede: "Sur",
	direccion: "Cll 1 # 6 23"
});
db.sedes.insert({ 
	sede: "Norte",
	direccion: "Cll 100 # 19 31a"
});
db.sedes.insert({ 
	sede: "Centro",
	direccion: "Cll 12 # 4 2"
});

 /*    COLECTION OF LOGS   */

db.log.insert({});