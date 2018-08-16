import Room from './roomModel';
import { getHash } from '../utils';

export default function() {
  return ({ name, description }) => {
    return new Promise((resolve, reject) => {

      const room = new Room({
        name,
        description,
        hash: getHash([name])
      });

      room.save((err) => {
        if (err) reject(err)
        else resolve({ room });
      });

    });
  };
};
