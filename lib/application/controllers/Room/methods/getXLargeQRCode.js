import xLargeQRinGIF from './../../../usecases/rooms/xLargeQRinGIF';

const getXLargeQRCode = (hash) => {
  return new Promise((resolve, reject) => {
    xLargeQRinGIF(hash)
      .then(({ room }) => resolve({ room }))
      .catch(err => reject(err));
  });
};

export default getXLargeQRCode;