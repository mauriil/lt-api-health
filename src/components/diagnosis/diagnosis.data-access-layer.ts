import { DiagnosisModel } from "./diagnosis.model";
import { Diagnosis } from "./diagnosis.types";
import { HttpRequestError } from "../../utils/httpRequestError";

export const createDiagnosis = async (diagnosisData: Partial<Diagnosis>): Promise<Diagnosis> => {
  return DiagnosisModel.create({
    user: diagnosisData.user,
    symptoms: diagnosisData.symptoms,
    diagnosis: diagnosisData.diagnosis,
  });
};

export const getDiagnosisByUserId = async (user: string): Promise<Diagnosis[]> => {
  return DiagnosisModel.find({user: user});
};

export const patchDiagnosis = async (diagnosisId: string, diagnosisData: Partial<Diagnosis>): Promise<Diagnosis> => {
  return DiagnosisModel.findOneAndUpdate({_id: diagnosisId}, {
    $set: { 
      confirmed: diagnosisData.confirmed,
      confirmedDiagnosis: diagnosisData.confirmed ? diagnosisData.confirmedDiagnosis : null
    },
  },
  {new: true});
};
