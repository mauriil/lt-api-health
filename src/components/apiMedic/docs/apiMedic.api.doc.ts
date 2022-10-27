import { Endpoint } from '../../../common/commons.docs';

export const getSymptomsEndpoint: Endpoint = {
    '/api-medic/symptoms/': {
        get: {
            tags: ['apiMedic'],
            description: 'get all symptoms described in apiMedic DB',
            operationId: 'health',
            responses: {
                200: {
                    description: 'Success response',
                    content: {},
                },
                422: {
                    description: 'Error response, the microservice is down',
                    content: {},
                },
            },
        },
    },
};

export const getDiagnosisEndpoint: Endpoint = {
    '/api-medic/diagnosis/': {
        get: {
            tags: ['apiMedic'],
            description: 'get all related diagnosis described in apiMedic DB in base of symptoms, gender and dob',
            operationId: 'health',
            responses: {
                200: {
                    description: 'Success response',
                    content: {},
                },
                422: {
                    description: 'Error response, the microservice is down',
                    content: {},
                },
            },
        },
    },
};

export const getIssuesEndpoint: Endpoint = {
    '/api-medic/issues/': {
        get: {
            tags: ['apiMedic'],
            description: 'get all issues described in apiMedic DB',
            operationId: 'health',
            responses: {
                200: {
                    description: 'Success response',
                    content: {},
                },
                422: {
                    description: 'Error response, the microservice is down',
                    content: {},
                },
            },
        },
    },
};
