const argv = require('yargs')
    .command('mostrar', 'Muestra los resultados', {
        documento: {
            require: true,
            alias: 'f',
            desc: 'Archivo CSV con datos a procesar '
        },
        country: {
            require: true,
            alias: 'c',
            default: 'ECU',
            desc: 'Código del país que se requiere información'
        },
        anio: {
            require: true,
            alias: 'y',
            default: '1960',
            desc: 'Año que del que se busca información '
        }
    })
    .command('guardar', 'Guarda los resultados', {
        documento: {
            require: true,
            alias: 'f',
            desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
        },
        country: {
            require: true,
            alias: 'c',
            default: 'ECU',
            desc: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3. El valor por defecto es “ECU”.'
        },
        anio: {
            require: true,
            alias: 'y',
            default: '1960',
            desc: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 1960.'
        },
        out: {
            require: false,
            alias: 'o',
            desc: 'Establece el nombre del archivo donde se almacenará los resultados'
        }
    })
    .help()
    .demandCommand(1)
    .alias('h', 'help')
    .argv;


module.exports = {
    argv
}