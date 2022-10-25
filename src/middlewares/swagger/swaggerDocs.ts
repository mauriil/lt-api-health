import swaggerJSDoc from 'swagger-jsdoc';
import UsersDocs from '../../components/users/docs';
import HealthDocs from '../../components/health/docs';

const swaggerOptions: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openApi: '3.0.0',
        info: {
            title: 'LT health API',
            description: 'LT health API Documentation',
            version: '1.0',
        },
        servers: [   //Delete comments and configure according to the publication url
            {
                url: '{LThealthAPI}',
                variables: {
                    LThealthAPI: {
                        enum: [
                            'https://lt-health-api.development.com.ar',
                            'https://lt-health-api.staging.com.ar',
                        ],
                        default: 'https://lt-health-api.development.com.ar',
                    },
                },
            },
        ],
        paths: {
            ...HealthDocs,
            ...UsersDocs,
        },
    },
    apis: [],
};

export default swaggerJSDoc(swaggerOptions);
