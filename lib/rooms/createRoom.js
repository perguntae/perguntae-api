import Room from './roomModel';
import { getHash } from '../utils';

export default function() {
  return ({ name, desc }) => {
    return new Promise((resolve, reject) => {

      const room = new Room({
        name,
        description: desc,
        hash: getHash([name])
      });

      room.save((err) => {
        if (err) reject(err)
        else resolve({ room });
      });

    });
  };
};
