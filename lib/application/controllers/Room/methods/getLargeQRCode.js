import largeQRinGIF from './../../../usecases/rooms/largeQRinGIF';

const getLargeQRCode = (hash) => {
  return new Promise((resolve, reject) => {
    largeQRinGIF(hash)
      .then(({ room }) => resolve({ room }))
      .catch(err => reject(err));
  });
};

export default getLargeQRCode;