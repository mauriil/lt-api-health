import * as dataAccess from './diagnosis.data-access-layer';
import { Diagnosis } from './diagnosis.types';
import { HttpRequestError } from '../../utils/httpRequestError';

export const createDiagnosis = async (data: Partial<Diagnosis>): Promise<object> => {

  //TODO: call to dal create object
  const response = {
    ok: 'ok'
   }
   return response

};