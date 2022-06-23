import swaggerJSDoc from 'swagger-jsdoc';
import UsersDocs from '../../components/users/docs';
import HealthDocs from '../../components/health/docs';

const swaggerOptions: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openApi: '3.0.0',
        info: {
            title: 'GoGrow SingUp API',
            description: 'GoGrow SingUp API Documentation',
            version: '1.0',
        },
        servers: [   //Delete comments and configure according to the publication url
            {
                url: '{GOGROW_API}',
                variables: {
                    GOGROW_API: {
                        enum: [
                            'https://gogrow-api.development.com.ar',
                            'https://gogrow-api.staging.com.ar',
                        ],
                        default: 'https://gogrow-api.development.com.ar',
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
