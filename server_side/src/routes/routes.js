const express  = require('express');
const  compoundsController =require('../controllers/controllers.js');
const compoundRouter = express.Router();
const { validateCompound, validateQuery, validateId } = require('../middlewares/middleware.js');



//routes
compoundRouter.get('/compounds',validateQuery,compoundsController.getAllCompoundsController);
compoundRouter.get('/compounds/:id',validateId,compoundsController.getCompoundByIdController);


compoundRouter.post('/compounds',validateCompound,compoundsController.createNewCompoundController);
compoundRouter.delete('/compounds/:id',validateId,compoundsController.deleteCompoundByIdController);
compoundRouter.put('/compounds/:id',validateId, validateCompound, compoundsController.updateCompoundByIdController);





module.exports=compoundRouter;
