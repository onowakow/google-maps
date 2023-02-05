import { Environment } from './environment.model';
import { environment as environment_shared } from './environment';

export const environment: Environment = {
  ...environment_shared,
  PRODUCTION: true,
};
