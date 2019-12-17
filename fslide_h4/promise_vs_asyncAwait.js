// block atau comment salah satu terlebih dahulu sebelum menjalankan script

// promise
let kuadrat = function(nilai, ceknilai) {
    let hasil = nilai * nilai;
    let error = null;

    if (hasil === 0) {
        error = 'error';
    }

    ceknilai(error, hasil);
}

const util = require('util');
const kuadratPromise = util.promisify(kuadrat);

let nilai = 4;

kuadratPromise(nilai)
    .then(hasil => console.log(hasil))
    .catch(error => console.log(error));

// Async Await
let kuadrat = function(nilai, ceknilai) {
    let hasil = nilai * nilai;
    let error = null;
    if (hasil === 0) {
        error = 'error'
    }

    ceknilai(error, hasil);
}

const util = require('util');
const kuadratPromise = util.promisify(kuadrat);

let nilai = 5;

async function kuadratAsync() {
    try {
        const hasil = await kuadratPromise(nilai);
        console.log(hasil);
    } catch (error) {
        console.log(error);
    }
};

kuadratAsync();