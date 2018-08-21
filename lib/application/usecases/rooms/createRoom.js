import Room from './../../rooms/Room';
import RoomService from '../../../domain/rooms/RoomService';

const createRoom = ({ name, description }) => {
  const newRoom = new Room({ name, description });
  const roomService = new RoomService();

  return new Promise((resolve, reject) => {
    roomService.save(newRoom)
      .then(() => {
        resolve({ room: newRoom })
      })
      .catch(err => reject(err));
  });

};

export default createRoom;