import createRoom from './../../../usecases/rooms/createRoom';

const createRoomMethod = ({ name, description }) => {
  return new Promise((resolve, reject) => {
    createRoom({ name, description })
      .then(({ room }) => resolve({ room }))
      .catch(err => reject(err));
  });
};

export default createRoomMethod;