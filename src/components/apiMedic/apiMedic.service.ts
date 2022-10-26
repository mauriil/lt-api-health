import { getToken } from "./utils/apiMedicAuth";
const axios = require('axios');
import { HttpRequestError } from '../../utils/httpRequestError';
import { getDiagnosisRequest } from "./apiMedic.types";

export const getAllSymptoms = async () => {
    try {
        const apiMedicBearerToken = await getToken();
        
        const apiMedicSymptoms = await axios.get(
            `${process.env.API_MEDIC_BASE_URL}symptoms?token=${apiMedicBearerToken}&language=en-gb`,
        );

        return apiMedicSymptoms.data;
    } catch (error) {
        throw new HttpRequestError('Api medic service error', 422, error);
    }
};

export const getAllDiagnosis = async (queryParams: getDiagnosisRequest) => {
    try {
        const apiMedicBearerToken = await getToken();
        const { symptoms, gender, year_of_birth } = queryParams.query;

        if (!symptoms) throw new HttpRequestError('Api medic service error', 422, '"symptoms" queryParam missing');
        if (!gender) throw new HttpRequestError('Api medic service error', 422, '"gender" queryParam missing');
        if (!year_of_birth) throw new HttpRequestError('Api medic service error', 422, '"year_of_birth" queryParam missing');
        
        const apiMedicDiagnosis = await axios.get(
            `${process.env.API_MEDIC_BASE_URL}diagnosis?token=${apiMedicBearerToken}&language=en-gb&symptoms=${symptoms}&gender=${gender}&year_of_birth=${year_of_birth}`,
        );

        return apiMedicDiagnosis.data;
    } catch (error) {
        throw new HttpRequestError('Api medic service error', 422, error);
    }
};