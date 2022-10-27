import { getSymptomsEndpoint, getDiagnosisEndpoint, getIssuesEndpoint } from './apiMedic.api.doc';

export default {
    ...getSymptomsEndpoint,
    ...getDiagnosisEndpoint,
    ...getIssuesEndpoint,
};
