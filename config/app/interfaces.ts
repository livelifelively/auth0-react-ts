import {AuthOptions} from 'auth0-js';

interface IAPI {
  url?: string;
  timeout?: number;
}

export interface IAppConfig {
  auth0: AuthOptions;
  api: IAPI;
    loggingServerKey: string;
}
