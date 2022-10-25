import Joi from 'joi';

export const DiagnosisPostSchema = Joi.object({
    user: Joi.string().required(),
    symptoms: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
    })).required(),
    diagnosis: Joi.array().items(Joi.object({
        Issue: Joi.object({
            ID: Joi.number().required(),
            Name: Joi.string().required(),
            ProfName: Joi.string().required(),
            Icd : Joi.number().required(),
            IcdName : Joi.string().required(),
            Accuracy: Joi.number().required(),
        }).required(),
        Specialisation: Joi.array().items(
            Joi.object({
                ID: Joi.number().required(),
                Name: Joi.string().required(),
                SpecialistID: Joi.number().required(),            
            }).required()
        )
    })).required(),
});
