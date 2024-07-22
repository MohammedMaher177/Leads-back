import Joi from 'joi';

export const create = Joi.object({
  name: Joi.string().trim().required(),
  query: Joi.string().trim(),
  leadSrc: Joi.string().trim(),
  propertyType: Joi.string().trim(),
  status: Joi.string().valid('newLeads', 'contacted').required(),
  date: Joi.date().required(),
});

export const update = Joi.object({
  name: Joi.string().trim(),
  status: Joi.string().valid('newLeads', 'contacted'),
  date: Joi.date(),
  query: Joi.string().trim(),
  leadSrc: Joi.string().trim(),
  propertyType: Joi.string().trim(),
});
