'use strict';
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'gabriel',
    password: 'megabriel1',
    database: 'users'
})

/* connection.connect( (err) =>{
    if(err) throw err
    console.log('La conexion funciona')
}) */


var $nombre=$('#nombre');
var $div=$('#div');
var $boton=$('#boton');

boton.addEventListener('click', function(){
    div.innerHTML=nombre.value;

    const insertar = "insert into usuarios (id, nombre) values (7, ${nombre})"
    connection.query(insertar, (err, rows)=>{
    if(err) throw err
    })
}) 


connection.query('select * from usuarios', (err, rows)=>{
    if(err) throw err
    console.log('Los datos de la tabla son estos: ');    
    console.log(rows);
    
})

connection.end()