import Room from './../../rooms/Room';
import RoomService from './../../rooms/RoomService';

export default ({ request, response }) => {

  const hash = request.params.hash;
  const roomService = new RoomService();

  roomService.getByHash(hash)
    .then(({ room }) => {
      const roomFound = new Room(room.toJSON());
      response.json(roomFound);
    })
    .catch(err => response.json(err));

}