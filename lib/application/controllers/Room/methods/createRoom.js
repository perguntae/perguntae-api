import createRoom from './../../../usecases/rooms/createRoom';

const createRoomMethod = ({ name, description, owner }) => {
  return new Promise((resolve, reject) => {
    createRoom({ name, description, owner })
      .then(({ room }) => resolve({ room }))
      .catch(err => reject(err));
  });
};

export default createRoomMethod;