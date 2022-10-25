import { default as router } from './diagnosis.api';
import * as service from './diagnosis.service';

export default {
    router,
    routerPrefix: 'diagnosis',
    service,
};
