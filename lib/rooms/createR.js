export default function(DB, getHash) {
  return ({ name, desc }) => {
    const newRoom = { room: { name, desc } };
    newRoom.room.hash = getHash([newRoom.room.name]);
    return new Promise((resolve, reject) => {
      DB.insert(newRoom)
        .then(({ changes }) => resolve({ room: changes[0].new_val.room }))
        .catch(reject);
    });
  };
};
