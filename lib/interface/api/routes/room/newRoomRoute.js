import RoomController from './../../../../application/controllers/Room';

export default ({ request, response }) => {

  const { name, description } = request.body;
  const owner = request.user.id;

  RoomController.createRoom(({ name, description, owner }))
    .then(({ room }) => {
      response.json({
        status: 'ok',
        msg: 'Room created.',
        room
      })
    })
    .catch(err => response.json(err));

}