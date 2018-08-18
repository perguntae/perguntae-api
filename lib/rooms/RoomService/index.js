import RoomDAO from './../RoomDAO';
import saveRoom from './saveRoom';
import getByHash from './getByHash';
import getAll from './getAll';

class RoomService {
    
  getByHash(hash) {
    getByHash(RoomDAO, { hash });
  }

  save(room) {
    saveRoom(RoomDAO, { room });
  }

  getAll() {
    getAll(RoomDAO);
  }
}

export default RoomService;