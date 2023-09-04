const joi = require('joi');

const compoundSchema = joi.object().keys({
  id: joi.number().integer().min(1).optional(),
  name: joi.string().required(),
  description: joi.string().required(),
  image: joi.string().required()
});

const querySchema = joi.object().keys({
  pg: joi.number().integer().min(1).optional(),
});

const idSchema = joi.object().keys({
  id: joi.number().integer().min(1).required(),
});
  
module.exports = {
  compoundSchema,
  querySchema,
  idSchema
};
