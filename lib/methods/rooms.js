import { getHash } from './../utils';
import Database from './../db';

const Rooms = new Database({ table: 'rooms' });

export const createRoom = ({ name, desc }) => {
  const newRoom = { room: { name, desc } };
  newRoom.room.hash = getHash([newRoom.room.name]);
  return new Promise((resolve, reject) => {
    Rooms.insert(newRoom)
      .then(({ changes }) => resolve({ room: changes[0].new_val.room }))
      .catch(reject);
  });
};

export const getRoom = (hash) => {
  return new Promise((resolve, reject) => {
    Rooms.filter({ room: { hash } })
      .then((data) => {
        data.next()
          .then(resolve)
          .catch(reject);
      })
      .catch(reject);
  });
};

export default {
  createRoom,
  getRoom
};
