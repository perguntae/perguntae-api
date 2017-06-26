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

app.use('/hello-world', helloWorldRoutes);
app.use('/room', roomRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
