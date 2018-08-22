import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import authentication from './middlewares/authentication';
import loginRoutes from './routes/login';
import roomRoutes from './routes/room';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/login', loginRoutes)
app.use('/room', authentication, roomRoutes);

export default app;
