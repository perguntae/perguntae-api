import RoomService from './../../../../domain/rooms/RoomService';

const roomService = new RoomService();

const all = () => {
  return new Promise((resolve, reject) => {
    roomService.getAll()
      .then(({ rooms }) => resolve({ rooms }))
      .catch(err => reject(err));
  });
};

export default all;