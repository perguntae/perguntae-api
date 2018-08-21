import RoomService from './../RoomService';
import smallQRCode from './smallQRCode';
import mediumQRCode from './mediumQRCode';
import largeQRCode from './largeQRCode';
import xLargeQRCode from './xLargeQRCode';

const roomService = new RoomService();

const getRightQRCode = (hash, qrcode = () => {}) => {
  return () => {
    return new Promise((resolve, reject) => {
      roomService.getByHash(hash, (err, room) =>  {
        if (err) reject(err)
        resolve(qrcode(hash));
      })
    })
  }
}

const QRCode = (hash) => {
  return {
    small: getRightQRCode(hash, smallQRCode),
    medium: getRightQRCode(hash, mediumQRCode),
    large: getRightQRCode(hash, largeQRCode),
    xLarge: getRightQRCode(hash, xLargeQRCode)
  }
}

export default QRCode; 
