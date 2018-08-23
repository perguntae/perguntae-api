import Room from './../Room';

const getUserRoomsMethod = function(RoomDAO, { userId }) {
  return new Promise((resolve, reject) => {
    RoomDAO.getUserRooms(userId)
      .then(({ rooms }) => {
        const roomsFound = rooms.map(r => new Room(r));
        resolve({ rooms: roomsFound })
      })
      .catch(err => reject(err));
  })
};

export default getUserRoomsMethod;