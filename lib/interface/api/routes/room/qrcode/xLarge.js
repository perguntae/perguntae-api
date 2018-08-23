import RoomController from './../../../../../application/controllers/Room';

export default ({ request, response }) => {

  const hash = request.params.hash;

  RoomController.getXLargeQRCode(hash)
    .then((image) => {
      
      response.writeHead(200, {
        'Content-Type': 'image/gif',
        'Content-Length': image.length
      });
      response.end(image)

    })
    .catch(err => response.json(err));

}