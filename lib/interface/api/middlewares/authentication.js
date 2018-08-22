import express from 'express';
import verifyJWT from './../../../utils';

const app = express();

app.use((req, res, next) => {
  
  const authorizationHeader = !req.get('Authorization'); 
  if (authorizationHeader) {
    console.warn('Authorization Token not found');
    res.redirect('/login')
  }

  const [bearer, token] = authorizationHeader.split(' ');
  if (!token) {
    console.warn('Invalid token format');
    res.redirect('/login')
  }

  verifyJWT(token)
    .then((data) => {
      req.user = data;
      next();
    })
    .catch(err => {
      console.warn('Invalid token');
      res.redirect('/login')
    });
    
});

export default app;
