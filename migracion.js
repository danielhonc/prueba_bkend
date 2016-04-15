
 /*    COLECCION DE PRODUCTOS   */
// id de los productos auto generado por mongo 
// para aprovechar el time stamp y el uso de sharding 

db.productos.insert ({
	_id:ObjectId("57101b9d1c1bcba915d58f85"),
	producto: 'Producto1',
	precio: 100000,
	descripcion: 'DProducto1'
});
db.productos.insert ({
	_id: ObjectId("57101b9e1c1bcba915d58f86"),
	producto: 'Producto2',
	precio: 32000,
	descripcion: 'DProducto2'
});
db.productos.insert ({
	_id: ObjectId("57101b9e1c1bcba915d58f87"),
	producto: 'Producto3',
	precio: 2000,
	descripcion: 'DProducto3'
});
db.productos.insert ({
	_id: ObjectId("57101b9e1c1bcba915d58f88"),
	producto: 'Producto4',
	precio: 30000,
	descripcion: 'DProducto4'
});
db.productos.insert ({
	_id: ObjectId("57101b9e1c1bcba915d58f89"),
	producto: 'Producto5',
	precio: 140500,
	descripcion: 'DProducto5'
});

 /*    COLECCION DE COMPRAS   */

db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f86"),
	precio: 1000,
	cliente: {
		id_cliente: 123456,
		nombre: 'Arturo Lopez',
		detalles: []
	},
	sede: 'Sur',
	descripcion: '',
	fecha: new Date(2015,7,1,10,37,30)
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f86"),
	precio: '',
	cliente: {
		id_cliente: 234567,
		nombre: 'Carlos Rodriguez',
		detalles: []
	},
	sede: 'Sur',
	descripcion: '',
	fecha: new Date(2015,7,2,10,37,30)
});
db.compras.insert ({
	id_producto: ObjectId("57101b9d1c1bcba915d58f85"),
	precio: '',
	cliente: {
		id_cliente: 345678,
		nombre: 'Daniel Acosta',
		detalles: []
	},
	sede: 'Sur',
	descripcion: '',
	fecha: new Date(2015,7,2,10,37,30),
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f88"),
	precio: 10000,
	cliente: {
		id_cliente: 456789,
		nombre: 'Jason Martinez',
		detalles: []
	},
	sede: 'Norte',
	descripcion: '',
	fecha: new Date(2015,7,3,10,37,30),
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f87"),
	precio: '',
	cliente: {
		id_cliente: 567890,
		nombre: 'Felipe Salazar',
		detalles: []
	},
	sede: 'Norte',
	descripcion: '',
	fecha: new Date(2015,7,3,10,37,30),
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f89"),
	precio: '',
	cliente: {
		id_cliente: 987654,
		nombre: 'Alejandra Rodriguez',
		detalles: []
	},
	sede: 'Centro',
	descripcion: '',
	fecha: new Date(2015,7,3,10,37,30),
});
db.compras.insert ({
	id_producto: ObjectId("57101b9d1c1bcba915d58f85"),
	precio: '',
	cliente: {
		id_cliente: 876543,
		nombre:'Daniela Arias',
		detalles: []
	},
	sede: 'Sur',
	descripcion: '',
	fecha: new Date(2015,7,3,10,37,30),
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f86"),
	precio: 30000,
	cliente: {
		id_cliente:  765432,
		nombre: 'Harroll Cuervo',
		detalles: []
	},
	sede: 'Sur',
	descripcion: '',
	fecha: new Date(2015,7,3,10,37,30),
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f89"),
	precio: '',
	cliente: {
		id_cliente: 654321,
		nombre: 'Jenny Perez',
		detalles: []
	},
	sede: 'Sur',
	descripcion: '',
	fecha: new Date(2015,7,3,10,37,30),
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f88"),
	precio: 1000,
	cliente: {
		id_cliente: 234567,
		nombre: 'Carlos Rodriguez',
		detalles: []
	},
	sede: 'Norte',
	descripcion: '',
	fecha: new Date(2015,7,3,10,37,30),
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f86"),
	precio: '',
	cliente: {
		id_cliente: 234567,
		nombre: 'Carlos Rodriguez',
		detalles: []
	},
	sede: '',
	descripcion: 'dañado',
	fecha: new Date(2015,7,3,10,37,30)
});
db.compras.insert ({
	id_producto: ObjectId("57101b9d1c1bcba915d58f85"),
	precio: '',
	cliente: {
		id_cliente: 234567,
		nombre: 'Carlos Rodriguez',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: '',
	precio: '',
	cliente: {
		id_cliente: 123456,
		nombre: 'Arturo Lopez',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: '',
	precio: '',
	cliente: {
		id_cliente: 123456,
		nombre: 'Arturo Lopez',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: '',
	precio: '',
	cliente: {
		id_cliente: 123456,
		nombre: 'Arturo Lopez',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: '',
	precio: '',
	cliente: {
		id_cliente: 123456,
		nombre: 'Arturo Lopez',
		detalles: []
	,},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f87"),
	precio: 9999,
	cliente: {
		id_cliente: '',
		nombre: '',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: ObjectId("57101b9d1c1bcba915d58f85"),
	precio: 9999,
	cliente: {
		id_cliente: '',
		nombre: '',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f89"),
	precio: '',
	cliente: {
		id_cliente: '',
		nombre: '',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f86"),
	precio: '',
	cliente: {
		id_cliente: 345678,
		nombre: 'Daniel Acosta',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: '',
	precio: 1000,
	cliente: {
		id_cliente: 345678,
		nombre: 'Daniel Acosta',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: ObjectId("57101b9e1c1bcba915d58f86"),
	precio: '',
	cliente: {
		id_cliente: 456789,
		nombre: 'Jason Martinez',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
});
db.compras.insert ({
	id_producto: '',
	precio: '',
	cliente: {
		id_cliente: '',
		nombre: '',
		detalles: []
	},
	sede: '',
	descripcion: '',
	fecha: new Date(2015,7,3,10,7,30)
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
