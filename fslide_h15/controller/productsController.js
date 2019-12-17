const Product = require('../models/product')
const jwt = require('jsonwebtoken')

exports.home = (req,res) => {
	res.send("Wellcome to API Shop")	
}

exports.listProduct = async (req,res) => {
    jwt.verify(req.token, 'secretkey', async (err, authData)=> {
        if(!err){
            let data = await Product.find()
            res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))        
        }else{
            res.sendStatus(403)
        }
    })
}

exports.detailProduct = async (req,res) => {
    const data = await Product.findById(req.params.id)
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.tambahProduct = async (req,res) => {
	const products = new Product(req.body)
    const status = await products.save()
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))		
}

exports.ubahProduct = async (req, res) => {
    const { id } = req.params
	const status = await Product.update({_id : id}, req.body)
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}

exports.hapusProduct = async (req, res) => {
    let { id } = req.params
    const status = await Product.remove({_id : id})
    res.send(JSON.stringify({"status" : 200, "error" : null, "response": status}))
}