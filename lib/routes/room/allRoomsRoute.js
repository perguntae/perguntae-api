import Room from './../../rooms/Room';
import RoomService from './../../rooms/RoomService';

export default ({ request, response }) => {

  const roomService = new RoomService();
  roomService.getAll()
    .then(({ rooms }) => {
      const roomsFound = rooms.map(r => new Room(r));
      response.json({
        status: 'ok',
        msg: 'Here are all the rooms',
        data: roomsFound
      })
    })
    .catch(err => {
      response.json(err)
    });

}