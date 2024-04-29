const Vender = require('../models/vender');



exports.addVender = async (req, res) => {
    try{
        const {name,email,phone,description,picture} = req.body;
        const vender = new Vender({name,email,phone,description,picture});
        await vender.save();
        res.status(201).json({message:'Vender added successfully'})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

exports.getAllVenders = async (req, res) => {
    try{
        const venders = await Vender.find();
        res.json(venders);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.getVenderById = async (req, res) => {
    try{
        const vender = await Vender.findById(req.params.id);
        res.json(vender);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}