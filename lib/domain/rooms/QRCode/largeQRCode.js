import { qrcode } from './../../../utils';

export default function(hash) {
  let [header, image] = qrcode({ text: hash, size: 512 }).split(',');
  return {
    type: 'image/gif',
    data: image
  };
}
