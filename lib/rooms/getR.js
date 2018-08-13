import Room from './roomModel';
export default function(DB) {
  return (hash) => {
    return new Promise((resolve, reject) => {
      Room.findOne({ hash }, (err, room) =>  {
        if (err) reject(err)
        resolve({ room });
      })
    });
  };
}
