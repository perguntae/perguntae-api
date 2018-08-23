import RoomController from './../../../../application/controllers/Room';

export default ({ request, response }) => {

  const { name, description } = request.body;
  RoomController.createRoom(({ name, description }))
    .then(({ room }) => {
      response.json({
        status: 'ok',
        msg: 'Room created.',
        room
      })
    })
    .catch(err => response.json(err));

}