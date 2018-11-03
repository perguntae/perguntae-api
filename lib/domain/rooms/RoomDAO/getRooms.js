import Room from './roomModel';
export default function() {
  return () => {
    return new Promise((resolve, reject) => {
      Room.find({}, (err, rooms) =>  {
        if (err) reject(err)
        resolve({ rooms });
      })
    });
  };
}
