const adminController = require('../controller/adminController');

module.exports = app => {
    app.get('/api/murid', adminController.listMurid)
    app.get('/api/murid/:id', adminController.detailMurid)
    app.post('/api/murid', adminController.tambahMurid)
    app.put('/api/murid/:id', adminController.ubahMurid)
    app.delete('/api/murid/:id', adminController.hapusMurid)
}