import RoomController from './../../../../application/controllers/Room';

export default ({ request, response }) => {

  const hash = request.params.hash;
  
  RoomController.byHash(hash)
    .then(({ room }) => {
      response.json({ room });
    })
    .catch(err => response.json(err));

}