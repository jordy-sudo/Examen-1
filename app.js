const argv = require('./configs/yargs').argv;
const { importCSV, getPais, guardar } = require('./buscador/buscar');
const colors = require("colors");
let comand = argv._[0];
let pais = argv.country
let anio = argv.anio
let arch = argv.documento
let save = argv.out

switch (comand) {

    case 'mostrar':
        console.log("-----------------------------------------------------".rainbow);
        console.log("Personas que usan internet (% de la poblacion)".grey);
        let publicar = async() => {

            let datos = await importCSV(arch).catch(console.log);
            let country = getPais(datos, pais, anio)
            console.log(country);
            console.log("-----------------------------------------------------".rainbow);
        }
        publicar().then()
        break;
    case 'guardar':
        console.log("Se comienza a generar el archivo con la consulta realizada".mbrightCyan);
        let guarda = async() => {
            let datos = await importCSV(arch).catch(console.log);
            let country = getPais(datos, pais, anio)
            guardar(country, './resultado')
        }
        console.log("-----------------------------------------------------".rainbow);
        guarda().then()
        break;
    default:
        console.log('Comando no reconocido');
        break;
}