import RoomController from './../../../../application/controllers/Room';
const roomController = new RoomController();

export default ({ request, response }) => {

  const hash = request.params.hash;
  
  roomController.byHash(hash)
    .then(({ room }) => {
      response.json({ room });
    })
    .catch(err => response.json(err));

}