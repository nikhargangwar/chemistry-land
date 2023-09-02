const compoundsServices = require( '../services/services.js');


const getAllCompoundsController = async(req,res)=>{

    try{

    const page = req.query.pg ? parseInt(req.query.pg) : 1;
    const limit = 5;
    const offset = (page - 1) * limit;
    const compounds = await compoundsServices.getAllCompounds(offset, limit);

    if (compounds.rows.length === 0) {
      return res.status(404).json({ message: 'No compounds found' });
    }
    res.status(200).json(compounds);
    }
    catch (err) {
        if (err instanceof HTTPError) {
            return res.status(err.statusCode).send({ message: err.message });
        }
        res.status(500).send(err.message);
    }

};


const getCompoundByIdController = async(req,res)=>{

    try{
        const compound = await compoundsServices.getCompoundById(req.params.id);
        if (compound.length===0) {
            return res.status(404).json({ message: 'Compound not found' });
          }

    return res.send(compound);
    //return res.status(200).json({data:result});
    }
    catch (err) {
        if (err instanceof HTTPError) {
            return res.status(err.statusCode).send({ message: err.message });
        }
        res.status(500).send(err.message);
    }

};

const createNewCompoundController = async(req,res)=>{

    try{
        const newCompound = await compoundsServices.createNewCompound(req.body);
        res.status(201).json(newCompound);
    }
    catch (err) {
        if (err instanceof HTTPError) {
            return res.status(err.statusCode).send({ message: err.message });
        }
        res.status(500).send(err.message);
    }

};


const deleteCompoundByIdController = async(req,res)=>{

    try{
        const deletedCompound = await compoundsServices.deleteCompound(req.params.id);
        if (deletedCompound) {
            return res.status(200).json({ message: 'Compound deleted'});
          } 
          res.status(404).json({ message: 'Compound not found' });
    }
    catch (err) {
        if (err instanceof HTTPError) {
            return res.status(err.statusCode).send({ message: err.message });
        }
        res.status(500).send(err.message);
    }

};

const updateCompoundByIdController = async(req,res)=>{

    try{
        const [rowCount, updatedCompoundRows] = await compoundsServices.updateCompound(req.params.id,req.body);
        if(updatedCompoundRows>0)
        {
         return res.status(200).json({ message: 'Compound updated'});
        }
        else{
            return res.status(404).json({ message: 'Compound not found' });
        }
    }
    catch (err) {
        if (err instanceof HTTPError) {
            return res.status(err.statusCode).send({ message: err.message });
        }
        res.status(500).send(err.message);
    }

};

module.exports= {getAllCompoundsController,getCompoundByIdController,createNewCompoundController,deleteCompoundByIdController,updateCompoundByIdController};