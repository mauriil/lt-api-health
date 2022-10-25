import * as dataAccess from './diagnosis.data-access-layer';
import { Diagnosis } from './diagnosis.types';
import { HttpRequestError } from '../../utils/httpRequestError';

export const createDiagnosis = async (data: Partial<Diagnosis>): Promise<object> => {
  const response = await dataAccess.createDiagnosis(data);
  return response

};

export const getUserDiagnosis = async (userId: string): Promise<object> => {
  const response = await dataAccess.getDiagnosisByUserId(userId);
  return response;
};

export const patchDiagnosis = async (diagnosisId: string, data: Partial<Diagnosis>): Promise<object> => {
  const response = await dataAccess.patchDiagnosis(diagnosisId, data);
  return response;
};
