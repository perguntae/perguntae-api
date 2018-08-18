import QRCode from '../../rooms/QRCode';

export default ({ request, response }) => {

  const hash = request.params.hash;

  QRCode.getQRCode(hash).small()
    .then(({ type, data }) => {
      
      const image = new Buffer(data, 'base64');
      response.writeHead(200, {
        'Content-Type': type,
        'Content-Length': image.length
      });
      response.end(image)

    })
    .catch(err => response.json(err));

}