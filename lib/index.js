import mongoose from 'mongoose';
import app from './app';
import { APP } from './config';

mongoose.connect(`mongodb://${APP.db}:${APP.dbport}/${APP.dbname}`);

mongoose.connection.on('error', err => {
  console.err('Não foi possível iniciar a aplicação.')
  throw new Error(err);
})

mongoose.connection.once('open', () => {
  app.listen(APP.port, () => {
    console.log(`App listening on port ${APP.port}. ;)`);
  });
});
