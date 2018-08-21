import RoomController from './../../../../application/controllers/Room';
const roomController = new RoomController();

export default ({ request, response }) => {
  const room = request.params.hash;
  roomController.getRoomAndQuestions(room)
    .then(({ room }) => response.json({
      status: 'ok',
      room
    }))
    .catch(response.json);
}