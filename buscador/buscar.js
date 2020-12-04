const { promises: fs } = require('fs');
const csvToJson = require('csvtojson');
const open = require('open');
const chalk = require('chalk');
const validCountries = require('../model/includes.json');


const getPais = (data, code, anio) => {
    const myCountry = data.find(country => country['Ciudad Cod'] === code.toUpperCase())
    if (!myCountry) {
        throw new Error('El codigo de pais o el anio no son validos.')
    }

    return {
        valor: parseFloat(myCountry[anio]),
        codigo: myCountry['Ciudad Cod'],
        nombre: myCountry['Ciudad Nombre'],
        anio
    };
}

const importCSV = async path => {

    const validCodes = validCountries.p_codigo;
    const csvFile = await fs.readFile('datos.csv', 'utf-8')
        .catch(err => { throw new Error('El archivo no existe') })

    let lines = csvFile.split(/\r?\n/);
    let csvString = ''
    lines.filter((value, index) => {
        if (index >= 4) {
            csvString += value + '\n'
        }
    });

    let csvData = await csvToJson().fromString(csvString);
    if (csvData.length === 0) {
        throw new Error('El formato del archivo no es valido.')
    }

    let excludes = []
    csvData = csvData.filter(country => {
        let isValid = validCodes.includes(country['Ciudad Cod'])
        if (isValid) {
            return country
        } else {
            excludes.push({
                name: country['Ciudad Nombre'],
                code: country['Ciudad Cod'],
            })
        }
    })
    return csvData;
}

const guardar = (datos, path) => {
    let date = JSON.stringify(datos, null, 2);
    path = `${path}.txt`
    fs.writeFile(path, date, (err) => {
        if (err) throw new Error('error en el path');
    });
    console.log('archivo creado correctamente' + path);
    open(path).catch(console.log)
}

module.exports = {
    importCSV,
    getPais,
    guardar
}