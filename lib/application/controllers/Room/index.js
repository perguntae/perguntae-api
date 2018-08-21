import all from "./methods/all";
import byHash from "./methods/byHash";
import createRoom from "./methods/createRoom";

class RoomController {
  
  all() {
    return all();
  }

  byHash(hash) {
    return byHash(hash);
  }
  
  createRoom({ name, description }) {
    return createRoom({ name, description });
  }

}

export default RoomController;