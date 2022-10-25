import Joi from 'joi';

export const DiagnosisPostSchema = Joi.object({
    user: Joi.string().required(),
    symptoms: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
    })).required(),
    diagnosis: Joi.array().items(Joi.object({
        issue: Joi.object({
            apiMedicId: Joi.number().required(),
            name: Joi.string().required(),
            accuracy: Joi.number().required(),
        }).required(),
    })).required(),
});

export const DiagnosisPatchSchema = Joi.object({
    confirmed: Joi.boolean().required(),
    confirmedDiagnosis: Joi.object({
        issue: Joi.object({
            apiMedicId: Joi.number().required(),
            name: Joi.string().required(),
            accuracy: Joi.number().required(),
        }).required(),
    }).required(),
});
