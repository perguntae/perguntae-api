import RoomController from './../../../../../application/controllers/Room';
const roomController = new RoomController();

export default ({ request, response }) => {

  const hash = request.params.hash;

  roomController.getXLargeQRCode(hash)
    .then((image) => {
      
      response.writeHead(200, {
        'Content-Type': 'image/gif',
        'Content-Length': image.length
      });
      response.end(image)

    })
    .catch(err => response.json(err));

}