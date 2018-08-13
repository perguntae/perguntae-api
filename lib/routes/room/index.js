import { Router } from 'express';
import Rooms from './../../rooms';
import Questions from './../../questions';

const roomRouter = new Router();

roomRouter.route('/new')
  .post((req, res) => {

    const { name, desc } = req.body;
    Rooms.createRoom({ name, desc })
      .then(({ room }) => {
        console.log('deu certo?')
        console.log({ room });
        res.json({
          status: 'ok',
          msg: 'Room created.',
          data: room
        })
      })
      .catch(err => {
        console.log('deu errado?')
        res.json(err)
      });

  });

roomRouter.route('/:hash')
  .get((req, res) => {
    Rooms.getRoom(req.params.hash)
      .then(room => res.json(room))
      .catch(err => res.json(err));
  });

roomRouter.route('/:hash/questions')
  .get((req, res) => {
    Questions.getQuestions(req.params.hash)
      .then((questions) => res.json({
        status: 'ok',
        data: { questions }
      }))
      .catch(res.json);
  });

roomRouter.route('/:hash/questions/new')
  .post((req, res) => {

    const { question, desc } = req.body;
    const hash = req.params.hash;

    Questions.createQuestion(req.params.hash, { question, desc })
      .then(({ question }) => res.json({
        status: 'ok',
        msg: 'Question created.',
        data: { question }
      }))
      .catch(err => res.json(err));

  });

export default roomRouter;
