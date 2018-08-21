import smallQRinGIF from './../../../usecases/rooms/smallQRinGIF';

const getSmallQRCode = (hash) => {
  return new Promise((resolve, reject) => {
    smallQRinGIF(hash)
      .then(({ room }) => resolve({ room }))
      .catch(err => reject(err));
  });
};

export default getSmallQRCode;