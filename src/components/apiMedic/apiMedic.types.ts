import { Request } from 'express';

export interface getDiagnosisRequest extends Request {
    query: {
        symptoms: string,
        gender: string,
        year_of_birth: string,
    };
 }
