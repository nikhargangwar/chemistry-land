const express  = require('express');
const  compoundsController =require('../controllers/controllers.js');
const compoundRouter = express.Router();



//routes
compoundRouter.get('/compounds',compoundsController.getAllCompoundsController);
compoundRouter.get('/compounds/:id',compoundsController.getCompoundByIdController);


compoundRouter.post('/compounds',compoundsController.createNewCompoundController);
compoundRouter.delete('/compounds/:id',compoundsController.deleteCompoundByIdController);
compoundRouter.put('/compounds/:id',compoundsController.updateCompoundByIdController);





module.exports=compoundRouter;
