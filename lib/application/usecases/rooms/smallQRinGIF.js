import QRCode from './../../../domain/rooms/QRCode';

const smallQRinGIF = (hash) => {
  return new Promise((resolve, reject) => {
    QRCode.getQRCode(hash).small()
      .then(({ data }) => {
        const image = new Buffer(data, 'base64');
        resolve(image);
      })
      .catch(err => reject(err));
  });  
};

export default smallQRinGIF;