import { Router } from 'express';
import sh from 'shorthash';
import Database from './../../db';

const roomRouter = new Router();

const DB = new Database({ table: 'rooms' });

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

    DB.insert(newRoom)
      .then(data => res.json({
        status: 'ok',
        msg: 'Room created.',
        hash: data.changes[0].new_val.room.hash
      }))
      .catch(err => res.json(err));

  });

roomRouter.route('/:hash')
  .get((req, res) => {
    DB.filter({ room: { hash: req.params.hash } })
      .then((data) => {
        data.next()
          .then(o => res.json(o))
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  });

export default roomRouter;
