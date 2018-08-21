import Room from './../Room';

const getByHash = function(RoomDAO, { hash }) {
  return new Promise((resolve, reject) => {
    RoomDAO.getRoom(hash)
      .then(({ room }) => {
        const newRoom = new Room(room);
        resolve({ room: newRoom });
      })
      .catch(err => reject(err));
  })
};

export default getByHash;