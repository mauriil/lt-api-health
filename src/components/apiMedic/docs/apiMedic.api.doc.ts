import { Endpoint } from '../../../common/commons.docs';

export const getHealthEndpoint: Endpoint = {
    '/health/': {
        get: {
            tags: ['Health'],
            description: 'Health of the MS',
            operationId: 'health',
            responses: {
                200: {
                    description: 'Success response, the microservice is alive',
                    content: {},
                },
                500: {
                    description: 'Error response, the microservice is down',
                    content: {},
                },
            },
        },
    },
};
