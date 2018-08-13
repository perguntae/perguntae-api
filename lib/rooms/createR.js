import Room from './roomModel';
import { getHash } from './../utils';

export default function() {
  return ({ name, desc }) => {
    return new Promise((resolve, reject) => {
      console.log(Room);
      Room.create({
        name,
        description: desc,
        hash: getHash([name])
      }, (err, room) => {
        console.log({
          err: err,
          room: room
        });
        if (err) reject(err)
        else resolve({ room });
      })
    });
  };
};
