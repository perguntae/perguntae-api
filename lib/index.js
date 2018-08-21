import mongoose from 'mongoose';
import api from './interface/api';
import { APP } from './config';

mongoose.connect(`mongodb://${APP.db}:${APP.dbport}/${APP.dbname}`);

mongoose.connection.on('error', err => {
  console.err('Não foi possível iniciar a aplicação.')
  throw new Error(err);
})

mongoose.connection.once('open', () => {
  api.listen(APP.port, () => {
    console.log(`App listening on port ${APP.port}. ;)`);
  });
});
