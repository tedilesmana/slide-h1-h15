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