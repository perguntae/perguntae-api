import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

import helloWorldRoutes from './routes/hello-world';
import roomRoutes from './routes/room';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/Room', roomRoutes);

export default app;
