import RoomDAO from './../RoomDAO';
import saveRoom from './saveRoom';
import getByHash from './getByHash';
import getAll from './getAll';
import getUserRooms from './getUserRooms';

class RoomService {
    
  static getByHash(hash) {
    return getByHash(RoomDAO, { hash });
  }

  static save(room) {
    return saveRoom(RoomDAO, { room });
  }

  static getAll() {
    return getAll(RoomDAO);
  }

  static getUserRooms({ userId }) {
    return getUserRooms(RoomDAO, { userId });
  }
}

export default RoomService;