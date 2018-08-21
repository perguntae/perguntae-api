import QRCode from './../../../domain/rooms/QRCode';

const largeQRinGIF = (hash) => {
  return new Promise((resolve, reject) => {
    QRCode.getQRCode(hash).large()
      .then(({ data }) => {
        const image = new Buffer(data, 'base64');
        resolve(image);
      })
      .catch(err => reject(err));
  });  
};

export default largeQRinGIF;