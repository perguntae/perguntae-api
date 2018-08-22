import { Router } from 'express';
import signInRoute from './signInRoute';

const loginRouter = new Router();

/**
 * @api {post} /login/signIn Sign In
 * @apiName signInRoute
 * @apiGroup Login
 *
 * @apiParam {String} username The username
 * @apiParam {String} password The password
 *
 * @apiSuccess {String} token The JWT to put into Authorization field in the header
 *
 */
loginRouter.route('/signIn')
  .post((req, res) => {
    signInRoute({ request: req, response: res })
  });

export default loginRouter;
