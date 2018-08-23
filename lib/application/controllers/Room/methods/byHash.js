import RoomService from './../../../../domain/rooms/RoomService';

const byHash = (hash) => {
  return new Promise((resolve, reject) => {
    RoomService.getByHash(hash)
      .then(({ room }) => resolve({ room }))
      .catch(err => reject(err));
  });
};

export default byHash;