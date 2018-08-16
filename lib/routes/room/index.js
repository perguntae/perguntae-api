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

roomRouter.route('/new')
  .post((req, res) => {
    newRoomRoute({ request: req, response: res })
  });

roomRouter.route('/all')
  .get((req, res) => {
    allRoomsRoute({ request: req, response: res })
  });

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

roomRouter.route('/:hash/questions')
  .get((req, res) => {
    getRoomQuestionsByHashRoute({ request: req, response: res })
  });

roomRouter.route('/:hash/questions/new')
  .post((req, res) => {
    createNewRoomQuestionByRoomHash({ request: req, response: res })
  });

export default roomRouter;
