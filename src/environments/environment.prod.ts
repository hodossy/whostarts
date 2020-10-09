import { version } from '../../package.json';

export const environment = {
  production: true,
  version: version.startsWith('refs/tags/') ? version.substr(10) : version
};
