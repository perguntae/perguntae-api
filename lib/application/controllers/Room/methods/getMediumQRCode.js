import mediumQRinGIF from './../../../usecases/rooms/mediumQRinGIF';

const getMediumQRCode = (hash) => {
  return new Promise((resolve, reject) => {
    mediumQRinGIF(hash)
      .then(({ room }) => resolve({ room }))
      .catch(err => reject(err));
  });
};

export default getMediumQRCode;