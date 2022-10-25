import { Request } from 'express';

export interface issue {  
   apiMedicId: number,
   name: string,
   accuracy: number
}
export interface Diagnosis {
    _id?: string,
    user: string,
    symptoms: [{
        id: number,
        name: string
    }],
    diagnosis: [{
        issue: issue,
    }],
    confirmed: boolean,
    confirmedDiagnosis: {
         issue: issue,
    },
}

export interface PostDiagnosisRequest extends Request {
    body: Partial<Diagnosis>;
}

export interface ByUserIdRequest extends Request {
   params: {
       userId: string
   };
}
export interface patchDiagnosticIdRequest extends Request {
    params: {
        diagnosticId: string
    };
    body: Partial<Diagnosis>;
 }
