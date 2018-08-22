import { Router } from 'express';
import signInRoute from './signInRoute';
import signUpRoute from './signUpRoute';

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

/**
 * @api {post} /login/signUp Sign Up
 * @apiName signUpRoute
 * @apiGroup Login
 *
 * @apiParam {String} username The username for the new user
 * @apiParam {String} password The password for the new user
 * @apiParam {String} email The email for the new user
 * @apiParam {String} [firstname] The firstname for the new user
 * @apiParam {String} [lastname] The lastname for the new user
 *
 * @apiSuccess {String} msg A success message
 * @apiSuccess {String} user The object of the user created
 *
 */
loginRouter.route('/signUp')
  .post((req, res) => {
    signUpRoute({ request: req, response: res })
  });

export default loginRouter;
