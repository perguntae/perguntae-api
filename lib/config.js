import { normalizePort } from './utils';

export const APP = {
	db: 'kitazume.com.br',
	dbport: 28015,
  dbname: 'perguntae',
  host: process.env.HOST || 'localhost',
  port: normalizePort(process.env.PORT || '3000'),
};

export default {
  APP,
};
