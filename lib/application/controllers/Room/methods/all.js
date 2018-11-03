import RoomService from './../../../../domain/rooms/RoomService';

const all = () => {
  return new Promise((resolve, reject) => {
    RoomService.getAll()
      .then(({ rooms }) => resolve({ rooms }))
      .catch(err => reject(err));
  });
};

export default all;