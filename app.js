
const colors = require('colors')
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


//console.clear();

//console.log(argv)
//console.log(argv.b)


//const [,,arg3 = 'base=5'] = process.argv;//argumentos desde la consola
//const [,base] = arg3.split('=')

//const base = 6;

crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(colors.rainbow(`${nombreArchivo} creado desde then`)))
.catch(err => {
    console.log('ERROR: '+err);
});



