import RoomService from './../../../../domain/rooms/RoomService';

const getRooms = ({ userId }) => {
  return new Promise((resolve, reject) => {
    RoomService.getUserRooms({ userId })
      .then(({ rooms }) => resolve({ rooms }))
      .catch(err => reject(err));
  });
};

export default getRooms;