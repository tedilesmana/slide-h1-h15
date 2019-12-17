const Murid = require('../models/murids');

exports.listMurid = async (req, res) => {
    const data = await Murid.find();
    res.send(JSON.stringify({ "status": 200, "error": null, "response": data }));
}

exports.detailMurid = async (req, res) => {
    const data = await Murid.findById(req.params.id);
    res.send(JSON.stringify({ "status": 200, "error": null, "response": data }));
}

exports.tambahMurid = async (req, res) => {
    const murid = new Murid(req.body);
    const status = await murid.save();
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }));
}

exports.ubahMurid = async (req, res) => {
    const { id } = req.params;
    const status = await Murid.update({ _id: id }, req.body);
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }));
}

exports.hapusMurid = async (req, res) => {
    let { id } = req.params;
    const status = await Murid.remove({ _id: id });
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }));
}