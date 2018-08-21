import all from "./methods/all";
import byHash from "./methods/byHash";
import createRoom from "./methods/createRoom";
import getRoomAndQuestions from "./methods/getRoomAndQuestions";

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

  getRoomAndQuestions(hash) {
    return getRoomAndQuestions(hash);
  }

}

export default RoomController;