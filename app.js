const argv = require('./config/yargs').argv;


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo Creado: ${ archivo }`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}



//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.base);
//console.log(argv2);


/* //console.log(base);
crearArchivo(base)
    .then((archivo) => console.log(`Archivo Creado: ${ archivo }`))
    .catch(err => console.log(err));  */