import QRCode from './../../../domain/rooms/QRCode';

const xLargeQRinGIF = (hash) => {
  return new Promise((resolve, reject) => {
    QRCode.getQRCode(hash).xLarge()
      .then(({ data }) => {
        const image = new Buffer(data, 'base64');
        resolve(image);
      })
      .catch(err => reject(err));
  });  
};

export default xLargeQRinGIF;