import Joi from 'joi';

export const create = Joi.object({
  name: Joi.string().trim().required(),
  status: Joi.string().valid('newLeads', 'contacted').required(),
  date: Joi.date().required(),
});

export const update = Joi.object({
  name: Joi.string().trim().required(),
  status: Joi.string().valid('newLeads', 'contacted').required(),
  date: Joi.date().required(),
});
