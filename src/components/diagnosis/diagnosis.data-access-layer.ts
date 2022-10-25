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
