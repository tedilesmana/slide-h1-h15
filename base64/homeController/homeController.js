const fs = require('fs');
const path = require('path');



exports.prosesPost = (req, res) => {

    if (req.files) {
        let img = req.files.gambar;
        let path = "./public/image/" + img.name;

        img.mv(path, (err) => {
            if (err) {
                console.log(err);
            } else {
                let nama = req.body.nama;
                let hobi = req.body.hobi;

                res.send(`nama saya ${nama} dan hobi saya ${hobi} <br> <img src="../image/${img.name}">`);
            }
        })
    }
}

exports.prosesGet = (req, res) => {
    let name = req.body.nama;
    let hobi = req.body.hobi;

    res.send(`nama saya ${nama} dan hobi saya ${hobi}`);
}
// exports.prosesParams('/proses/:id', (req, res) => {
//     let id = req.params.id;

//     res.send(`id saya adalah ${id}`);
// })