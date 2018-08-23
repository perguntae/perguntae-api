import Room from '../../../domain/rooms/Room';
import RoomService from '../../../domain/rooms/RoomService';

const createRoom = ({ name, description, owner=false }) => {
  if (!owner) throw new Error('USECASE ERROR: No owner for this room');

  const newRoom = new Room({ name, description, owner });

  newRoom.activate();

  
  return new Promise((resolve, reject) => {
    RoomService.save(newRoom)
    .then(() => {
        resolve({ room: newRoom })
      })
      .catch(err => reject(err));
  });

};

export default createRoom;