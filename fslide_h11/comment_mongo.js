// conn
mongo
    // insert data
    // Untuk melihat database yang sedang aktif, gunakan perintah db pada Shell MongoDB.
    -
    db
    // Silahkan ketik perintah use tokobuku untuk membuat dan menggunakan database tokobuku.
    -
    use -
    show dbs -
    use < database kamu >
    -db.saya.insertOne({
        nama: "saya",
        umur: 10
    }) -
    db.buku.insert({
        judul: "Belajar MongoDB",
        sinopsis: "Panduan MongoDB untuk Pemula",
        pengarang: "Petani Kode"
    })


// select data
db. < collection kamu > .find()
db. < collection kamu > .find().pretty()
db. < collection kamu > .find({ id_murid: "mu001" }).pretty()
db.murid.insertMany([{
        id_murid: "mr002",
        nm_murid: "wina",
        jns_kelamin_murid: "wanita",
        notelp_murid: "08299388434",
        status_murid: "aktif"
    },
    {
        id_murid: "mr003",
        nm_murid: "lisa",
        jns_kelamin_murid: "wanita",
        notelp_murid: "08299388424",
        status_murid: "aktif"
    },
    {
        id_murid: "mr004",
        nm_murid: "panji",
        jns_kelamin_murid: "laki-laki",
        notelp_murid: "08299388454",
        status_murid: "aktif"
    },
    {
        id_murid: "mr005",
        nm_murid: "darto",
        jns_kelamin_murid: "laki-laki",
        notelp_murid: "08299388744",
        status_murid: "aktif"
    }
])

db.murid.insert({
    id_murid: "mr001",
    nm_murid: "pandu",
    jns_kelamin_murid: "laki-laki",
    notelp_murid: "08299388484",
    status_murid: "aktif"
})