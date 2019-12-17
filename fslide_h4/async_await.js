async function b() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done-b"), 1000)
    });

    let result = promise;
    console.log(result);
}

b();

// Await

async function a() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done-a"), 3000)
    });

    let result = await promise;
    console.log(result);
}

a();

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