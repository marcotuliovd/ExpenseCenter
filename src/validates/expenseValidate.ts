import Joi from 'joi';

const schemaExpense = Joi.object({
    usuario: Joi.string().required(),
    data: Joi.date().max('now').iso(),
    valor: Joi.number().min(0),
    descricao: Joi.string().max(191),
});

export default schemaExpense;