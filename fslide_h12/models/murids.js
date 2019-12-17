const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MuridSchema = Schema({
    nama: String,
    kursus: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('murids', MuridSchema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const MuridSchema = Schema({
//     id_murid: String,
//     nm_murid: String,
//     jns_kelamin_murid: String,
//     notelp_murid: Number,
//     status_murid: {
//         type: Boolean,
//         default: false
//     }
// });

// module.exports = mongoose.model('murids', MuridSchema);