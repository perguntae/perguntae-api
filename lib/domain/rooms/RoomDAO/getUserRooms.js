import Room from './roomModel';
export default function() {
  return (userId) => {
    return new Promise((resolve, reject) => {
      Room.find({ owner: userId  }, (err, rooms) =>  {
        if (err) reject(err)
        resolve({ rooms });
      })
    });
  };
}
