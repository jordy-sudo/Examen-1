//Leer archivo csv
const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('../datos.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('Todos los archivos an sido leidos correctamente');
    });