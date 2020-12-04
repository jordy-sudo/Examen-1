/*Comandos
    --archivo -f: Permite establecer el path del archivo CSV que contiene los datos a analizar
--pais -c: Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3. El valor por defecto es “ECU”.
--anio -y: Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 1960.*/

const Info = require('./buscador/buscar');

const argv = require('yargs').options({
    archivo: {
        alias: 'f',
        desc: 'Path donde se encuentra el archivo csv',
        demand: true
    },
    pais: {
        alias: 'c',
        desc: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3',
        demand: true
    },
    anio: {
        alias: 'y',
        desc: 'Permite especificar el año para el cual se requiere las estadísticas.',
        demand: true
    }
}).argv;