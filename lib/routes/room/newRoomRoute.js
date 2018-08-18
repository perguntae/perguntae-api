import Room from './../../rooms/Room';
import RoomService from './../../rooms/RoomService';

export default ({ request, response }) => {

  const { name, description } = request.body;
  const newRoom = new Room({ name, description });
  const roomService = new RoomService();

  roomService.save(newRoom)
    .then(({ room }) => {
      response.json({
        status: 'ok',
        msg: 'Room created.',
        data: newRoom
      })
    })
    .catch(err => {
      response.json(err)
    });    

}