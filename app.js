const argv = require('./configs/yargs').argv;
const { importCSV, getPais, guardar } = require('./buscador/buscar');

let comand = argv._[0];
let pais = argv.country
let anio = argv.year
let arch = argv.file
let save = argv.out

switch (comand) {
    case 'mostrar':
        let publicar = async() => {
            let datos = await importCSV(arch).catch(console.log);
            let country = getPais(datos, pais, anio)
            console.log(country);
        }
        publicar().then()
        break;
    case 'guardar':
        let guarda = async() => {
            let datos = await importCSV(arch).catch(console.log);
            let country = getPais(datos, pais, anio)
            guardar(country, './resultado')
        }
        guarda().then()
        break;
    default:
        console.log('Comando no reconocido');
        break;
}