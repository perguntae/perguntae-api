import all from "./methods/all";
import byHash from "./methods/byHash";
import createRoom from "./methods/createRoom";
import getRoomAndQuestions from "./methods/getRoomAndQuestions";
import getSmallQRCode from "./methods/getSmallQRCode";
import getMediumQRCode from "./methods/getMediumQRCode";
import getLargeQRCode from "./methods/getLargeQRCode";
import getXLargeQRCode from "./methods/getXLargeQRCode";

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

  getSmallQRCode(hash) {
    return getSmallQRCode(hash);
  }

  getMediumQRCode(hash) {
    return getMediumQRCode(hash);
  }

  getLargeQRCode(hash) {
    return getLargeQRCode(hash);
  }

  getXLargeQRCode(hash) {
    return getXLargeQRCode(hash);
  }

}

export default RoomController;