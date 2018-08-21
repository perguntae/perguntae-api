import QRCode from './../../../domain/rooms/QRCode';

const mediumQRinGIF = (hash) => {
  return new Promise((resolve, reject) => {
    QRCode.getQRCode(hash).medium()
      .then(({ data }) => {
        const image = new Buffer(data, 'base64');
        resolve(image);
      })
      .catch(err => reject(err));
  });  
};

export default mediumQRinGIF;