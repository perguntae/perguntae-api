import { Router } from 'express';
import small from './small';
import medium from './medium';
import large from './large';
import xLarge from './xLarge';

const qrcodeRouter = new Router();

/**
 * @api {get} /room/:hash/qrcode/small Small
 * @apiName small
 * @apiGroup QRcode
 * @apiDescription Get a 128px QRcode to identify the room. It will return a GIF of the QRcode
 *
 */
qrcodeRouter.route('/small')
  .get((req, res) => {
    small({ request: req, response: res })
  });

/**
 * @api {get} /room/:hash/qrcode/medium Medium
 * @apiName medium
 * @apiGroup QRcode
 * @apiDescription Get a 256px QRcode to identify the room. It will return a GIF of the QRcode
 *
 */
qrcodeRouter.route('/medium')
  .get((req, res) => {
    medium({ request: req, response: res })
  });

/**
 * @api {get} /room/:hash/qrcode/large Large
 * @apiName large
 * @apiGroup QRcode
 * @apiDescription Get a 512px QRcode to identify the room. It will return a GIF of the QRcode
 *
 */
qrcodeRouter.route('/large')
  .get((req, res) => {
    large({ request: req, response: res })
  });

/**
 * @api {get} /room/:hash/qrcode/xlarge X-Large
 * @apiName xLarge
 * @apiGroup QRcode
 * @apiDescription Get a 1024px QRcode to identify the room. It will return a GIF of the QRcode
 *
 */
qrcodeRouter.route('/xlarge')
  .get((req, res) => {
    xLarge({ request: req, response: res })
  });

export default qrcodeRouter;
