import RoomController from './../../../../application/controllers/Room';
const roomController = new RoomController();

export default ({ request, response }) => {

  const { name, description } = request.body;
  roomController.createRoom(({ name, description }))
    .then(({ room }) => {
      response.json({
        status: 'ok',
        msg: 'Room created.',
        room
      })
    })
    .catch(err => response.json(err));

}