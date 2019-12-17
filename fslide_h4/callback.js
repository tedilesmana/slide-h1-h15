let nilai = 3;

function kuadrat(nilai, ceknilai) {
    let hasil = nilai * nilai;
    let error = null;

    if (hasil === 0) {
        error = 'error';
    }

    ceknilai(error, hasil);
}

let ceknilai = function(error, hasil) {
    if (error) {
        console.log(error);
    } else {
        console.log(hasil);
    }
}

kuadrat(nilai, ceknilai);