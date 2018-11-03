import Room from './roomModel';

const saveExistingRoom = (room) => {
  return new Promise((resolve, reject) => {
    Room.findOneAndUpdate({ id: room.id }, room, (err, roomUpdated) => {
      if (err) reject(err);
      resolve({ room: roomUpdated });
    });
  });
};

const saveNewRoom = (room) => {
  return new Promise((resolve, reject) => {
    const newRoom = new Room(room);
    newRoom.save((err) => {
      if (err) reject(err)
      else resolve({ room });
    });
  });
};

export default function() {
  return (room) => room.id ? saveExistingRoom(room) : saveNewRoom(room);
};
