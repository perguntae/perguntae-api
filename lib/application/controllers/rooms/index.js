import all from "./methods/all";
import byHash from "./methods/byHash";

class RoomController {
  
  all() {
    return all();
  }

  byHash(hash) {
    return byHash(hash);
  }

}

export default RoomController;