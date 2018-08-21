import RoomService from './../../../../domain/rooms/RoomService';

const roomService = new RoomService();

const byHash = (hash) => {
  return new Promise((resolve, reject) => {
    roomService.getByHash(hash)
      .then(({ rooms }) => resolve({ rooms }))
      .catch(err => reject(err));
  });
};

export default byHash;