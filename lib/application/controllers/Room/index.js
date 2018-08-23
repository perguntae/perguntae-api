import all from "./methods/all";
import byHash from "./methods/byHash";
import createRoom from "./methods/createRoom";
import getRoomAndQuestions from "./methods/getRoomAndQuestions";
import getSmallQRCode from "./methods/getSmallQRCode";
import getMediumQRCode from "./methods/getMediumQRCode";
import getLargeQRCode from "./methods/getLargeQRCode";
import getXLargeQRCode from "./methods/getXLargeQRCode";
import getRooms from "./methods/getRooms";

class RoomController {
  
  static all() {
    return all();
  }

  static getRooms(userId) {
    return getRooms({ userId })
  }

  static byHash(hash) {
    return byHash(hash);
  }
  
  static createRoom({ name, description }) {
    return createRoom({ name, description });
  }

  static getRoomAndQuestions(hash) {
    return getRoomAndQuestions(hash);
  }

  static getSmallQRCode(hash) {
    return getSmallQRCode(hash);
  }

  static getMediumQRCode(hash) {
    return getMediumQRCode(hash);
  }

  static getLargeQRCode(hash) {
    return getLargeQRCode(hash);
  }

  static getXLargeQRCode(hash) {
    return getXLargeQRCode(hash);
  }

}

export default RoomController;