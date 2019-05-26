// requires
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');


let listarTabla = (base, limite = 10) => {
    console.log("==========================".green);
    console.log(`Tabla del ${base}`.green);
    console.log("==========================".green);
    for (let indice = 1; indice <= limite; indice++) {
        console.log(`${base} * ${indice} = ${base * indice}`);
    }
}


/* Otra forma de exportar sería ponerlo así:*/
// module.exports.crearArchivo = (base) => {

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${limite}.txt`)
        });
    });
}

module.exports = {
    /* crearArchivo : crearArchivo  Con el ECMAScript 6 se puede poner como sigue: */
    crearArchivo,
    listarTabla
}