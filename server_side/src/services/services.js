const db = require('../models');

const getAllCompounds = async (offset,limit) => {
  try{
    return await db.chemicalCompounds.findAndCountAll({
        offset,
        limit,
        order: [['id', 'ASC']],
      });
  }
  catch (err) {
    throw new Error(err);
  }
};

const getCompoundById = async (id) => {
    try{
     const compoundData = db.chemicalCompounds.findAll({where:{id}});
   
     return compoundData;
    }
    catch (err) {
      throw new Error(err);
    }
  };

  
const createNewCompound = async (body) => {
    try{
        return await db.chemicalCompounds.create(body);
    }
    catch (err) {
      throw new Error(err);
    }
  };

  const deleteCompound = async (id) => {
    try{
        return await db.chemicalCompounds.destroy({ where: { id } });
    }
    catch (err) {
      throw new Error(err);
    }
  };

  const updateCompound = async (id,body) => {
    try{
        return await db.chemicalCompounds.update(body, { where: { id }, returning: true, plain: true});
    }
    catch (err) {
      throw new Error(err);
    }
  };

module.exports= {getAllCompounds,updateCompound,getCompoundById,createNewCompound,deleteCompound};