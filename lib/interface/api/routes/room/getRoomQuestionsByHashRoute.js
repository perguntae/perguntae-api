import RoomController from './../../../../application/controllers/Room';

export default ({ request, response }) => {
  const room = request.params.hash;
  RoomController.getRoomAndQuestions(room)
    .then(({ room }) => response.json({
      status: 'ok',
      room
    }))
    .catch(response.json);
}