import { Router } from 'express';
import sh from 'shorthash';
import Database from './../../db';

const roomRouter = new Router();

const Rooms = new Database({ table: 'rooms' });
const Questions = new Database({ table: 'questions' });

roomRouter.route('/new')
  .post((req, res) => {

    const newRoom = {
      room: {
        name: req.body.name,
        desc: req.body.desc
      }
    };

    if (req.body.pass) newRoom.room.pass = req.body.pass;
    newRoom.room.hash = sh.unique(Date.now() + newRoom.room.name);

    Rooms.insert(newRoom)
      .then(data => res.json({
        status: 'ok',
        msg: 'Room created.',
        data: { hash: data.changes[0].new_val.room.hash }
      }))
      .catch(err => res.json(err));

  });

roomRouter.route('/:hash')
  .get((req, res) => {
    Rooms.filter({ room: { hash: req.params.hash } })
      .then((data) => {
        data.next()
          .then(o => res.json(o))
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  });

roomRouter.route('/:hash/questions')
  .get((req, res) => {
    Questions.filter({ question: { room: req.params.hash } })
      .then((data) => {
        data.toArray()
          .then((questions) => res.json({
            status: 'ok',
            data: { questions: questions.map(q => q.question) }
          }))
          .catch(res.json);
      })
  });

roomRouter.route('/:hash/questions/new')
  .post((req, res) => {
    const newQuestion = {
      question: {
        room: req.params.hash,
        text: req.body.question,
        desc: req.body.desc
      }
    };

    newQuestion.question.hash = sh.unique(Date.now() + req.params.hash + req.body.question.substring(0, 10));

    Questions.insert(newQuestion)
      .then(data => res.json({
        status: 'ok',
        msg: 'Question created.',
        data: { question: data.changes[0].new_val.question }
      }))
      .catch(err => res.json(err));

  });

export default roomRouter;
