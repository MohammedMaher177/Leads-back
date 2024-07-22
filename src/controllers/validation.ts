import Joi from 'joi';

export const create = {
  body: Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'name is required.',
      'any.required': 'name is required.',
    }),
    query: Joi.string(),
    leadSrc: Joi.string(),
    propertyType: Joi.string(),
    status: Joi.string().valid('newLeads', 'contacted').required(),
    date: Joi.date().required(),
  })
};

export const update = {
  body: Joi.object({
    name: Joi.string(),
    status: Joi.string().valid('newLeads', 'contacted'),
    date: Joi.date(),
    query: Joi.string(),
    leadSrc: Joi.string(),
    propertyType: Joi.string(),
  })
};
