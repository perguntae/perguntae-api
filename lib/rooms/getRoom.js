import Room from './roomModel';

export default function() {
  return (hash) => {
    return new Promise((resolve, reject) => {
      Room.findOne({ hash }, (err, room) =>  {
        if (err) reject(err)
        resolve({ room });
      })
    });
  };
}
