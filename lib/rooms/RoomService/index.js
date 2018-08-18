import RoomDAO from './../RoomDAO';
import saveRoom from './saveRoom';
import getByHash from './getByHash';
import getAll from './getAll';

class RoomService {
    
  getByHash(hash) {
    return getByHash(RoomDAO, { hash });
  }

  save(room) {
    return saveRoom(RoomDAO, { room });
  }

  getAll() {
    return getAll(RoomDAO);
  }
}

export default RoomService;