import express from 'express';

const app = express();

app.use((req, res, next) => {
    if (!req.get('Authorization')) {
      console.warn('Authorization Token not found');
      res.redirect('/login')
    }
    next();
});

export default app;
