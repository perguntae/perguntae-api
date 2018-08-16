import { Router } from 'express';

const helloWorldRoutes = Router();

helloWorldRoutes.get('/', (req, res) => {
  res.json({
    msg: 'Success!',
  });
});

export default helloWorldRoutes;
