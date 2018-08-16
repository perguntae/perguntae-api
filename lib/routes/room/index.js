import { Router } from 'express';
import getRoomByHashRoute from './getRoomByHashRoute';
import allRoomsRoute from './allRoomsRoute';
import newRoomRoute from './newRoomRoute';
import getRoomQuestionsByHashRoute from './getRoomQuestionsByHashRoute';
import createNewRoomQuestionByRoomHash from './createNewRoomQuestionByRoomHash';
import getSmallQRCode from './getSmallQRCode';
import getMediumQRCode from './getMediumQRCode';
import getLargeQRCode from './getLargeQRCode';
import getXLargeQRCode from './getXLargeQRCode';

const roomRouter = new Router();

/**
 * @api {post} /room/new New room
 * @apiName newRoomRoute
 * @apiGroup Room
 * @apiDescription Create a new room
 *
 * @apiParam {String} name The name of the new room
 * @apiParam {String} [description] Some description for the room
 *
 * @apiSuccess {String} status The status of the operation. For now it's always 'ok'.
 * @apiSuccess {String} msg Some message I don't know why I put there.
 * @apiSuccess {Object} data A object of the room. There inside is the room hash.
 *
 */
roomRouter.route('/new')
  .post((req, res) => {
    newRoomRoute({ request: req, response: res })
  });

/**
 * @api {get} /room/all All rooms
 * @apiName allRoomsRoute
 * @apiGroup Room
 * @apiDescription Get a collection of all rooms
 *
 * @apiSuccess {String} status The status of the operation. For now it's always 'ok'.
 * @apiSuccess {String} msg Some message I don't know why I put there.
 * @apiSuccess {Object} data All the rooms
 *
 */
  roomRouter.route('/all')
  .get((req, res) => {
    allRoomsRoute({ request: req, response: res })
  });

/**
 * @api {get} /room/:hash Room by hash
 * @apiName getRoomByHashRoute
 * @apiGroup Room
 * @apiDescription Get a specific room using the hash to identify
 *
 * @apiSuccess {String} status The status of the operation. For now it's always 'ok'.
 * @apiSuccess {String} msg Some message I don't know why I put there.
 * @apiSuccess {Object} data The room object.
 *
 */
roomRouter.route('/:hash')
  .get((req, res) => {
    getRoomByHashRoute({ request: req, response: res })
  });

roomRouter.route('/:hash/qrcode/small')
  .get((req, res) => {
    getSmallQRCode({ request: req, response: res })
  });

roomRouter.route('/:hash/qrcode/medium')
  .get((req, res) => {
    getMediumQRCode({ request: req, response: res })
  });

roomRouter.route('/:hash/qrcode/large')
  .get((req, res) => {
    getLargeQRCode({ request: req, response: res })
  });

roomRouter.route('/:hash/qrcode/xlarge')
  .get((req, res) => {
    getXLargeQRCode({ request: req, response: res })
  });

/**
 * @api {get} /room/:hash/questions Questions
 * @apiName getRoomQuestionsByHashRoute
 * @apiGroup Room
 * @apiDescription Get a collection of all the questions of the room.
 *
 * @apiSuccess {String} status The status of the operation. For now it's always 'ok'.
 * @apiSuccess {String} msg Some message I don't know why I put there.
 * @apiSuccess {Object} data The collection of the questions.
 *
 */
roomRouter.route('/:hash/questions')
  .get((req, res) => {
    getRoomQuestionsByHashRoute({ request: req, response: res })
  });

/**
 * @api {post} /room/:hash/questions/new New question
 * @apiName createNewRoomQuestionByRoomHash
 * @apiGroup Room
 * @apiDescription Create a new question into the specific room.
 *
 * @apiParam {String} question The text of the question
 * @apiParam {String} [description] Some description for the question
 * 
 * @apiSuccess {String} status The status of the operation. For now it's always 'ok'.
 * @apiSuccess {String} msg Some message I don't know why I put there.
 * @apiSuccess {Object} data The question object itself.
 *
 */
roomRouter.route('/:hash/questions/new')
  .post((req, res) => {
    createNewRoomQuestionByRoomHash({ request: req, response: res })
  });

export default roomRouter;
