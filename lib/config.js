import { normalizePort } from './utils';

export const APP = {
  host: process.env.HOST || 'localhost',
  port: normalizePort(process.env.PORT || '3000'),
};

export default {
  APP,
};
