import swaggerJSDoc from 'swagger-jsdoc';

export type Endpoint = {
    [endpoint: string]: {
        delete?: swaggerJSDoc.Operation;
        patch?: swaggerJSDoc.Operation;
        put?: swaggerJSDoc.Operation;
        get?: swaggerJSDoc.Operation;
        post?: swaggerJSDoc.Operation;
    };
};

export type TypeDoc = {
    schema: {
        type: string;
        properties: Record<string, unknown>;
    };
    example: Record<string, unknown>;
};

export const DealerIdParameter: swaggerJSDoc.Parameter = {
    name: 'dealerId',
    in: 'param',
    required: true,
    type: 'string',
    example: '1113',
};

export const UnexpectedErrorDoc = {
    422: {
        description: 'Error response, when an error occurred',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                    },
                    example: { message: 'Unexpected error on endpoint' },
                },
            },
        },
    },
};
