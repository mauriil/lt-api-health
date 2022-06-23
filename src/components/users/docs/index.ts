import { postLoginEndpoint, postCreateUserEndpoint } from './users.api.doc';

export default {
    ...postLoginEndpoint,
    ...postCreateUserEndpoint,
};
