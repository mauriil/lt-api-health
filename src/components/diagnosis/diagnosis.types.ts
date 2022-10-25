import { Request } from 'express';

export interface Diagnosis {
    _id?: string,
    user: string,
    symptoms: [{
        id: number,
        name: string
    }],
    diagnosis: [{
        Issue:{  
            ID: number,
            Name: string,
            ProfName: string,
            Icd : number,
            IcdName : string,
            Accuracy: number
         },
         Specialisation: [
            {  
               ID: number,
               Name: string,
               SpecialistID: number
            },
            {  
               ID: number,
               Name: string,
               SpecialistID: number
            }
         ]
    }],
    confirmed: boolean,
    confirmedDiagnosis: {
        Issue:{  
            ID: number,
            Name: string,
            ProfName: string,
            Icd : number,
            IcdName : string,
            Accuracy: number
         },
         Specialisation: [
            {  
               ID: number,
               Name: string,
               SpecialistID: number
            },
            {  
               ID: number,
               Name: string,
               SpecialistID: number
            }
         ]
    },
}

export interface PostDiagnosisRequest extends Request {
    body: Partial<Diagnosis>;
}





