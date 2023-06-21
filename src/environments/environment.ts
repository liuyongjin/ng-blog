import { DelonMockModule } from '@delon/mock';

import * as MOCKDATA from '../app/mock';

export const environment = {
  production: false,
  modules: [DelonMockModule.forRoot({ data: MOCKDATA })],
};
