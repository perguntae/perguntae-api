import Room from './../Room';

const getAll = function(RoomDAO) {
  return new Promise((resolve, reject) => {
    RoomDAO.getRooms()
      .then(({ rooms }) => {
        const roomsFound = rooms.map(r => new Room(r));
        resolve({ rooms: roomsFound })
      })
      .catch(err => reject(err));
  })
};

export default getAll;