/*Comandos
    --archivo -f: Permite establecer el path del archivo CSV que contiene los datos a analizar
--pais -c: Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3. El valor por defecto es “ECU”.
--anio -y: Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 1960.*/

const Info = require('./buscar');



const argv = require('yargs').options({
    archivo: {
        alias: 'f',
        desc: 'Archivo CSV con datos a procesar',
        demand: true
    },
    pais: {
        alias: 'c',
        desc: 'Código del país que se requiere información',
        demand: true,
        default: "ECU"
    },
    anio: {
        alias: 'y',
        desc: 'Año que del que se busca información ',
        demand: true,
        default: 1960
    }
}).argv;

let pais = argv.pais
let anio = argv.anio

buscar.leerDatos(pais, anio)
    .then(respuesta => {
        console.log(`EL pasi es ${pais} y el anio es  ${anio}`);
    }).catch(err => {
        console.log(err);
    });