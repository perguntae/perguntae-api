import { normalizePort } from './utils';

export const APP = {
	db: 'localhost',
	dbport: 27017,
  dbname: 'perguntae',
  host: process.env.HOST || 'localhost',
  port: normalizePort(process.env.PORT || '3000')
};

export default {
  APP
};
