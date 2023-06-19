import { DelonMockModule } from '@delon/mock';

import * as MOCKDATA from '../app/mock';
console.log(MOCKDATA);

export const environment = {
  production: false,
  modules: [DelonMockModule.forRoot({ data: MOCKDATA })],
};
