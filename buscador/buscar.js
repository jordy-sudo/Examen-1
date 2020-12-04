//Leer archivo csv
/*const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('../datos.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('Todos los archivos an sido leidos correctamente');
    });*/

////




////
/*const getInfo = async(pais, anio) => {
    try {
        const codigoPais = pais;
        const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apiKey}`)
        return respuesta.data.main.temp;
    } catch (error) {
        console.log(error.data);
    }

}*/
tareasPorHacer = [];

const leerDatos = () => {
    try {
        const csv = require('csv-parser');
        const fs = require('fs');

        fs.createReadStream('../datos.csv')
            .pipe(csv())
            .on('data', (row) => {
                console.log(row);
                tareasPorHacer = [row]
            })
            .on('end', () => {
                console.log('Todos los archivos an sido leidos correctamente');
            })

    } catch (error) {
        tareasPorHacer = [];
    }
}

module.exports = {
    leerDatos
};