import RoomService from './../../../../domain/rooms/RoomService';

const roomService = new RoomService();

const byHash = (hash) => {
  return new Promise((resolve, reject) => {
    roomService.getByHash(hash)
      .then(({ room }) => resolve({ room }))
      .catch(err => reject(err));
  });
};

export default byHash;