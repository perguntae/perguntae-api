import Room from './roomModel';

export default function() {
  return (roomObj) => {
    return new Promise((resolve, reject) => {

      const newRoom = new Room(roomObj);

      newRoom.save((err) => {
        if (err) reject(err)
        else resolve({ roomObj });
      });

    });
  };
};
