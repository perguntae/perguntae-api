import saveRoom from './saveRoom';
import getRoom from './getRoom';
import getRooms from './getRooms';
import QRCode from './QRCode';

export default {
  saveRoom: saveRoom(),
  getRoom: getRoom(),
  getRooms: getRooms(),
  getQRCode: QRCode()
}; 
